import SkeletonSVG from "@/assets/img-skeleton.svg";

const ImageGallerySkeleton = () => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 `}>
      <img
        src={SkeletonSVG}
        className="md:w-full h-full rounded-xl object-cover animate-pulse bg-muted"
        alt="skeleton image"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
        <img
          src={SkeletonSVG}
          className="w-full h-44 rounded-xl object-cover animate-pulse bg-muted"
          alt="skeleton image"
        />
        <img
          src={SkeletonSVG}
          className="w-full h-44 rounded-xl object-cover animate-pulse bg-muted"
          alt="skeleton image"
        />
        <img
          src={SkeletonSVG}
          className="w-full h-44 rounded-xl object-cover animate-pulse bg-muted"
          alt="skeleton image"
        />
        <img
          src={SkeletonSVG}
          className="w-full h-44 rounded-xl object-cover animate-pulse bg-muted"
          alt="skeleton image"
        />
      </div>
    </div>
  );
};

export default ImageGallerySkeleton;
