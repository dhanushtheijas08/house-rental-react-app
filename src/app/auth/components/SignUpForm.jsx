// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { sighUpSchema } from "../schema/authSchema";
// import { Form } from "@/components/ui/form";
// import AppFormField from "@/components/AppFormField";
// import { Button } from "@/components/ui/button";

// import { useNavigate } from "react-router-dom";
// import { createUser } from "@/service/apiAuth";
// import { useMutation } from "@tanstack/react-query";
// import { toast } from "sonner";

// const formDetials = [
//   {
//     name: "username",
//     label: "Username",
//     inputType: "text",
//     inputPlaceholder: "dhanush theijas",
//   },
//   {
//     name: "email",
//     label: "Email",
//     inputType: "text",
//     inputPlaceholder: "sample@gmail.com",
//   },
//   {
//     name: "password",
//     label: "Password",
//     inputType: "password",
//     inputPlaceholder: "*******",
//   },
// ];

// const SignUpForm = () => {
//   const navigate = useNavigate();
//   const form = useForm({
//     resolver: zodResolver(sighUpSchema),
//     defaultValues: {
//       username: "sara",
//       email: "sample@gmail.com",
//       password: "123456",
//     },
//   });

//   const { isPending, mutate } = useMutation({
//     queryKey: ["signup"],
//     queryFn: (values) => {
//       return createUser(values);
//     },
//     onSuccess: () => {
//       toast.success("Register Successfully");
//       navigate("/admin/dashboard");
//     },
//     // onError: (err) => {
//     //   console.log(err.message);
//     //   if (err.message === "The email address is already in use.") {
//     //     toast.error("The email address is already in use.");
//     //   } else if (err.message === "The email address is invalid.") {
//     //     toast.error("The email address is invalid.");
//     //   } else {
//     //     toast.error("Failed to create user. Please try again later.");
//     //   }
//     //   // navigate("/login");
//     // },
//   });

//   const handleFormSubmit = (values) => mutate(values);

//   return (
//     <Form {...form}>
//       <div className="grid gap-4">
//         <form
//           onSubmit={form.handleSubmit(handleFormSubmit)}
//           className="grid gap-2"
//         >
//           {formDetials.map((formItems) => (
//             <AppFormField
//               form={form}
//               inputPlaceholder={formItems.inputPlaceholder}
//               inputType={formItems.inputType}
//               label={formItems.label}
//               name={formItems.name}
//               key={formItems.name}
//               isPending={isPending}
//             />
//           ))}

//           <Button type="submit" disabled={isPending} className="w-full mt-6">
//             {isPending ? "Loading..." : "Sign Up"}
//           </Button>
//         </form>
//       </div>
//     </Form>
//   );
// };

// export default SignUpForm;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { sighUpSchema } from "../schema/authSchema";
import { Form } from "@/components/ui/form";
import AppFormField from "@/components/AppFormField";
import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";
import { createUser } from "@/service/apiAuth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const formDetials = [
  {
    name: "username",
    label: "Username",
    inputType: "text",
    inputPlaceholder: "dhanush theijas",
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

  const { isPending, mutate } = useMutation({
    queryKey: ["signup"],
    queryFn: async (values) => {
      try {
        return await createUser(values);
      } catch (error) {
        console.error(error);
        const errorMessage =
          error.response?.data?.message || "Failed to create user.";
        toast.error(errorMessage);
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Register Successfully");
      navigate("/admin/dashboard");
    },
  });

  const handleFormSubmit = (values) => {
    console.log(values);
    createUser(values);
    // mutate(values);
  };

  return (
    <Form {...form}>
      <div className="grid gap-4">
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="grid gap-2"
        >
          {formDetials.map((formItems) => (
            <AppFormField
              form={form}
              inputPlaceholder={formItems.inputPlaceholder}
              inputType={formItems.inputType}
              label={formItems.label}
              name={formItems.name}
              key={formItems.name}
              isPending={isPending}
            />
          ))}

          <Button type="submit" disabled={isPending} className="w-full mt-6">
            {isPending ? "Loading..." : "Sign Up"}
          </Button>
        </form>
      </div>
    </Form>
  );
};

export default SignUpForm;
