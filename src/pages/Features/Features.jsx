import HouseCardList from "@/app/home/HouseCardList";
import SectionHeading from "@/components/SectionHeading";

const Features = () => {
  return (
    <section className="py-6 space-y-6">
      <SectionHeading>Feature House</SectionHeading>
      <HouseCardList />
    </section>
  );
};

export default Features;
