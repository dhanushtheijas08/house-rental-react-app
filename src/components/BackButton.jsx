import { HiArrowNarrowLeft } from "react-icons/hi";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const BackButton = ({ text = "" }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        onClick={() => navigate(-1)}
        size="icon"
        className="shadow-sm w-7 h-7 sm:w-9 md:w-10 sm:h-9 md:h-10"
      >
        <HiArrowNarrowLeft className="text-base sm:text-[30px] md:text-3xl" />{" "}
      </Button>
      <span className="text-xl">{text}</span>
    </div>
  );
};

export default BackButton;
