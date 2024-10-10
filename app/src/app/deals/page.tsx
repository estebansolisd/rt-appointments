import DealsTable from "@/components/DealsTable";
import api from "@/utils/api";

async function Deals() {
  const { data: deals } = await api.get("/deals");
  return (
    <div className="flex-1 min-h-full p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold">Deals</h1>
      <p className="text-gray-500 mt-1 mb-6">Total: 136 deals</p>
      <DealsTable deals={deals} />
    </div>
  );
}

export default Deals;
