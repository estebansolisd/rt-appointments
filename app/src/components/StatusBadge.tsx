import { Deal } from "@/types/deal";

interface StatusBadgeProps {
  status: Deal["status"];
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusColors = {
    "In Progress": "bg-purple-100 text-purple-500",
    Closed: "bg-gray-100 text-gray-500",
  };

  return (
    <span className={`px-4 py-2 rounded-full text-sm ${statusColors[status]}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
