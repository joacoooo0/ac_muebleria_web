import Image from "next/image";
import React from "react";

interface ButtonProps {
  title: string;
  imageSrc: string;
  onClick?: () => void;
  width?: number;
  height?: number;
  alt?: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className="flex justify-center items-center gap-x-2 rounded-xl text-[#F3FF9F] bg-[#141414] font-bold px-5 py-2.5 focus:outline-none focus:shadow-outline"
      onClick={props.onClick}
    >
      <Image
        src={props.imageSrc}
        width={props.width || 500}
        height={props.height || 500}
        alt={props.alt || "Button Image"}
      />
      <h3>{props.title}</h3>
    </button>
  );
};

export default Button;
