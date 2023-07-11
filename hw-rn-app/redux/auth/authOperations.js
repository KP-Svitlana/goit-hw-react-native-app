import db from "../../firebase/config";
import { authSlice } from "./authReducer";

const authSingUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      await db.auth().createUserWithEmailAndPassword(email, password);
      const user = await db.auth().currentUser;

      await user.updateProfile({ displayName: login });

      const updateUserSuccess = await db.auth().currentUser;
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: updateUserSuccess.uid,
          login: updateUserSuccess.displayName,
          email: updateUserSuccess.email,
        })
      );
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
      await db.auth().signInWithEmailAndPassword(email, password);
      const user = await db.auth().currentUser;
      const updateUserSuccess = await db.auth().currentUser;
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: updateUserSuccess.uid,
          email: updateUserSuccess.email,
        })
      );
      console.log("userSingIn", user);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };
const authSingOutUser = () => async (dispatch, getState) => {
  await db.auth().signOut();
  dispatch(authSlice.actions.authSingOut());
};

const authStateChangeUser = () => async (dispatch, getState) => {
  await db.auth().onAuthStateChanged((user) => {
    if (user) {
      const userUpdateProfile = {
        userId: user.uid,
        login: user.displayName,
        email: user.email,
      };

      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
    }
  });
};

export { authSingUpUser, authSingInUser, authSingOutUser, authStateChangeUser };
