const { Schema, model } = require("mongoose");

const UserFavoriteSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  town: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Town",
  },
});

UserFavoriteSchema.method("toJSON", function () {
  const { __v, _id, ...restOfFavorite } = this.toObject();
  restOfFavorite.id = _id;
  return restOfFavorite;
});

module.exports = model("UserFavorite", UserFavoriteSchema);
