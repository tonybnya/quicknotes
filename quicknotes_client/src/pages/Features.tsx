import { motion } from "motion/react";
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Search, 
  Folders, 
  Edit3 
} from "lucide-react";

const features = [
  {
    title: "Rich Text Editing",
    description: "Powered by TipTap, our editor supports Markdown, code blocks, and real-time formatting.",
    icon: <Edit3 className="text-[#FF2D85]" size={24} />,
    color: "from-[#FF2D85]/20"
  },
  {
    title: "Collection Bundles",
    description: "Organize your thoughts into hierarchical collections. Perfect for project-based thinking.",
    icon: <Folders className="text-[#A855F7]" size={24} />,
    color: "from-[#A855F7]/20"
  },
  {
    title: "Lightning Fast API",
    description: "Built on Django REST Framework with optimized prefetching for sub-second load times.",
    icon: <Zap className="text-amber-400" size={24} />,
    color: "from-amber-400/20"
  },
  {
    title: "Secure by Design",
    description: "JWT-based authentication ensures your notes stay yours. Blacklisted tokens for maximum security.",
    icon: <Shield className="text-emerald-400" size={24} />,
    color: "from-emerald-400/20"
  },
  {
    title: "Responsive Interface",
    description: "A seamless experience from your desktop to your mobile device, without losing focus.",
    icon: <Smartphone className="text-blue-400" size={24} />,
    color: "from-blue-400/20"
  },
  {
    title: "Instant Search",
    description: "Find exactly what you're looking for with our efficient client-side filtering system.",
    icon: <Search className="text-zinc-400" size={24} />,
    color: "from-zinc-400/20"
  }
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">
            Everything you need to <br />
            <span className="text-[#FF2D85]">Think Clearly</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            QuickNotes combines minimal design with powerful backend architecture to give you the ultimate note-taking experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 overflow-hidden transition-all hover:border-[#FF2D85]/30 hover:bg-zinc-900"
            >
              {/* Subtle Gradient Glow */}
              <div className={`absolute -top-24 -right-24 h-48 w-48 bg-gradient-to-br ${feature.color} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="mb-6 p-3 bg-white/5 w-fit rounded-2xl border border-white/10 group-hover:border-[#FF2D85]/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#FF2D85] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 rounded-[3rem] bg-gradient-to-b from-zinc-900/50 to-transparent border border-white/5 text-center"
        >
          <div className="flex justify-center gap-8 items-center flex-wrap opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
             <span className="text-sm font-bold tracking-widest text-zinc-500 uppercase">React 19</span>
             <span className="text-sm font-bold tracking-widest text-zinc-500 uppercase">Django 6.0</span>
             <span className="text-sm font-bold tracking-widest text-zinc-500 uppercase">Framer Motion</span>
             <span className="text-sm font-bold tracking-widest text-zinc-500 uppercase">SQLite</span>
             <span className="text-sm font-bold tracking-widest text-zinc-500 uppercase">Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default FeaturesPage;