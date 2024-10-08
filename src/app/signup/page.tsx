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
import { connectToDB } from "@/lib/connectDB";
import { User } from "@/models/user.model";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";
const Signup = () => {
  const signUp = async (formData: FormData) => {
    "use server";
    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;

    console.log("Details", name, email, password);

    // Check if any of the fields are null
    if (!name || !email || !password) {
      throw new Error("All fields are required");
    }

    await connectToDB();

    const user = await User.findOne({ email });

    if (user) throw new Error("User already exists");

    const hashedPassword = await hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword,
    });
    redirect("/login");
  };

  return (
    <div className="flex justify-center items-center h-dvh">
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={signUp}>
            <Input type="name" placeholder="Name" name="name" />
            <Input type="email" placeholder="Email" name="email" />
            <Input type="password" placeholder="Password" name="password" />
            <Button type="submit">Sign Up</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <span>Or</span>
          <form>
            <Button
              type="submit"
              variant="outline"
              className="bg-blue-500 text-white hover:bg-blue-900 hover:text-white">
              Signup With Google
            </Button>
          </form>
          <Link href="/login">Already have an account? Login</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
