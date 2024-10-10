import StatusBadge from "./StatusBadge";
import Edit from "../assets/Edit.svg";
import Image from "next/image";
import { Deal } from "@/types/deal";

const DealsTable = ({ deals }: { deals: Deal[]}) => {    
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left text-sm font-medium text-gray-500">
                Name
              </th>
              <th className="p-4 text-left text-sm font-medium text-gray-500">
                Area
              </th>
              <th className="p-4 text-left text-sm font-medium text-gray-500">
                Appointment Date
              </th>
              <th className="p-4 text-left text-sm font-medium text-gray-500">
                Price
              </th>
              <th className="p-4 text-left text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="p-4 text-left text-sm font-medium text-gray-500">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal) => (
              <tr key={deal.id} className="border-b border-gray-200">
                <td className="p-4">{deal.street} {deal.city}</td>
                <td className="p-4">{deal.area} m2</td>
                <td className="p-4">{new Date(deal.appointmentDate).toLocaleString()}</td>
                <td className="p-4">{deal.price}</td>
                <td className="p-4">
                  <StatusBadge
                    status={deal.status}
                  />
                </td>
                <td className="p-4">
                    <Image src={Edit} priority alt="Edit" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-gray-100 px-6 py-2 rounded-lg">Load More</button>
      </div>
    </div>
  );
};

export default DealsTable;
