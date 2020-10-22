import postsReducer from "./posts";
import actions from "../actions";
import types from "../types";
import { mockStore } from "../../setupTests";

describe("Posts reducer", () => {
  it("handles update posts", () => {
    const store = mockStore(
      {
        username: "vince_vais",
        imageUrl: "owkeofkwoki23mir23",
        comment: "new comment",
      },
      {
        username: "yan_vais",
        imageUrl: "aknejwnfjwnefjnwejfn",
        comment: "old comment",
      }
    );
    const postsFromDb = [
      {
        username: "vince_vais",
        imageUrl: "owkeofkwoki23mir23",
        comment: "new comment",
      },
      {
        username: "yan_vais",
        imageUrl: "aknejwnfjwnefjnwejfn",
        comment: "old comment",
      },
      {
        username: "jane_doe",
        imageUrl:
          "https://images.unsplash.com/photo-1602411583503-195316dad599?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        comment: "hello world",
      },
    ];
    const action = store.dispatch(actions.posts.updatePosts(postsFromDb));
    expect(postsReducer(store.getState(), action)).toEqual([
      {
        username: "vince_vais",
        imageUrl: "owkeofkwoki23mir23",
        comment: "new comment",
      },
      {
        username: "yan_vais",
        imageUrl: "aknejwnfjwnefjnwejfn",
        comment: "old comment",
      },
      {
        username: "jane_doe",
        imageUrl:
          "https://images.unsplash.com/photo-1602411583503-195316dad599?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        comment: "hello world",
      },
    ]);
  });
});
