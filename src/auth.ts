import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: ({ email, password }) => {
        console.log(email, password);
        if (typeof email !== "string")
          throw new CredentialsSignin("Password doesn't match");
        const user = { email: "ssdd", id: "dfd" };
        if (password !== "passcode") {
          throw new CredentialsSignin("Password does not match");
        } else return user;
      },
    }),
  ],
});
