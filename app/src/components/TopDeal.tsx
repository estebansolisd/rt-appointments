import { fetchRecentDeals } from "@/graphql/fetch/recentDeals";
import Image from "next/image";
import PurpleCirle from "../assets/PurpleCircle.svg";
import Arrow from "../assets/Arrow.svg";

async function TopDeal() {
  const [deal] = await fetchRecentDeals(1);

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="font-bold">{deal.street}</p>
          <p className="text-gray-500">{deal.city}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-full bg-[#ECECFE] text-[#514EF3] p-4 min-w-[120px]">
            <span>In Progress</span>
          </button>
          <Image src={Arrow} priority alt="Arrow" className="z-10 relative" />
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex gap-4 flex-col mb-4">
        <div className="flex justify-between">
          <div className="relative">
            <Image
              src={PurpleCirle}
              priority
              alt="Purple progress"
              className="z-10 relative"
            />
            <span className="absolute left-1/2 top-6 w-px h-[23px] bg-gray-300 transform -translate-x-1/2 z-0"></span>
          </div>
          <p>Installation of the new air conditioning system</p>
        </div>
        <div className="flex justify-between">
          <div className="relative">
            <Image
              src={PurpleCirle}
              priority
              alt="Purple progress"
              className="z-10 relative"
            />
            <span className="absolute left-1/2 top-6 w-px h-[23px] bg-gray-300 transform -translate-x-1/2 z-0"></span>
          </div>
          <p>Installation of the new air conditioning system</p>
        </div>
      </div>
    </div>
  );
}

export default TopDeal;
