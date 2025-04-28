import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "http://127.0.0.1:3000", //change the url based on your backend url
});

// export const { signIn, signUp, useSession } = authClient;
