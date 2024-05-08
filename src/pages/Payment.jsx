import { IoLogoApple } from "react-icons/io";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const formData = [
  {
    name: "email",
    type: "text",
    placeholder: "Simple House",
    label: "House Name",
  },
  {
    name: "address",
    type: "text",
    label: "Address",
    placeholder: "Paris, France",
  },
  {
    name: "rentalOfferPrice",
    type: "number",
    label: "Rental Offer Price",
    placeholder: "2,000",
  },
];
const Payment = () => {
  return (
    <main className="flex flex-col">
      <div></div>
      <div className="">
        <Button>
          <IoLogoApple className="w-5 h-5" />
          Pay with Apple
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span class="w-full border-t"></span>
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-background px-2 text-muted-foreground">
              Or Pay with another way
            </span>
          </div>
          <div>
            <h1>Shipping Information</h1>

            <form></form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payment;
