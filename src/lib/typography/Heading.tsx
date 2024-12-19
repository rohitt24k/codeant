import React, { JSX } from "react";

interface IHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2;
  className?: string;
}

const Heading = (props: IHeadingProps) => {
  const { children, level = 1, className = "" } = props;

  const sizes = {
    1: "text-[24px] sm:text-[32px] leading-[48px] font-bold",
    2: "text-2xl font-semibold",
  };
  const baseClasses = "text-system-black";

  const classes = `${baseClasses} ${sizes[level]}`;
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className={`${classes} ${className}`}>{children}</HeadingTag>
  );
};

export default Heading;
