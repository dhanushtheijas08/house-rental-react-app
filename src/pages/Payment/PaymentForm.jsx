import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formatIndianRupee } from "@/lib/utils";
import PaymentSuccess from "./PaymentSuccess";
const formSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email.",
  }),
  cradHolder: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  cardDetails: z.string(),
});

const PaymentForm = ({ price }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "sample@gmail.com",
      cradHolder: "Sara",
      cardDetails: "2324-5656-8989-2525",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 py-5">
          <p className="text-xl font-medium font-space">Payment Page</p>
          <p className="text-gray-400">
            Before proceeding to payment, please review your rental house.
          </p>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="sara@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cradHolder"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Holder</FormLabel>
                  <FormControl>
                    <Input placeholder="sara" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cardDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Details</FormLabel>
                  <FormControl>
                    <div className="flex gap-2">
                      <Input placeholder="xxxx-xxxx-xxxx-xxxx" {...field} />
                      <Input
                        type="text"
                        className="w-1/4"
                        placeholder="MM/YY"
                      />
                      <Input
                        type="number"
                        className="w-1/4"
                        placeholder="CVC"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900 font-space">
                {formatIndianRupee(price || 5000)}
              </p>
            </div>

            <PaymentSuccess
              triggerBtn={
                <Button size="lg" className="mt-4 w-full">
                  Pay Now
                </Button>
              }
            />
            {/* <Button size="lg" className="mt-4 w-full">
              Pay Now
            </Button> */}
          </div>
        </div>
      </form>
    </Form>
  );
};

export default PaymentForm;
