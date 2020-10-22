import React from "react";
import { shallow } from "enzyme";
import App from "./App.component";
import { mockClasses } from "../setupTests";

const getPresentComponent = () => <App classes={mockClasses} />;

describe("App component", () => {
  it("renders presentational component", () => {
    const component = shallow(getPresentComponent());
    expect(component).toMatchSnapshot();
  });
});
