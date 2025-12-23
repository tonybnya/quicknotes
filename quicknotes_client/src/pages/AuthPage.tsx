import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AuthPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-black">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-12 items-center bg-zinc-900/30 p-10 rounded-3xl border border-white/5 backdrop-blur-xl">
        
        {/* Login Side */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h2 className="text-2xl font-bold text-white mb-6">Welcome Back</h2>
          <form className="space-y-4">
            <Input className="bg-white/5 border-white/10 text-white" placeholder="Username" />
            <Input className="bg-white/5 border-white/10 text-white" type="password" placeholder="Password" />
            <Button className="w-full bg-[#FF2D85] hover:bg-[#e02674] cursor-pointer">Login</Button>
          </form>
        </motion.div>

        {/* Vertical Divider */}
        <div className="hidden md:block h-64 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {/* Register Side */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>
          <form className="space-y-4">
            <Input className="bg-white/5 border-white/10 text-white" placeholder="Username" />
            <Input className="bg-white/5 border-white/10 text-white" placeholder="Email" />
            <Input className="bg-white/5 border-white/10 text-white" type="password" placeholder="Password" />
            <Button className="w-full border-[#FF2D85] text-[#FF2D85] hover:bg-[#FF2D85]/10 cursor-pointer" variant="outline">Sign Up</Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default AuthPage;