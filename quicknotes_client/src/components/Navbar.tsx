import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
          <Link to="/">
            <div className="w-8 h-8 bg-[#FF2D85] rounded-md flex items-center justify-center text-white font-bold">Q</div>
            {/* <span className="text-xl font-bold tracking-tight text-white">Quicknotes</span> */}
          </Link>
      </motion.div>
      <div className="flex gap-4">
        <Link to="/login" className="text-sm text-gray-400 hover:text-white transition-colors py-2">Login</Link>
        <Button className="bg-[#FF2D85] hover:bg-[#e02674] text-white rounded-full px-6">
          <Link to="/register">Get Started</Link>
        </Button>
      </div>
    </div>
  </nav>
);

export default Navbar;