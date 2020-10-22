import types from "../types";

const { posts } = types;

const INIT_STATE = [
  {
    username: "vince_vais",
    imageUrl:
      "https://images.unsplash.com/photo-1602411583503-195316dad599?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    comment:
      "lorem ipsum sit emiet dolor lorem ipsum sit emiet dolorlorem ipsum sit emiet dolorlorem ipsum sitemiet dolor lorem ipsum sit emiet dolorlorem ipsum sit emiet dolor",
  },
  {
    username: "vince_vais",
    imageUrl:
      "https://images.unsplash.com/photo-1602411583503-195316dad599?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    comment:
      "lorem ipsum sit emiet dolor lorem ipsum sit emiet dolorlorem ipsum sit emiet dolorlorem ipsum sitemiet dolor lorem ipsum sit emiet dolorlorem ipsum sit emiet dolor",
  },
];

const postsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case posts.UPDATE_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;
