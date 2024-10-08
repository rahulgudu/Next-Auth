import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn } from "@/auth";
import { CredentialsSignin } from "next-auth";

const Login = () => {
  const loginHandler = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string | undefined;
    const password = formData.get("password") as string | undefined;

    if (!email || !password) throw new Error("Please provide all the details");

    try {
      await signIn("credentials", {
        email,
        password,
        redirect: true,
        redirectTo: "/"
      });
    } catch (error) {
      const err = error as CredentialsSignin;
      return err.message;
    }
  };
  return (
    <div className="flex justify-center items-center h-dvh">
      <Card>
        <CardHeader>
          <CardTitle>Login Here</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={loginHandler}>
            <Input type="email" placeholder="Email" name="email" />
            <Input type="password" placeholder="Password" name="password" />
            <Button type="submit">Login</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <span>Or</span>
          <form>
            <Button
              type="submit"
              variant="outline"
              className="bg-blue-500 text-white hover:bg-blue-900 hover:text-white">
              Login With Google
            </Button>
          </form>
          <Link href="/signup">Don&apos;t have an account? Signup</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
