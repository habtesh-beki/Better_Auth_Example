import { Button } from "../ui/button";
import { authClient } from "../../lib/auth-client";

export default function StartPage() {
  return (
    <div className="w-full h-screen bg-[#334e4f] flex flex-col gap-3 justify-center items-center">
      <h1>Better Auth</h1>
      <Button
        onClick={() =>
          authClient.signIn.social({ provider: "google", callbackURL: "/home" })
        }
        className="cursor-pointer border"
      >
        continue with google
      </Button>
    </div>
  );
}
