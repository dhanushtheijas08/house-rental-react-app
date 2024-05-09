import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
import { toast } from "sonner";
const createUser = async (values) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    toast.success("User created successfully");
    const userId = userCredential.user.uid;
    return userCredential;
  } catch (error) {
    console.log(error);
    if (error.code === "auth/email-already-in-use")
      toast.error("The email address is already in use.");
    else if (error.code === "auth/invalid-email")
      toast.error("The email address is invalid.");
    else toast.error("Failed to create user. Please try again later.");
    return;
  }
};

const loginUser = async (values) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    toast.success("Login Successful");
    return userCredential;
  } catch (error) {
    console.error("Login error:", error);

    if (error.code === "auth/invalid-credential") {
      toast.error("Invalid User Credential");
      return;
    } else {
      toast.error("Failed to login. Please try again later.");
      return;
    }
  }
};

const logoutUser = async () => {
  try {
    await signOut(auth);
    toast.success("Logout Successful");
    return true;
  } catch (error) {
    console.error(error);
    toast.error("Failed to logout. Please try again later.");
  }
};

export { logoutUser, createUser, loginUser };
