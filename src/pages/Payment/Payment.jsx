import { useSelector } from "react-redux";
import Logo from "@/components/Logo";
import PaymentForm from "./PaymentForm";
import { formatIndianRupee } from "@/lib/utils";

const Payment = () => {
  const house = useSelector((state) => state.house.houseData);
  return (
    <main className="py-5">
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <Logo isDark />
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-4">
          <div className="relative w-full lg:h-[26.5rem] h-96 overflow-hidden rounded">
            <img
              src={
                house?.houseImages?.[0] ||
                "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww"
              }
              className="rounded -z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              alt={`${"houseName"} cover image || house image`}
            />
          </div>

          <div className="flex flex-col px-2 py-2">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                {house.houseName || "Simple House"}
              </h3>
              <p className="text-sm font-semibold">
                {formatIndianRupee(house.rentalOfferPrice || 5000)}
              </p>
            </div>
            <p className="text-sm">{house.address || "Paris, France"}</p>
          </div>
        </div>

        <PaymentForm price={house.rentalOfferPrice} />
      </div>
    </main>
  );
};

export default Payment;
