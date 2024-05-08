import { cn } from "@/lib/utils";
import React from "react";

const SectionHeading = ({ children, className }) => {
  return (
    <h1 className={cn("text-3xl font-space font-semibold", className)}>
      {children}
    </h1>
  );
};

export default SectionHeading;
