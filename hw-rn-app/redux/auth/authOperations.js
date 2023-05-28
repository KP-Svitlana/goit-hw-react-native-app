import db from "../../firebase/config";

const authSingUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await db
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };
const authSingInUser = () => async (dispatch, getState) => {};
const authSingOutUser = () => async (dispatch, getState) => {};

export { authSingUpUser, authSingInUser, authSingOutUser };
