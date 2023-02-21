import React, { FC, ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const AllButton: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="w-60 p-2 mt-10 text-white bg-[#FF7A11] rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AllButton;
