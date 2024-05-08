import { useParams } from "react-router-dom";
import DynamicHouseDetailsHeader from "./DynamicHouseDetailsHeader";
import ImageGallery from "./ImageGallery";

import { TbBed } from "react-icons/tb";
import { PiBathtubLight } from "react-icons/pi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { PiShootingStarThin } from "react-icons/pi";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BellRing } from "lucide-react";
import Separator from "@/components/Separator";
import { Link, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchHouseById } from "@/service/apiHouse";
import { cn, formatIndianRupee } from "@/lib/utils";
import { useState } from "react";
const HouseDetails = () => {
  const params = useParams();
  const handleOnclickFavoriteButton = () => {
    console.log(params.id);
  };
  const { isPending, error, data } = useQuery({
    queryKey: ["fetchHouseListById"],
    queryFn: () => fetchHouseById(params.id),
  });
  console.log(data);

  const mainImageUrl =
    data?.houseImages?.[0] ||
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D";
  const otherImages = [
    "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [activeSection, setActiveSection] = useState("overview");
  console.log(activeSection);

  return (
    <main className="flex flex-col mt-10">
      <DynamicHouseDetailsHeader
        title="House Detials"
        showFavoriteButton
        showShareButton
        handleOnclickFavoriteButton={handleOnclickFavoriteButton}
      />

      {!isPending && (
        <>
          <ImageGallery mainImageUrl={mainImageUrl} otherImages={otherImages} />

          <div className="mt-20 flex gap-5 flex-col md:flex-row">
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="text-2xl font-space">{data.houseName}</h2>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
                <div className="flex gap-3 flex-wrap">
                  <p className="text-muted-foreground flex items-center gap-2">
                    <TbBed className="w-7 h-7" />
                    <span>{data.features[0]} Bedroom</span>
                  </p>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <PiBathtubLight className="w-7 h-7" />
                    <span>{data.features[1]} Bathroom</span>
                  </p>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <HiOutlineSquares2X2 className="w-7 h-7" />
                    <span>{data.features[2]} m&sup2;</span>
                  </p>
                </div>

                <p className="flex items-center text-primary">
                  <FaLocationDot className="w-5 h-5" />
                  <span className="text-[17px]">{data.address}</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-5 mt-5">
                <Button
                  variant="outline"
                  className={cn("border-2", {
                    "border-primary": activeSection === "overview",
                  })}
                  onClick={() => setActiveSection("overview")}
                >
                  Property Overview
                </Button>

                <Button
                  variant="outline"
                  className={cn("border-2", {
                    "border-primary": activeSection === "loaction",
                  })}
                  onClick={() => setActiveSection("location")}
                >
                  Property Location
                </Button>
              </div>

              <div>
                {
                  {
                    overview: (
                      <div className="mt-5">
                        <h3 className="text-lg font-semibold">
                          Property Overview
                        </h3>
                        <p className="text-muted-foreground">
                          {data.houseDesc}
                        </p>
                      </div>
                    ),
                    location: (
                      <div className="mt-5">
                        <h3 className="text-lg font-semibold">
                          Property Location
                        </h3>
                        <p className="text-muted-foreground">{data.address}</p>
                      </div>
                    ),
                  }[activeSection]
                }
              </div>
            </div>

            <Card className="lg:w-[400px]">
              <CardHeader>
                <CardDescription className="font-semibold text-base">
                  Buy with the price
                </CardDescription>
                <CardTitle className="font-space text-3xl">
                  {formatIndianRupee(data.rentalOfferPrice)}
                </CardTitle>

                <Separator />

                <CardDescription className="font-semibold  text-base">
                  Market price based on location
                </CardDescription>
                <CardTitle className="font-space text-3xl flex-wrap sm:flex-nowrap flex items-center">
                  {formatIndianRupee(data.rentalOfferPrice)}
                  <span className="flex text-lg sm:items-center sm:ml-3 mt-1 sm:mt-0">
                    <PiShootingStarThin className="w-6 h-6" />5 % cheaper
                  </span>
                </CardTitle>
                <Separator />
              </CardHeader>
              <CardContent>
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                  <BellRing />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      User Name
                    </p>
                    <p className="text-sm text-muted-foreground">Seller</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-5">
                <Button className="w-full">Buy the house</Button>
              </CardFooter>
            </Card>
          </div>
        </>
      )}
    </main>
  );
};

export default HouseDetails;
