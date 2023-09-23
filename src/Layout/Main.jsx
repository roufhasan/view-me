import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div className="dark:bg-slate-800 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
