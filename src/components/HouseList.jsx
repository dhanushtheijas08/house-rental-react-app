import { IoShareSocialOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { TbBed } from "react-icons/tb";
import { PiBathtubLight } from "react-icons/pi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { PiShootingStarThin } from "react-icons/pi";

import BackButton from "@/components/BackButton";
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
import Separator from "./Separator";
import { Link, Outlet, useParams } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { useLocalStorage } from "@/hooks/useLocalStorage";
const HouseList = () => {
  // const params = useParams();
  // const [likedData, setLikedData, appendToLikedData] = useLocalStorage(
  //   "likedData",
  //   []
  // );
  // const handleLikedData = () => {
  //   const data = appendToLikedData(params.id);
  //   for (let i = 0; i < data.length; i++) {
  //     if (data[i] === params.id) {
  //       setIsLiked(true);
  //     }
  //   }
  // };
  const [isLiked, setIsLiked] = useState(false);
  return (
    <main className="flex flex-col mt-10">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <BackButton />
          <SectionHeading>House Detials</SectionHeading>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="shadow-sm">
            <IoShareSocialOutline className="h-7 w-7 text-primary" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="shadow-sm"
            onClick={() => console.log("click")}
          >
            {
              <GoHeart
                className={`h-7 w-7 ${
                  isLiked ? "text-primary" : "text-red-400"
                }`}
              />
            }
          </Button>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <img
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
          alt="House image"
          className="w-[55%] h-[25rem] object-cover mt-5 rounded-lg shadow-lg"
        />

        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          <img
            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="House image"
            className="object-cover w-full h-full mt-5 rounded-lg shadow-lg"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="House image"
            className="object-cover w-full h-full mt-5 rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="House image"
            className="object-cover w-full h-full mt-5 rounded-lg shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="House image"
            className="object-cover w-full h-full mt-5 rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mt-20 flex gap-5">
        <div className="flex-1 flex flex-col gap-2">
          <h2 className="text-2xl font-space">Modern Simple House</h2>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <p className="text-muted-foreground flex items-center gap-2">
                <TbBed className="w-7 h-7" />
                <span>3 Bedroom</span>
              </p>
              <p className="text-muted-foreground flex items-center gap-2">
                <PiBathtubLight className="w-7 h-7" />
                <span>2 Bathroom</span>
              </p>
              <p className="text-muted-foreground flex items-center gap-2">
                <HiOutlineSquares2X2 className="w-7 h-7" />
                <span>5.200 m&sup2;</span>
              </p>
            </div>

            <p className="flex items-center text-primary">
              <FaLocationDot className="w-5 h-5" />
              <span className="text-[17px]">Paris, France</span>
            </p>
          </div>

          <div className="space-x-3 mt-5">
            <Button variant="outline" className="border-2 border-primary">
              <Link to="overview">Property Overview</Link>
            </Button>
            <Button variant="outline" className="border-2">
              Monthly Expense
            </Button>
            <Button variant="outline" className="border-2">
              <Link to="location">Property Location</Link>
            </Button>
          </div>

          <div>
            <Outlet />
          </div>
        </div>

        <Card className="w-[400px]">
          <CardHeader>
            <CardDescription className="font-semibold text-base">
              Buy with the price
            </CardDescription>
            <CardTitle className="font-space text-3xl">$32,000</CardTitle>
            <Separator />
            <CardDescription className="font-semibold  text-base">
              Market price based on location
            </CardDescription>
            <CardTitle className="font-space text-3xl flex items-center">
              $38,000
              <span className="flex text-lg items-center ml-3">
                <PiShootingStarThin className="w-6 h-6" />5 % cheaper
              </span>
            </CardTitle>
            <Separator />
          </CardHeader>
          <CardContent>
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">User Name</p>
                <p className="text-sm text-muted-foreground">Seller</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-5">
            <Button className="w-full">Buy the house</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default HouseList;
