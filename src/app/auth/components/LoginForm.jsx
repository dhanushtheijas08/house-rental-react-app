import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../schema/authSchema";
import { Form } from "@/components/ui/form";
import AppFormField from "@/components/AppFormField";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "@/service/apiAuth";
import { loginSuccess } from "@/store/authReducer";

const formDetials = [
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

const LoginForm = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "sample@gmail.com",
      password: "123456",
    },
  });
  const dispatch = useDispatch();
  const {
    formState: { isSubmitting },
  } = form;
  const onUserLogin = async (values) => {
    const user = await loginUser(values);
    if (!user) return;
    dispatch(
      loginSuccess({ userEmail: user.user.email, userUid: user.user.uid })
    );
    navigate("/admin/dashboard");
  };

  return (
    <Form {...form}>
      <div className="grid gap-4">
        <form onSubmit={form.handleSubmit(onUserLogin)} className="grid gap-2">
          {formDetials.map((formItems) => (
            <AppFormField
              form={form}
              inputPlaceholder={formItems.inputPlaceholder}
              inputType={formItems.inputType}
              label={formItems.label}
              name={formItems.name}
              key={formItems.name}
              isPending={isSubmitting}
            />
          ))}

          <Button type="submit" disabled={isSubmitting} className="w-full mt-6">
            Login
          </Button>
        </form>
      </div>
    </Form>
  );
};

export default LoginForm;
