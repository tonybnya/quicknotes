import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;