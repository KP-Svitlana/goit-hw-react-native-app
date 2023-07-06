import db from "../../firebase/config";
import { authSlice } from "./authReducer";

const authSingUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await db
        .auth()
        .createUserWithEmailAndPassword(email, password);
      dispatch(authSlice.actions.updateUserProfile({ userId: user.uid }));
      console.log("userSingUp", user);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };
const authSingInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await db.auth().signInWithEmailAndPassword(email, password);
      console.log("userSingIn", user);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };
const authSingOutUser = () => async (dispatch, getState) => {};

const authStateChangeUser = () => async (dispatch, getState) => {};

export { authSingUpUser, authSingInUser, authSingOutUser, authStateChangeUser };
