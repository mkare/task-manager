import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Kullanıcı kaydı
export const signUp = async (
  email: string,
  password: string
): Promise<string | null> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user.uid;
  } catch (error) {
    console.log("Kayıt hatası:", error);
    return null;
  }
};

// Kullanıcı girişi
export const signIn = async (
  email: string,
  password: string
): Promise<string | null> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user.uid;
  } catch (error) {
    console.log("Giriş hatası:", error);
    return null;
  }
};

// Kullanıcı çıkışı
export const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log("Çıkış hatası:", error);
  }
};
