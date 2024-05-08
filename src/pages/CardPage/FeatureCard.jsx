import { Badge } from "@/components/ui/badge";

const FeatureCard = ({ id, title, desc }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Badge className="w-10 h-10 rounded-full text-lg text-center">{id}</Badge>
      <h1 className="text-xl -mt-1.5">{title}</h1>
      <p className="max-w-xs text-center">{desc}</p>
    </div>
  );
};

export default FeatureCard;
