import NextAuth from "next-auth";
import { authOptions } from "SpaceTraders/server/auth";

export default NextAuth(authOptions);
