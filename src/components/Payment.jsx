import { IoLogoApple } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import BackButton from "./BackButton";

const Payment = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full h-[95vh] px-3 md:flex-row overflow-y-scroll">
        <div className=" p-3 h-fit w-full md:h-full md:w-[50%] flex flex-col justify-between">
          <div className=" w-full h-[94%]  flex flex-col ">
            <BackButton text="Back" />
            <div className=" w-full h-fit  text-xl flex flex-col gap-2 items-center mt-4 mb-2">
              <div className="text-lg"> Payable Amount</div>
              <div className="text-2xl font-bold"> $ 134.00</div>
            </div>
            <div className="bg-orange-100 h-72 w-72 mx-auto">
              <img
                src="https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg"
                alt=""
                srcset=""
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className=" text-gray-500  w-full  justify-evenly hidden md:flex">
            <div className="text-gray-500">
              Powered By{" "}
              <span className="font-bold text-gray-500 "> Stripe</span>
            </div>
            |
            <div className="text-gray-500 break-words ">
              <span className="mr-3">Terms </span>
              Privacy
            </div>
          </div>
        </div>

        <div className=" p-3  h-fit w-full md:h-full md:w-[50%] flex flex-col justify-between">
          <Button className="flex gap-1 items-center text-lg w-full max-md:my-4 ">
            <IoLogoApple className="w-6 h-6" /> Pay
          </Button>

          <div className="relative max-md:my-3 ">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-400" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-white text-sm text-gray-400">
                Or pay with card
              </span>
            </div>
          </div>

          <div className=" w-full max-md:my-4">
            <h1 className="my-3  font-semibold ">Shipping Information</h1>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdEmail />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="  block w-full pl-10 p-2 sm:text-sm border-gray-300 border-[1px] rounded-md"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <fieldset className=" mt-2 ">
              <legend className="block text-sm font-medium text-gray-700">
                Shipping address
              </legend>

              <div className="  rounded-md shadow-sm -space-y-px">
                <div>
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="relative block w-full  rounded-md bg-transparent focus:z-10 sm:text-sm border-gray-300 p-2 border-[1px]"
                    placeholder="Name"
                  />
                </div>

                <div>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="relative block w-full rounded-md bg-transparent focus:z-10 sm:text-sm border-gray-300 p-2 border-[1px]"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                    <option>India</option>
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="relative block w-full  rounded-md bg-transparent focus:z-10 sm:text-sm border-gray-300 p-2 border-[1px]"
                    placeholder="ZIP / Postal code"
                  />
                </div>
              </div>
            </fieldset>

            <h1 className="my-3  font-semibold max-md:mt-4">Payment Details</h1>

            <fieldset>
              <legend className="block text-sm font-medium text-gray-700">
                Card Information
              </legend>
              <div className="mt-1 bg-white rounded-md shadow-sm -space-y-px ">
                <div>
                  <input
                    type="text"
                    name="card-number"
                    id="card-number"
                    className=" relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300 p-2 border-[1px]"
                    placeholder="Card number"
                  />
                </div>

                <div className="flex -space-x-px">
                  <div className="w-1/2 flex-1 min-w-0">
                    <input
                      type="text"
                      name="card-expiration-date"
                      id="card-expiration-date"
                      className=" relative block w-full rounded-none rounded-bl-md bg-transparent focus:z-10 sm:text-sm border-gray-300 p-2 border-[1px]"
                      placeholder="MM / YY"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <input
                      type="text"
                      name="card-cvc"
                      id="card-cvc"
                      className=" relative block w-full rounded-none rounded-br-md bg-transparent focus:z-10 sm:text-sm border-gray-300 p-2 border-[1px]"
                      placeholder="CVC"
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            <div className="relative flex items-start mt-2 mb-2">
              <div className="flex items-center h-5">
                <input
                  id="Billing"
                  aria-describedby="Billing-description"
                  name="Billing"
                  type="checkbox"
                  className=" h-4 w-4 text-indigo-600 accent-black border-gray-300 rounded border-[1px]"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="Billing" className="font-medium text-gray-700">
                  Billing Address is same as shipping
                </label>
              </div>
            </div>
          </div>

          <Button className="text-md w-full max-md:mt-5">Pay $134.00</Button>
        </div>
      </div>
    </>
  );
};

export default Payment;
