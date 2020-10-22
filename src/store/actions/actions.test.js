import React from "react";
import actions from "./index";
import types from "../types";

describe("Posts actions", () => {
  it("updates empty posts", () => {
    const posts = [];
    expect(actions.posts.updatePosts(posts)).toEqual({
      type: types.posts.UPDATE_POSTS,
      payload: [],
    });
  });
  it("updates posts", () => {
    const posts = [
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
    expect(actions.posts.updatePosts(posts)).toEqual({
      type: types.posts.UPDATE_POSTS,
      payload: [
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
      ],
    });
  });
});
