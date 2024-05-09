import { Link } from "react-router-dom";

import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-screen overflow-hidden">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[280px] sm:w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>

          <LoginForm />

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?
            <Link to="/sign-up" className="underline ml-1">
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <div className="h-full overflow-hidden">
        <img
          alt="Login Page image || Beautiful house"
          src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D"
          className="hidden object-cover lg:block w-full h-full"
        />
      </div>
    </div>
  );
};

export default Login;
