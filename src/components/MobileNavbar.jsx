import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";

export function MobileSidebar({ className }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <Logo isDark />
              <div className="">
                <NavBar />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
