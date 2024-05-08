import HouseCard from "@/components/HouseCard";
import { fetchHouseList } from "@/service/apiHouse";
import { useQuery } from "@tanstack/react-query";
import HouseCardSkeleton from "./HouseCardSkeleton";

const AllHouseList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["fetchHouseList"],
    queryFn: fetchHouseList,
  });

  const renderHouseCardSkeleton = Array.from({ length: 4 }).map((_, index) => (
    <HouseCardSkeleton key={index} />
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 my-5">
      {isPending
        ? renderHouseCardSkeleton
        : data.map((house) => (
            <HouseCard
              id={house.id}
              houseAddress={house.address}
              houseCoverImage={
                house?.houseImages?.[0] ||
                "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww"
              }
              houseName={house.houseName}
              houseBadge={house.houseBadge || "For Rent"}
              housePrice={house.rentalOfferPrice}
              key={house.id}
            />
          ))}
    </div>
  );
};

export default AllHouseList;
