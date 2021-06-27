const { Schema, model } = require("mongoose");

const TownSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  rate: {
    type: Number,
    required: true,
    default: 0,
  },
  incorporation_year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  weather: {
    type: String,
    required: true,
  },
  biome: {
    type: String,
    required: true,
  },
  attractions: {
    type: Array,
    required: true,
    default: [],
  },
  festivities: {
    type: Array,
    required: true,
    default: [],
  },
  dishes: {
    type: Array,
    required: true,
    default: [],
  },
  ethnics: {
    type: Array,
    required: true,
    default: [],
  },
  mapURL: {
    type: String,
    required: true,
  },
  coverURL: {
    type: String,
    required: true,
  },
  photos: {
    type: Array,
    required: true,
    default: [],
  },
  reviewsCounter: {
    type: Number,
    required: true,
    default: 0,
  },
  totalReviewsCounter: {
    type: Number,
    required: true,
    default: 0,
  },
  rateAccumulator: {
    type: Number,
    required: true,
    default: 0,
  },
});

TownSchema.index({
  name: "text",
  incorporation_year: "text",
  description: "text",
  state: "text",
  weather: "text",
  biome: "text",
  attractions: "text",
  festivities: "text",
  dishes: "text",
  ethnics: "text",
});

TownSchema.method("toJSON", function () {
  const { __v, _id, ...restOfTown } = this.toObject();
  restOfTown.id = _id;
  return restOfTown;
});

module.exports = model("Town", TownSchema);
