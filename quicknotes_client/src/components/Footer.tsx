import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Heart, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black py-12 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#FF2D85]/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-[#FF2D85] rounded flex items-center justify-center text-[10px] font-bold text-white">
                Q
              </div>
              <span className="text-lg font-bold tracking-tighter text-white">Quicknotes</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Capture your thoughts at the speed of light. Built for productivity and focus.
            </p>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              {/* <li><a href="#" className="hover:text-[#FF2D85] transition-colors">Collections</a></li> */}
              <li><a href="#" className="hover:text-[#FF2D85] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[#FF2D85] transition-colors">API Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-[#FF2D85] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#FF2D85] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Connect</h4>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ y: -3, color: "#FF2D85" }} 
                href="https://tonybnya.onrender.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-500 transition-colors"
                title="Portfolio"
              >
                <Globe size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -3, color: "#FF2D85" }} href="https://github.com/tonybnya" className="text-zinc-500">
                <Github size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -3, color: "#FF2D85" }} href="https://x.com/tonybnya" className="text-zinc-500">
                <Twitter size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -3, color: "#FF2D85" }} href="https://www.linkedin.com/in/tonybnya" className="text-zinc-500">
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            © {currentYear} Quicknotes Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-zinc-600">
            <span>Made with</span>
            <Heart size={12} className="text-[#FF2D85] fill-[#FF2D85]" />
            <span>by</span>
            <motion.a
              href="https://tonybnya.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="text-zinc-400 hover:text-[#FF2D85] font-medium transition-colors ml-1"
            >
              Tony B. NYA
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;