import Navbar from "@/components/Navbar";
import { div } from "framer-motion/client";
import React from "react";

const MainLayout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
