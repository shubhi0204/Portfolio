import React from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex bottom-0 min-h-[100dvh] w-[100vw] bg-[#FAFAFA] !overflow-x-clip">
      {<Outlet />}
    </div>
  );
}

export default AppLayout;
