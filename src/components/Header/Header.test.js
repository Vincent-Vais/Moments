import React from "react";
import { shallow } from "enzyme";
import Header from "./Header.component";
import { mockClasses } from "../../setupTests";

const getPresentComponent = () => <Header classes={mockClasses} />;

describe("Header component", () => {
  it("renders presentational component", () => {
    const component = shallow(getPresentComponent());
    expect(component).toMatchSnapshot();
  });
});
