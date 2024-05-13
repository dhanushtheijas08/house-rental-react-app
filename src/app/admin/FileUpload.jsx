import { Button } from "@/components/ui/button";
import { storage } from "@/service/firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRef, useState } from "react";

const FileUpload = ({ setHouseImages }) => {
  const [images, setImages] = useState([]);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const inputRef = useRef(null);
  const handleFileSelect = () => {
    inputRef.current.click();
  };

  const handleImageUpload = (event) => {
    setIsImageUploading(true);
    const selectedImages = event.target.files;
    const imageArray = [];

    for (let i = 0; i < selectedImages.length; i++) {
      imageArray.push(URL.createObjectURL(selectedImages[i]));
      const file = selectedImages[i];
      const imageRef = ref(
        storage,
        `images/${file.name + Math.random() * 1000}`
      );

      uploadBytes(imageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setHouseImages((prev) => [...prev, url]);
        });
      });
    }
    setImages(imageArray);
  };
  return (
    <div className="bg-muted h-32 flex flex-col sm:flex-row sm:py-0 py-3 rounded items-center justify-between px-5">
      <div className="flex gap-3">
        {images.length > 0 &&
          images.map((url, index) => {
            return <img src={url} key={index} className="h-20 w-20 rounded" />;
          })}
      </div>

      <h1 className="text-xl font-space">
        Upload Your Image <br />
        <span className="text-muted-foreground text-sm text-center">
          You can multiple images
        </span>
      </h1>
      <div className="flex flex-col max-w-fit justify-evenly h-full">
        <Button onClick={handleFileSelect} disabled={isImageUploading}>
          <input
            type="file"
            ref={inputRef}
            accept="image/*"
            multiple={true}
            onChange={handleImageUpload}
            className="hidden"
          />
          Select Image
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;
