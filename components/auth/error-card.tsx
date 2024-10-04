import { Header } from "./header";
import { BackButton } from "./back-button";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Oops! something went wrong" />
      </CardHeader>
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive w-10 h-10" />
      </div>
      <CardFooter>
        <BackButton label="Back to login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};
