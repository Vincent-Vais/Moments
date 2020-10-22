import React from "react";
import { shallow } from "enzyme";
import Post from "./Post.component";
import { mockClasses } from "../../setupTests";

const mockPost = {
  username: "vince_vais",
  imageUrl:
    "https://images.unsplash.com/photo-1602411583503-195316dad599?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  comment:
    "lorem ipsum sit emiet dolor lorem ipsum sit emiet dolorlorem ipsum sit emiet dolorlorem ipsum sitemiet dolor lorem ipsum sit emiet dolorlorem ipsum sit emiet dolor",
};

const getPresentComponent = () => (
  <Post post={mockPost} classes={mockClasses} />
);

describe("Post component", () => {
  it("renders presentational component", () => {
    const component = shallow(getPresentComponent());
    expect(component).toMatchSnapshot();
  });
});
