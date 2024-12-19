import React, { HTMLAttributes } from "react";

interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
}

const Text = (props: ITextProps) => {
  const { children, level = 1, className = "", ...remaining } = props;

  const sizes = {
    1: "text-lg sm:text-xl font-medium text-system-black",
    2: "text-sm sm:text-base text-system-black",
    3: "text-sm text-gray-414651",
    4: "text-xxs",
  };

  return (
    <p className={`${sizes[level]} ${className}`} {...remaining}>
      {children}
    </p>
  );
};

export default Text;
