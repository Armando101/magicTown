const { Schema, model } = require("mongoose");

const TownReviewSchema = Schema({
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
  rate: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  creation_date: {
    type: String,
    required: true,
  },
});

TownReviewSchema.method("toJSON", function () {
  const { __v, _id, ...restOfTownReview } = this.toObject();
  restOfTownReview.id = _id;
  return restOfTownReview;
});

module.exports = model("TownReview", TownReviewSchema);
