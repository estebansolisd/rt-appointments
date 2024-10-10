import Image from "next/image";

interface CardProps {
  text: string;
  counter: number;
  icon: any; // This will be the icon
}

const Card = ({ text, counter, icon }: CardProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
      <div className="flex flex-col">
        <span className="text-gray-500 text-sm">{text}</span>
        <span className="text-4xl font-bold text-gray-900">{counter}</span>
      </div>
      <Image priority src={icon} alt="Icon" />
    </div>
  );
};

export default Card;
