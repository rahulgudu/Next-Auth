"use server";

import { RegisterSchema } from "@/schemas";

export const register = async (values: unknown) => {
  const validateFields = RegisterSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  return {
    success: "Email sent!",
  };
};
