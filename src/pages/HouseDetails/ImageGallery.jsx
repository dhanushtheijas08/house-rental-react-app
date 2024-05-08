import React from "react";

const ImageGallery = ({ mainImageUrl, otherImages }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <img
        src={mainImageUrl}
        alt="House image"
        className="w-full h-full object-cover mt-5 rounded-lg shadow-lg"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
        {otherImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="House image"
            className="object-cover w-full h-full mt-5 rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
