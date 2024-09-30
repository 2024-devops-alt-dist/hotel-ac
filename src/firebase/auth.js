import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
export const signUp = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};
