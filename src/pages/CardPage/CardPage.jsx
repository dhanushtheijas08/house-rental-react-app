import { RoughNotation } from "react-rough-notation";
import { useRef } from "react";

import useIsInViewport from "@/hooks/useIsInViewport";

import FeatureCard from "@/pages/CardPage/FeatureCard";
import SectionHeading from "@/components/SectionHeading";
const cardData = [
  {
    id: 1,
    title: "Potential Earning",
    desc: "Get an offer for your home within 24 hours. No obligations, no hidden fees.",
  },
  {
    id: 2,
    title: "Potential Earning",
    desc: "Get an offer for your home within 24 hours. No obligations, no hidden fees.",
  },
  {
    id: 3,
    title: "Potential Earning",
    desc: "Get an offer for your home within 24 hours. No obligations, no hidden fees.",
  },
  {
    id: 4,
    title: "Potential Earning",
    desc: "Get an offer for your home within 24 hours. No obligations, no hidden fees.",
  },
  {
    id: 5,
    title: "Potential Earning",
    desc: "Get an offer for your home within 24 hours. No obligations, no hidden fees.",
  },
];
const CardPage = () => {
  const componentRef = useRef(null);
  const isInViewport = useIsInViewport(componentRef);

  const renderFeaturesCard = cardData.map((card) => (
    <FeatureCard key={card.id} {...card} />
  ));

  return (
    <section ref={componentRef}>
      <SectionHeading className="text-center">
        Become a House owner <br />
        <RoughNotation
          type="highlight"
          className="text-muted"
          show={isInViewport}
          animationDelay={100}
        >
          in 5 easy steps
        </RoughNotation>
      </SectionHeading>

      <div className="flex flex-wrap justify-evenly mt-10 gap-12">
        {renderFeaturesCard}
      </div>
    </section>
  );
};

export default CardPage;
