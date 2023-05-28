import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

const authSingInUser = () => async (dispatch, getState) => {};
const authSingUpUser = async ({ login, email, password }) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (error) {
    throw error;
  }
};

// const authSingUpUser = ({ login, email, password }) =>
//   console.log(login, email, password);
// async (dispatch, getState) => {
//   try {
//     const auth = getAuth();
//     console.log("it`s a try");
//     const user = await createUserWithEmailAndPassword(auth, email, password);
//     console.log("user", user);
//   } catch (error) {
//     console.log("error", error.message);
//   }
// };
const authSingOutUser = () => async (dispatch, getState) => {};

export { authSingInUser, authSingUpUser, authSingOutUser };
