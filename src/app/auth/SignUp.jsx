import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen py-6">
      <Card className="mx-auto w-[280px] sm:w-[25rem]">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <SignUpForm />
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?
            <Link to="/login" className="underline ml-1">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default SignUp;
