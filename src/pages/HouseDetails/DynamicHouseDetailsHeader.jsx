import { IoShareSocialOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";

import { Button } from "@/components/ui/button";
import BackButton from "@/components/BackButton";
import SectionHeading from "@/components/SectionHeading";

const CustomHeader = ({
  title,
  showShareButton,
  showFavoriteButton,
  handleOnclickFavoriteButton,
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <BackButton />
        <SectionHeading className="text-base sm:text-2xl md:text-3xl">
          {title}
        </SectionHeading>
      </div>
      <div className="flex items-center gap-2">
        {showShareButton && (
          <Button
            variant="outline"
            size="icon"
            className="shadow-sm w-7 h-7 sm:w-9 md:w-10 sm:h-9 md:h-10"
          >
            <IoShareSocialOutline className="h-5 sm:h-7 w-5 sm:w-7 text-primary" />
          </Button>
        )}
        {showFavoriteButton && (
          <Button
            variant="outline"
            size="icon"
            className="shadow-sm w-7 h-7 sm:w-9 md:w-10 sm:h-9 md:h-10"
            onClick={handleOnclickFavoriteButton}
          >
            <GoHeart className="h-5 sm:h-7 w-5 sm:w-7 text-primary" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default CustomHeader;
