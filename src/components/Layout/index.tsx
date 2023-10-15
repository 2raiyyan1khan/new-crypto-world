import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import Sidebar from "../Common/Sidebar";

const Layout = () => {
  return (
    <div className="dark:bg-neutral-950 bg-white">
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
