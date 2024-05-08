import { cn } from "@/lib/utils";
import React from "react";

const Separator = ({ className }) => {
  return (
    <div
      className={cn("h-0.5 w-full bg-secondary rounded-full", className)}
    ></div>
  );
};

export default Separator;
