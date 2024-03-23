import React from "react";
import pfp from "../../public/sideimg.avif";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex overflow-hidden">
      <div className="flex items-center justify-center w-1/2 h-screen">
        <img className="object-cover w-full h-auto" src={pfp.src} alt="" />
      </div>
      <div className="w-1/2 h-screen bg-[#f0d5de]">
        <div className="flex items-center justify-center h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
