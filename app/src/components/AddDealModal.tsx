// components/AddDealModal.tsx
import { Customer } from "@/types/customer";
import api from "@/utils/api";
import { getRandomInt } from "@/utils/rand";
import React, { useState } from "react";
import CustomerSelect from "./CustomerSelect";

const AddDealModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [roomArea, setRoomArea] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [progress, setProgress] = useState("In Progress");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  const handleSave = async () => {
    // Handle saving deal logic
    try {
      const { data } = await api.post("/deals", {
        street: address.street,
        city: address.city,
        state: address.state,
        area: roomArea,
        appointmentDate: new Date(),
        price: getRandomInt(100, 20000),
        status: progress,
        customerId: selectedCustomer?.id,
        numOfPeople: peopleCount,
      });

      if (data) {
        alert("Deal saved !");
        window.location.reload();
      }
    } catch (error) {
      alert("Error saving Deal !");
    }
    console.log("Saving deal", {
      customer: selectedCustomer,
      address,
      roomArea,
      peopleCount,
      progress,
    });
    onClose(); // Close modal
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add New Deal</h2>
          <button className="text-gray-400" onClick={onClose}>
            &times;
          </button>
        </div>

        <CustomerSelect
          selectedCustomer={selectedCustomer}
          onChange={setSelectedCustomer}
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Room Images
          </label>
          <button className="bg-gray-100 border border-gray-300 rounded-lg p-3 w-full">
            ADD
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            placeholder="Street Address"
            className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
          />
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="City"
              className="w-1/3 border border-gray-300 rounded-lg p-2"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
            />
            <input
              type="text"
              placeholder="State / Province"
              className="w-1/3 border border-gray-300 rounded-lg p-2"
              value={address.state}
              onChange={(e) =>
                setAddress({ ...address, state: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Zip Code"
              className="w-1/3 border border-gray-300 rounded-lg p-2"
              value={address.zip}
              onChange={(e) => setAddress({ ...address, zip: e.target.value })}
            />
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Room Area (m²)
            </label>
            <input
              type="text"
              placeholder="100"
              className="border border-gray-300 rounded-lg p-2 w-full"
              value={roomArea}
              onChange={(e) => setRoomArea(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              # of People
            </label>
            <input
              type="text"
              placeholder="0"
              className="border border-gray-300 rounded-lg p-2 w-full"
              value={peopleCount}
              onChange={(e) => setPeopleCount(e.target.value)}
            />
          </div>
        </div>

        <div className="flex space-x-4 mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Progress
          </label>
          <select
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          >
            <option>In Progress</option>
            <option>Closed</option>
          </select>
        </div>

        <div className="flex justify-end space-x-4">
          <button className="text-gray-500" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-purple-500 text-white rounded-lg px-4 py-2"
            onClick={handleSave}
          >
            Save Deal
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default AddDealModal;
