"use server";

import { signIn } from "@/auth";
import { CredentialsSignin } from "next-auth";

type LoginResponse = { error: string } | { success: true };

export const login = async (formData: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const { email, password } = formData;
  console.log(email, password);

  if (!email || !password) {
    return { error: "Please provide all the details" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return { success: true };
  } catch (error) {
    const err = error as CredentialsSignin;
    return { error: err.message || "An unexpected error occurred" };
  }
};
