import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "clipgen-ai-f9f86.firebaseapp.com",
  projectId: "clipgen-ai-f9f86",
  storageBucket: "clipgen-ai-f9f86.firebasestorage.app",
  messagingSenderId: "738767095896",
  appId: "1:738767095896:web:07e2eaad504883a59d622d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

import { signOut, sendEmailVerification, sendSignInLinkToEmail, signInWithEmailLink, isSignInWithEmailLink } from 'firebase/auth';

export const logout = () => signOut(auth);
export const sendEmailVerificationFn = (user) => sendEmailVerification(user);
export const sendSignInLink = (email) => sendSignInLinkToEmail(auth, email, {
  url: window.location.href,
  handleCodeInApp: true,
});
export const signInWithEmailLinkFn = (email, link) => signInWithEmailLink(auth, email, link);

export default app;
