import { Button } from "./components/ui/button";
import { authClient } from "./lib/auth-client";

function App() {
  //   const {
  //     data: session,
  //     isPending,
  //     error,
  //     refetch
  // } = authClient.useSession()

  // const signup = async () =>
  //   await authClient.signIn.social({
  //     provider: "google",
  //     callbackURL: "/dashboard",
  //     errorCallbackURL: "/error",
  //     newUserCallbackURL: "/welcome",
  //     disableRedirect: true,
  //   });

  return (
    <div className="w-full h-screen bg-[#334e4f] flex flex-col gap-3 justify-center items-center">
      <h1>Better Auth</h1>
      <Button
        onClick={() => authClient.signIn.social({ provider: "google" })}
        className="cursor-pointer border"
      >
        continue with google
      </Button>
    </div>
  );
}

export default App;
