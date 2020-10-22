import types from "../types";

const { user } = types;

const updateUser = (newUser) => ({
  type: user.UPDATE_USER,
  payload: newUser,
});

export default { updateUser };
