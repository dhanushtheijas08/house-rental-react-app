import { useState } from "react";

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isCopied,
    copyToClipboard,
  };
};
