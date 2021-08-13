const supertest = require('supertest');
const base = require('../utils/base-library');
const postBody = require('../json-data/request-bodies/favourite');
const getFavouriteSubset = require('../json-data/response-subsets/get.favourite.json');
require('dotenv-safe').config();

const request = supertest(process.env.BASE_URL);

describe('Cat Api Tests', () => {
  let authHeader;
  let favouriteId;
  let getFavouriteResponse;
  beforeAll(async () => {
    authHeader = await base.authHeader();
  });
  describe('Save Favuorite', () => {
    let postResponse;

    beforeAll(async () => {
      postResponse = await request.post('/favourites').set(authHeader).send(postBody.favouritePost);
      favouriteId = postResponse.body.id;
    });
    it('returns 200 status', () => {
      expect(postResponse.statusCode).toBe(200);
    });
    it('returns an id', () => {
      expect(postResponse.body).toHaveProperty('id');
    });
    it('returns success message', () => {
      expect(postResponse.body.message).toEqual('SUCCESS');
    });
  });
  describe('get specific post details', () => {
    beforeAll(async () => {
      getFavouriteResponse = await request.get(`/favourites/${favouriteId}`).set(authHeader);
    });
    it('returns 200 status', () => {
      expect(getFavouriteResponse.statusCode).toBe(200);
    });
    it('returns expected favourite id', () => {
      expect(getFavouriteResponse.body.id).toEqual(favouriteId);
    });
    it('returns expected response', () => {
      expect(getFavouriteResponse.body).toEqual(expect.objectContaining(getFavouriteSubset[0]));
    });
  });
  describe('get all favourites', () => {
    let getResponse;
    beforeAll(async () => {
      getResponse = await request.get(`/favourites`).set(authHeader);
    });
    it('returns 200 status', () => {
      expect(getResponse.statusCode).toBe(200);
    });
    it('returns an array of 1 or more objects', () => {
      expect(getResponse.body.length).toBeGreaterThanOrEqual(1);
    });
    it('returns expected response properties and values', () => {
      expect(getResponse.body).toContainEqual(getFavouriteResponse.body);
    });
  });
  describe('delete a specific favourite', () => {
    let deleteResponse;
    beforeAll(async () => {
      deleteResponse = await request.delete(`/favourites/${favouriteId}`).set(authHeader);
    });
    it('returns 200 status', () => {
      expect(deleteResponse.statusCode).toBe(200);
    });
    it('returns success message', () => {
      expect(deleteResponse.body.message).toEqual('SUCCESS');
    });
  });
});
