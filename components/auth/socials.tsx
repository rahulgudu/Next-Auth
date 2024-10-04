import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Socials = () => {
  const onClick = async (provider: "google" | "github") => {
    try {
      const response = await signIn(provider, {
        callbackUrl: DEFAULT_LOGIN_REDIRECT,
      });
      if (response?.error) {
        console.error("Error during sign-in:", response.error);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div className="flex items-center w-full gap-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => {
          onClick("google");
        }}>
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => {
          onClick("github");
        }}>
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
