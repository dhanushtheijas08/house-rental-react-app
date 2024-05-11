import { useNavigate } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const NavigationButton = ({ children, to, className, callback }) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        callback && callback();
        navigate(to);
      }}
      className={cn(className)}
    >
      {children}
    </Button>
  );
};

export default NavigationButton;
