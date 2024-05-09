import SkeletonSVG from "@/assets/img-skeleton.svg";

const ImageGallerySkeleton = () => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 mb-10 gap-4 mt-5 h-[28rem] rounded`}
    >
      <img
        src={SkeletonSVG}
        className="w-full h-full object-cover rounded-lg shadow-sm animate-pulse bg-muted"
        alt="skeleton image"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 gap-y-4">
        <img
          src={SkeletonSVG}
          className="md:w-80 h-full rounded-xl shadow-sm object-cover animate-pulse bg-muted"
          alt="skeleton image"
        />
        <img
          src={SkeletonSVG}
          className="md:w-80 h-full rounded-xl shadow-sm object-cover animate-pulse bg-muted"
          alt="skeleton image"
        />
        <img
          src={SkeletonSVG}
          className="md:w-80 h-full rounded-xl shadow-sm object-cover animate-pulse bg-muted"
          alt="skeleton image"
        />
        <img
          src={SkeletonSVG}
          className="md:w-80 h-full rounded-xl shadow-sm object-cover animate-pulse bg-muted"
          alt="skeleton image"
        />
      </div>
    </div>
  );
};

export default ImageGallerySkeleton;
