import { useMemo } from "react";
import { SignIn } from "@clerk/clerk-react";
import resolveReturnTo from "../../utils/resolveReturnTo";

export default function SignInPage() {
  const mountPath = "/sign-in";
  const afterSignIn = useMemo(() => resolveReturnTo(mountPath), []);

  return <SignIn routing="path" path={mountPath} afterSignIn={afterSignIn} />;
}
