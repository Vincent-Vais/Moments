import selectors from "./index";

describe("Post selectors", () => {
  it("selects posts from state", () => {
    const mockState = {
      posts: [
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
    };
    expect(selectors.posts.selectPosts(mockState)).toEqual([
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
    ]);
  });
});
