import NextAuth from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { firebaseCert } from "./firebase";
import Google from "@auth/core/providers/google";


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  adapter: FirestoreAdapter({
    credential: firebaseCert
  }),
})