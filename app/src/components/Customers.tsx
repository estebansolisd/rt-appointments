import Link from "next/link";
import Image from "next/image";
import Edit from "../assets/Edit.svg";

type Customer = {
  name: string;
  email: string;
  avatar: string;
};

const Customers = ({ customers }: { customers: Customer[]}) => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-xl font-bold mb-3">Customers</h3>
        <Link aria-label="View all customers" href="/customers">View All</Link>
      </div>
      {customers.map((customer, index) => (
        <div key={index} className="flex items-center justify-between mb-4">
          <div className="flex">
            <Image width={80} height={80} priority src={customer.avatar} alt={customer.name} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-bold">{customer.name}</p>
              <p className="text-gray-500">{customer.email}</p>
            </div>
          </div>
          <button>
            <Image priority src={Edit} alt="Edit" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Customers;
