import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { User } from "./models/user.model";
import { compare } from "bcryptjs";
import { connectToDB } from "./lib/connectDB";
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
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;
        console.log(email, password);
        if (!email || !password)
          throw new CredentialsSignin("Please provide email and password");

        await connectToDB();
        const user = await User.findOne({ email }).select("+password");

        if (!user) throw new CredentialsSignin("Invalid email");

        if (!user.password)
          throw new CredentialsSignin("Invalid Email or Password");

        const isMacth = await compare(password, user.password);
        if (!isMacth) {
          throw new CredentialsSignin("Password does not match");
        } else return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
