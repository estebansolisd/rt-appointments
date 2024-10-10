'use client';
import { useEffect, useState } from 'react';
import api from '@/utils/api';

type Appointment = {
  street: string;
  city: string;
  state: string;
  appointmentDate: string;
  area: number;
  price: number;
  numOfPeople: number;
};

const NextAppointment = () => {
  const [appointment, setAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    api.get('/deals/next') // replace with your API endpoint
      .then((res) => setAppointment(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!appointment) return null;

  return (
    <div className="bg-purple-500 text-white p-5 rounded-lg">
      <h3 className="text-lg font-bold">{appointment.street}</h3>
      <p>{appointment.city}, {appointment.state}</p>
      <p>Appointment Date: {new Date(appointment.appointmentDate).toLocaleString()}</p>
      <p>Room Area: {appointment.area} m²</p>
      <p>People: {appointment.numOfPeople}</p>
      <p className="font-bold text-xl">${appointment.price}</p>
      <button className="mt-4 bg-white text-purple-500 py-2 px-4 rounded">See Detail</button>
    </div>
  );
};

export default NextAppointment;
