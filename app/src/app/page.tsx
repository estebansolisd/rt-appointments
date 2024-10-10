import NextAppointment from "../components/NextAppointment";
import RecentDeals from "../components/RecentDeals";
import Customers from "../components/Customers";
import TasksToDo from "../components/TaskTodo";
import People from "../assets/People.svg";
import Deal from "../assets/Deal.svg";
import Card from "../components/CardCounter";
import api from "@/utils/api";
import TopDeal from "../components/TopDeal";

const Dashboard = async () => {
  const { data: customers } = await api.get("/customers");
  const { data: todos } = await api.get("/todos");

  return (
    <div className="flex-1 min-h-full p-6 bg-gray-100">
      <div className="grid grid-cols-12 gap-4">
        {/* Left */}
        <div className="col-span-3">
          <div className="grid gap-4">
            <div className="col-span-12">
              <NextAppointment />
            </div>
            <div className="col-span-12">
              <Card counter={customers.length} text="Customers" icon={People} />
            </div>
            <div className="col-span-12">
              <Card counter={136} text="Deals" icon={Deal} />
            </div>
          </div>
        </div>
        {/* Middle */}
        <div className="col-span-5">
          <div className="grid gap-4">
            <div className="col-span-12">
              {/* @ts-expect-error Server Component */}
              <RecentDeals />
            </div>
            <div className="col-span-12">
              {/* @ts-expect-error Server Component */}
              <TopDeal />
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="col-span-4">
          <Customers customers={customers} />
          <TasksToDo todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
