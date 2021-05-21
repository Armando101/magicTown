const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
  avatar: {
    type: String,
    required: true,
    default:
      "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub_t.jpg",
  },
});

UserSchema.method("toJSON", function () {
  const { __v, _id, ...restOfUser } = this.toObject();
  restOfUser.id = _id;
  return restOfUser;
});

module.exports = model("User", UserSchema);
