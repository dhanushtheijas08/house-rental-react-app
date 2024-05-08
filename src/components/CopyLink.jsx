import { useState } from "react";
import { Copy, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoShareSocialOutline } from "react-icons/io5";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

const CopyLink = () => {
  const { copyToClipboard } = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shadow-sm w-7 h-7 sm:w-9 md:w-10 sm:h-9 md:h-10"
        >
          <IoShareSocialOutline className="h-5 sm:h-7 w-5 sm:w-7 text-primary" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={window.location.href} readOnly />
          </div>

          <Button
            type="submit"
            size="sm"
            className="px-3"
            onClick={() => {
              copyToClipboard(window.location.href);
              setIsCopied(true);
            }}
          >
            <span className="sr-only">Copy</span>
            {isCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CopyLink;
