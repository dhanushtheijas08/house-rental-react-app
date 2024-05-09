import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "@/service/firebase-config";

const useFileUpload = () => {
  const [imageUploads, setImageUploads] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");

  const uploadFile = () => {
    if (imageUploads == null) return;

    for (let i = 0; i < imageUploads.length; i++) {
      const file = imageUploads[i];
      const imageRef = ref(
        storage,
        `images/${file.name + Math.random() * 1000}`
      );

      uploadBytes(imageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    }
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return { imageUrls, setImageUploads, imageUploads, uploadFile };
};
// imageUrls,
export { useFileUpload };
