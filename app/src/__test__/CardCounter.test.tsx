// Card.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../components/CardCounter"; // Adjust the import path based on your project structure
import Edit from "../assets/Edit.svg";

describe("Card component", () => {
  const mockProps = {
    text: "Customers",
    counter: 10,
    icon: Edit, 
  };

  it("renders correctly with given props", () => {
    render(<Card {...mockProps} />);

    // Check if the text is rendered
    expect(screen.getByText("Customers")).toBeInTheDocument();
    
    // Check if the counter is rendered
    expect(screen.getByText("10")).toBeInTheDocument();

    // Check if the image is rendered with the correct src
    const image = screen.getByRole("img", { name: /Icon/i });
    expect(image).toHaveAttribute("src");
  });

});
