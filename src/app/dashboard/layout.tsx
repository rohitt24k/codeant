import React from "react";
import Sidebar from "./components/Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      className={`flex max-sm:flex-col h-screen font-sans ${inter.className}`}
    >
      <Sidebar userName="UtkarshDhairyaPanwar" />
      {children}
    </div>
  );
};

export default layout;
