import { PiArrowCircleUpRight } from "react-icons/pi";
import { Badge } from "@/components/ui/badge";
import { formatIndianRupee } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import { deleteHouse } from "@/service/apiHouse";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const HouseCard = ({
  id,
  houseBadge,
  houseCoverImage,
  houseName,
  housePrice,
  houseAddress,
}) => {
  let location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id) => deleteHouse(id),
    mutationKey: "deleteHouse",
    onSuccess: () => {
      queryClient.invalidateQueries("fetchHouseList");
      toast.success("House deleted successfully");
    },
  });
  const deleteHouseHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    mutate(id);
  };
  return (
    <Link
      to={`/house/${id}`}
      className="sm:max-w-xs flex flex-col rounded group"
    >
      <div className="relative w-full h-80 overflow-hidden rounded">
        <Badge className="absolute top-2 z-10 left-2 bg-white text-primary">
          {houseBadge}
        </Badge>
        <img
          src={
            houseCoverImage ||
            "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww"
          }
          className="rounded -z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          alt={`${houseName} cover image || house image`}
        />
        {isAuthenticated && location.pathname.split("/")?.[1] === "admin" ? (
          <Button size="icon" className="z-50" onClick={deleteHouseHandler}>
            <div className="bg-white absolute bottom-2 right-2 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6  text-destructive"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </div>
          </Button>
        ) : (
          <PiArrowCircleUpRight className="h-7 w-7 absolute bottom-2 right-2 text-white" />
        )}
      </div>

      <div className="flex flex-col px-2 py-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{houseName}</h3>
          <p className="text-sm font-semibold">
            {formatIndianRupee(housePrice)}
          </p>
        </div>
        <p className="text-sm">{houseAddress}</p>
      </div>
    </Link>
  );
};

export default HouseCard;
