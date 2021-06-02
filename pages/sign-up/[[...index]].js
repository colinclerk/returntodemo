import { useMemo } from "react";
import { SignUp } from "@clerk/clerk-react";
import resolveReturnTo from "../../utils/resolveReturnTo";

function SignUpPage() {
  const mountPath = "/sign-up";
  const afterSignUp = useMemo(() => resolveReturnTo(mountPath), []);

  return <SignUp routing="path" path={mountPath} afterSignUp={afterSignUp} />;
}

export default SignUpPage;
