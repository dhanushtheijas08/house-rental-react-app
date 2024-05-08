import { useNavigate } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const NavigationButton = ({ children, to, className }) => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(to)} className={cn(className)}>
      {children}
    </Button>
  );
};

export default NavigationButton;
