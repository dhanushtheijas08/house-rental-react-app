import { Button } from "@/components/ui/button";
import { useFileUpload } from "@/hooks/useFileUpload";
import { useEffect, useRef } from "react";

const FileUpload = ({ setHouseImages }) => {
  const { imageUrls, setImageUploads, uploadFile } = useFileUpload();
  const inputRef = useRef(null);
  const handleFileSelect = () => {
    inputRef.current.click();
  };
  useEffect(() => {
    if (imageUrls.length > 0) {
      setHouseImages(imageUrls);
    }
  }, [imageUrls]);
  return (
    <div className="bg-muted h-32 flex items-center justify-between px-5">
      <div className="flex gap-3">
        {imageUrls.map((url) => {
          return <img src={url} className="h-12 w-12 rounded" />;
        })}
      </div>

      <h1 className="text-xl font-space">Upload Your Image</h1>

      <div className="flex flex-col max-w-fit justify-evenly h-full">
        <Button onClick={handleFileSelect}>
          <input
            type="file"
            ref={inputRef}
            accept="image/*"
            multiple={true}
            onChange={(event) => {
              setImageUploads(event.target.files);
            }}
            className="hidden"
          />
          Select Image
        </Button>
        <Button variant="outline" onClick={uploadFile}>
          Upload Image
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;
