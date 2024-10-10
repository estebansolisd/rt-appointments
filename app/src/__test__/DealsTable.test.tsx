// DealsTable.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import DealsTable from "../components/DealsTable"; 
import { Deal } from "@/types/deal"; 

describe("DealsTable component", () => {
  const mockDeals: Deal[] = [
    {
      id: "1",
      street: "123 Main St",
      city: "Sample City",
      area: 50,
      appointmentDate: "2024-10-15T10:00:00Z",
      price: 300000,
      status: "active",
    },
    {
      id: "2",
      street: "456 Elm St",
      city: "Another City",
      area: 75,
      appointmentDate: "2024-10-20T14:30:00Z",
      price: 450000,
      status: "inactive",
    },
  ];

  it("renders correctly with given deals", () => {
    render(<DealsTable deals={mockDeals} />);

    // Check if the table headers are rendered
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Area")).toBeInTheDocument();
    expect(screen.getByText("Appointment Date")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();

    // Check if each deal is rendered correctly
    mockDeals.forEach((deal) => {
      expect(screen.getByText(`${deal.street} ${deal.city}`)).toBeInTheDocument();
      expect(screen.getByText(`${deal.area} m2`)).toBeInTheDocument();
      expect(screen.getByText(new Date(deal.appointmentDate).toLocaleString())).toBeInTheDocument();
      expect(screen.getByText(deal.price)).toBeInTheDocument();
      expect(screen.getByText(deal.status)).toBeInTheDocument();
    });

    // Check if the Load More button is rendered
    expect(screen.getByRole("button", { name: /Load More/i })).toBeInTheDocument();
  });
});
