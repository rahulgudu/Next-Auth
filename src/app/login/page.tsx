"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "../../../actions/login";

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const res = await login({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if ("error" in res) {
      setError(res.error);
    } else {
      router.push("/");
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
          <form className="flex flex-col gap-4" onSubmit={loginHandler}>
            <Input type="email" placeholder="Email" name="email" />
            <Input type="password" placeholder="Password" name="password" />
            {error ? (
              <p className="text-destructive font-normal text-sm">{error}</p>
            ) : (
              ""
            )}
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
