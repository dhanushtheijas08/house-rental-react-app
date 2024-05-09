import { Skeleton } from "@/components/ui/skeleton";
import SkeletonSVG from "@/assets/img-skeleton.svg";
const HouseCardSkeleton = () => {
  return (
    <div
      className={`flex relative flex-col space-y-3 w-full  h-96 overflow-hidden rounded`}
    >
      <img
        src={SkeletonSVG}
        className="h-72 max-w-80 rounded-xl object-cover animate-pulse bg-muted"
        alt="skeleton image"
      />
      <div className="space-y-2">
        <Skeleton className="h-6 w-52" />
        <Skeleton className="h-4 w-44" />
      </div>
    </div>
  );
};
export default HouseCardSkeleton;
