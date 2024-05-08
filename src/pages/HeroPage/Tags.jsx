import { PiCheckCircle } from "react-icons/pi";
import { Label } from "@/components/ui/label";

const Tags = () => {
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      <Label className="flex items-center gap-1">
        <PiCheckCircle className="w-5 h-5" />
        <span className="text-xs lg:text-base">Earn Money</span>
      </Label>
      <Label className="flex items-center gap-1">
        <PiCheckCircle className="w-5 h-5" />
        <span className="text-xs lg:text-base">Rental Income</span>
      </Label>
      <Label className="flex items-center gap-1">
        <PiCheckCircle className="w-5 h-5" />
        <span className="text-xs lg:text-base">Long-term rental</span>
      </Label>
    </div>
  );
};

export default Tags;
