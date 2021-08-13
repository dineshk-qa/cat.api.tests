const base = require('../../utils/base-library');

exports.favouritePost = {
  image_id: `${base.uuid()}`,
  sub_id: process.env.USER_ID,
};
