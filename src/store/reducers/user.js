import types from "../types";

const { user } = types;

const INIT_STATE = null;

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case user.UPDATE_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
