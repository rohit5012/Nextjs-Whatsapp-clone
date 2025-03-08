"use client";

import { useRouter } from "next/navigation";
import React, { use } from "react";
import { handleSignIn } from "./helper";

const LoginButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      className="p-4 border-black-rounded border-2 rounded-md hover:bg-gray-100 text-gray-400"
      onClick={() => handleSignIn(router)}
    >
      Sign In With Google
    </button>
  );
};

export default LoginButton;
