// components/CustomerSelect.tsx
import { Customer } from "@/types/customer";
import api from "@/utils/api";
import React, { useEffect, useState } from "react";

const CustomerSelect = ({
  selectedCustomer,
  onChange,
}: {
  selectedCustomer: Customer | null;
  onChange: (customer: Customer | null) => void;
}) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const { data } = await api.get("/customers");

        setCustomers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching customers:", error);
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Customer
      </label>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex items-center space-x-2">
          {selectedCustomer ? (
            <div className="flex items-center space-x-4 bg-gray-50 p-2 rounded-lg">
              <img
                src={`https://i.pravatar.cc/40?u=${selectedCustomer.id}`} // Use a placeholder avatar
                alt={selectedCustomer.name}
                className="rounded-full w-10 h-10"
              />
              <span>{selectedCustomer.name}</span>
              <button
                onClick={() => onChange(null)}
                className="bg-gray-200 px-3 py-1 rounded-lg text-sm"
              >
                Change Customer
              </button>
            </div>
          ) : (
            <select
              onChange={(e) =>
                onChange(
                  customers.find((c) => c.id.toString() === e.target.value) ||
                    null
                )
              }
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option value="">Select a Customer</option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomerSelect;
