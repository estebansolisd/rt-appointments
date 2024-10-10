"use client";
import Dashboard from "../assets/Dashboard.svg";
import Work from "../assets/Work.svg";
import Customer from "../assets/Customer.svg";
import Todo from "../assets/Todo.svg";
import Calendar from "../assets/Calendar.svg";
import Notification from "../assets/Notification.svg";
import Settings from "../assets/Settings.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const path = usePathname();

  console.log(path, "path");

  return (
    <aside className="w-20 h-screen bg-white flex flex-col items-center pt-10 space-y-4">
      {/* Icons */}
      <Link
        href="/"
        className={`icon ${
          path !== "/" ? "bg-gray-200" : "bg-[#514EF3]"
        } p-3 rounded-md`}
      >
        <Image src={Dashboard} priority alt="Dashboard" />
      </Link>
      <Link
        href="/deals"
        className={`icon ${
          path !== "/deals" ? "bg-gray-200" : "bg-[#514EF3]"
        } p-3 rounded-md`}
      >
        <Image src={Work} priority alt="Work" />
      </Link>
      <Link
        href="/customers"
        className={`icon ${
          path !== "/customers" ? "bg-gray-200" : "bg-[#514EF3]"
        } p-3 rounded-md`}
      >
        <Image src={Customer} priority alt="Customer" />
      </Link>
      <Link
        href="/todos"
        className={`icon ${
          path !== "/todos" ? "bg-gray-200" : "bg-[#514EF3]"
        } p-3 rounded-md`}
      >
        <Image src={Todo} priority alt="Todo" />
      </Link>
      <Link href="/" className="icon bg-gray-200 p-3 rounded-md">
        <Image src={Calendar} priority alt="Calendar" />
      </Link>
      <Link href="/" className="icon bg-gray-200 p-3 rounded-md">
        <Image src={Notification} priority alt="Notification" />
      </Link>
      <Link href="/" className="icon bg-gray-200 p-3 rounded-md">
        <Image src={Settings} priority alt="Settings" />
      </Link>
    </aside>
  );
};

export default Sidebar;
