import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

configure({ adapter: new Adapter() });

export function MockTheme({ children }) {
  const theme = createMuiTheme({});
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const middlewares = [];
export const mockStore = configureStore(middlewares);

export const mockClasses = {};
