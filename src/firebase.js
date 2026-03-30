import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJdMPT2ERjUHsKNdkXWt_Dpk_Wvv-Zp70",
  authDomain: "clipgen-ai-22bba.firebaseapp.com",
  projectId: "clipgen-ai-22bba",
  storageBucket: "clipgen-ai-22bba.firebasestorage.app",
  messagingSenderId: "55215051410",
  appId: "1:55215051410:web:83518c8c6f08c72e74cc4b"
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
