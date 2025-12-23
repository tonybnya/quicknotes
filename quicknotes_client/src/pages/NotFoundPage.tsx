import { motion } from "motion/react";
import { Link } from "react-router-dom";
import bg from "@/assets/images/404.png";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-black overflow-hidden">
      
      {/* Left Side: Visual / Illustration */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block w-1/2 h-screen border-r border-white/10"
      >
        <img
          src={bg}
          alt="404 Illustration"
          className="h-full w-full object-cover opacity-80"
        />
      </motion.div>

      {/* Right Side: Content */}
      <div
        className="flex-1 flex flex-col justify-center items-center p-8 bg-black relative"
        style={{ backgroundImage: "url('/assets/img/noise.png')" }}
      >
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FF2D85]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="z-10 flex flex-col items-center text-center max-w-md">
          {/* Logo Branding */}
          <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="mb-8"
          >
            <div className="w-16 h-16 bg-[#FF2D85] rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-[0_0_20px_rgba(255,45,133,0.3)]">
              Q
            </div>
            <span className="text-xl font-bold text-white tracking-tighter uppercase">
              Quicknotes
            </span>
          </motion.div>

          {/* Error Message */}
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 tracking-tight"
          >
            Oops! You've <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D85] to-purple-500">
              lost your way.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-400 text-lg mb-10 font-light"
          >
            The page you're looking for doesn't exist. <br className="hidden sm:block" />
            But don't worry, your notes are safe.
          </motion.p>

          {/* Action Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/"
              className="inline-block bg-[#FF2D85] hover:bg-[#e02674] text-white font-bold tracking-wide py-4 px-10 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(255,45,133,0.4)]"
            >
              RETURN HOME
            </Link>
          </motion.div>

          {/* Footer Error Code */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-zinc-600 text-xs font-mono tracking-widest uppercase"
          >
            Error Code // 404_NOT_FOUND
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;