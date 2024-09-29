"use client";
import { useRouter } from "next/navigation";
interface LoginProps {
  children: React.ReactNode;
  mode: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginProps) => {
  const router = useRouter();
  const handleClick = () => {
    // console.log("Login button clciked");
    return router.push("/auth/login");
  };
  if (mode === "modal") {
    return (
      <span className="text-green-200 font-bold">TODO: Implement Modal</span>
    );
  }
  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
};
