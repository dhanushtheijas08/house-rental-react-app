import { cn } from "@/lib/utils";

const Image = ({ imageUrl, className, alt }) => {
  return (
    <div className="hidden bg-muted lg:block">
      <img
        src={imageUrl}
        alt={alt}
        width="1920"
        height="1080"
        className={cn(
          "h-full w-full object-cover dark:brightness-[0.2] dark:grayscale",
          className
        )}
      />
    </div>
  );
};

export default Image;
