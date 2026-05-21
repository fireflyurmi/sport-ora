import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
});

export const auth = betterAuth({
  database: mongodbAdapter(client.db("sportora")),

  secret: process.env.BETTER_AUTH_SECRET,

  plugins: [nextCookies()],

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },

  baseURL: process.env.BETTER_AUTH_URL,
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      // maxAge 7 days in seconds
      maxAge: 7 * 24 * 60 * 60,
    },
  },
  plugins: [jwt()],
});
