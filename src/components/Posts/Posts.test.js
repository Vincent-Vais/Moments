import React from "react";
import { shallow } from "enzyme";
import Post from "./Posts.component";
import { mockClasses } from "../../setupTests";

const mockPosts = [
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

const getPresentComponent = () => (
  <Post posts={mockPosts} classes={mockClasses} />
);

describe("Posts component", () => {
  it("renders presentational component", () => {
    const component = shallow(getPresentComponent());
    expect(component).toMatchSnapshot();
  });
});
