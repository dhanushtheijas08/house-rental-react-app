import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { sighUpSchema } from "../schema/authSchema";
import { Form } from "@/components/ui/form";
import AppFormField from "@/components/AppFormField";
import { Button } from "@/components/ui/button";

import { auth } from "@/service/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const formDetials = [
  {
    name: "username",
    label: "Username",
    inputType: "text",
    inputPlaceholder: "sara",
  },
  {
    name: "email",
    label: "Email",
    inputType: "text",
    inputPlaceholder: "sample@gmail.com",
  },
  {
    name: "password",
    label: "Password",
    inputType: "password",
    inputPlaceholder: "*******",
  },
];

const SignUpForm = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(sighUpSchema),
    defaultValues: {
      username: "sara",
      email: "sample@gmail.com",
      password: "123456",
    },
  });

  const onCreateUser = async (values) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    const userId = userCredential.user.uid;
    console.log(userId);

    navigate("/");
  };

  return (
    <Form {...form}>
      <div className="grid gap-4">
        <form onSubmit={form.handleSubmit(onCreateUser)} className="grid gap-2">
          {formDetials.map((formItems) => (
            <AppFormField
              form={form}
              inputPlaceholder={formItems.inputPlaceholder}
              inputType={formItems.inputType}
              label={formItems.label}
              name={formItems.name}
              key={formItems.name}
            />
          ))}

          <Button type="submit" className="w-full mt-6">
            Sign Up
          </Button>
        </form>
      </div>
    </Form>
  );
};

export default SignUpForm;
