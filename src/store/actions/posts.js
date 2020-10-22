import types from "../types";

const { posts } = types;

const updatePosts = (postsArr) => ({
  type: posts.UPDATE_POSTS,
  payload: postsArr,
});

export default { updatePosts };
