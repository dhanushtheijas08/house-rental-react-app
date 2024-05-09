const ImageGallerySkleton = ({ mainImageUrl, otherImages }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg overflow-hidden">
      <img
        src={mainImageUrl}
        alt="House image"
        className="w-full h-full object-cover mt-5 rounded-lg shadow-lg"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 mt-5">
        {otherImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="House image"
            className="object-cover w-full h-60 rounded-lg shadow-sm"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallerySkleton;
