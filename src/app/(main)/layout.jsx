import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const MainLayout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
