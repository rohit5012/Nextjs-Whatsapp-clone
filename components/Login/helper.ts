import { auth, googleProvider } from "@/lib/firebase";
import { addUserToFirestore } from "@/lib/firebase/userController";
import { signInWithPopup } from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleSignIn = (router: AppRouterInstance) => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result?.user;
      addUserToFirestore(user);
      router.push("/");
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};
