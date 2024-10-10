export interface IDeal {
  id: string;
  street: string;
  city: string;
  state: string;
  area: number;
  appointmentDate: Date;
  price: number;
  status: 'In Progress' | 'Closed';
  customerId: string;
  numOfPeople: number;
}
