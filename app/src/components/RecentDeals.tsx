import { fetchRecentDeals } from "@/graphql/fetch/recentDeals";
import Link from "next/link";

async function RecentDeals(){
  const deals = await fetchRecentDeals(5);

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold mb-3">Recent Deals</h3>
        <Link href="/deals">View All</Link>
      </div>
      {deals.map((deal, index) => (
        <div key={index} className="flex justify-between items-center mb-4">
          <div>
            <p className="font-bold">{deal.street}</p>
            <p className="text-gray-500">{deal.city}</p>
          </div>
          <div className="text-right">
            <p className="font-bold">${deal.price}</p>
            <p className="text-gray-500">
              {new Date(Number(deal.appointmentDate)).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentDeals;
