import React from "react";

interface IPillButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const PillButton = (props: IPillButtonProps) => {
  const { className, children, ...rest } = props;
  return (
    <button
      className={` px-2.5 py-0.5 border border-blue-b2ddff bg-blue-eff8ff text-sm text-blue-175cd3 cursor-pointer rounded-full ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default PillButton;
