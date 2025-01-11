import React from "react";
import { Outlet } from "react-router-dom";  // Import Outlet for child routes

const Main = () => {
  return (
    <div>
      {/* Main layout structure */}
      <header>
        <h1>SS Consultant</h1>
        {/* Add your navigation here */}
      </header>
      
      {/* Outlet renders the child routes here */}
      <Outlet />
      
      {/* Add footer or other layout elements here */}
    </div>
  );
};

export default Main;
