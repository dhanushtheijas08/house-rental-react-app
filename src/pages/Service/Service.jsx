import { RoughNotation } from "react-rough-notation";
import { useRef } from "react";

import useIsInViewport from "@/hooks/useIsInViewport";
import SectionHeading from "@/components/SectionHeading";

import HouseImg from "@/assets/house.png";
const Service = () => {
  const componentRef = useRef(null);
  const isInViewport = useIsInViewport(componentRef);

  return (
    <section className="mt-20" ref={componentRef}>
      <SectionHeading className="text-center text-2xl sm:text-3xl">
        The Services We Offer for a <br />
        <RoughNotation
          type="underline"
          show={isInViewport}
          animationDelay={100}
        >
          <span className="text-xl sm:text-2xl">Perfect Rental Experience</span>
        </RoughNotation>
      </SectionHeading>

      <div className="flex flex-col md:flex-row justify-between mt-10 gap-5">
        <img
          src="https://plus.unsplash.com/premium_photo-1682000405311-e89be5733e9c?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full md:w-[60%]  object-cover object-top rounded-xl"
        />

        <div className="bg-primary w-full rounded-xl flex flex-col items-center px-5 gap-5 py-3">
          <img src={HouseImg} alt="" />
          <h1 className="text-3xl font-space text-muted max-w-xs text-center">
            Profile & Listing Management
          </h1>
          <p className="max-w-xs text-center text-muted-foreground text-sm">
            We take care of everything, from listing your property to managing
            guests and cleaning. You can sit back and relax.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
