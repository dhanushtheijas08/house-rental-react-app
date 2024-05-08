import { firestore } from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { auth, config } from "firebase-functions";
initializeApp(config().firebase);
export const onUserCreate = auth.user().onCreate(async (user) => {
  await firestore().doc(`users/${user.uid}`).create({
    isPro: false,
  });
});
