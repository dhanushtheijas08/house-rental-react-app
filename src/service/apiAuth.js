import { useDispatch } from "react-redux";

import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

const logoutUser = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error(error);
  }
};

export { logoutUser };
