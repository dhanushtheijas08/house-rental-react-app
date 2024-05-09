import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase-config";

export const createUser = async (values) => {
  console.log(values);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    const userId = userCredential.user.uid;
    return userCredential;
  } catch (error) {
    console.log(error);
    if (error.code === "auth/email-already-in-use") {
      throw new Error("The email address is already in use.");
    } else if (error.code === "auth/invalid-email") {
      throw new Error("The email address is invalid.");
    } else {
      throw new Error("Failed to create user. Please try again later.");
    }
  }
};

const logoutUser = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error(error);
  }
};

export { logoutUser };
