export type Deal = {
  id: string;
  area: number;
  street: string;
  city: string;
  appointmentDate: string;
  price: number;
  status: "In Progress" | "Closed";
};
