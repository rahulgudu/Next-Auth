import { auth, signOut } from "@/auth";
import React from "react";

const Settings = async () => {
  const session = await auth();
  return (
    <div>
      Settings Page
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut({
            redirectTo: "/auth/login"
          });
        }}>
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
};

export default Settings;
