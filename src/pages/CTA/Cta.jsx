import { RoughNotation } from "react-rough-notation";
import { useRef } from "react";

import useIsInViewport from "@/hooks/useIsInViewport";

import House from "@/assets/image-removebg-preview.png";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import NavigationButton from "@/components/NavigationButton";
const Cta = () => {
  const componentRef = useRef(null);
  const isInViewport = useIsInViewport(componentRef);

  return (
    <section
      ref={componentRef}
      className="flex flex-col gap-5 mt-10 mb-20 justify-center items-center"
    >
      <img src={House} alt="" className="h-52 w-52" />
      <SectionHeading className="max-w-sm text-center">
        Are you ready for the <br />
        <span className="font-semibold">
          <RoughNotation
            type="box"
            padding={[0, 10]}
            animationDelay={100}
            show={isInViewport}
          >
            profitional experience?
          </RoughNotation>
        </span>
      </SectionHeading>
      <p className="max-w-lg mt-10 text-center text-lg text-secondary-foreground">
        Contact us to get more rental income from your home with our
        professional rental Service
      </p>
      <NavigationButton
        to="/all-houses"
        className="max-w-fit rounded-full mt-4"
      >
        See More Houses <FaArrowRight className="ml-2" />
      </NavigationButton>
    </section>
  );
};

export default Cta;
