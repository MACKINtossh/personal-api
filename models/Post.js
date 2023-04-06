import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    description: {
      type: String,
      max: 500,
    },
    friends: {
      type: Array,
      default: [],
    },
    location: {
      type: String,
    },
    picturePath: {
      type: String,
      default: "",
    },
    userPicturePath: {
      type: String,
      default: "",
    },
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
