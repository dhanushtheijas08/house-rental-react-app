import HouseCard from "@/components/HouseCard";
import { fetchHouseList } from "@/service/apiHouse";
import { useQuery } from "@tanstack/react-query";
import HouseCardSkeleton from "./HouseCardSkeleton";

const HouseCardList = ({ limit = 0 }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: fetchHouseList,
  });
  const renderHouseCardSkeleton = Array.from({ length: 3 }).map((_, index) => (
    <HouseCardSkeleton key={index} />
  ));

  let displayedData = data;

  if (limit > 0) {
    displayedData = data?.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {isPending
        ? renderHouseCardSkeleton
        : displayedData.map((house) => (
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

export default HouseCardList;
