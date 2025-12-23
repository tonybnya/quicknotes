import { motion } from "motion/react";
import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface Point {
  x: number;
  y: number;
}

interface PathData {
  id: string;
  d: string;
  opacity: number;
  width: number;
}

// 1. Path generation function (Unchanged Math, refined for smoothness)
function generateAestheticPath(
  index: number,
  position: number,
  type: "primary" | "secondary" | "accent"
): string {
  const baseAmplitude = type === "primary" ? 150 : type === "secondary" ? 100 : 60;
  const phase = index * 0.2;
  const points: Point[] = [];
  const segments = type === "primary" ? 10 : type === "secondary" ? 8 : 6;

  const startX = 2400;
  const startY = 800;
  const endX = -2400;
  const endY = -800 + index * 25;

  for (let i = 0; i <= segments; i++) {
    const progress = i / segments;
    const eased = 1 - Math.pow(1 - progress, 2);

    const baseX = startX + (endX - startX) * eased;
    const baseY = startY + (endY - startY) * eased;

    const amplitudeFactor = 1 - eased * 0.3;
    const wave1 = Math.sin(progress * Math.PI * 3 + phase) * (baseAmplitude * 0.7 * amplitudeFactor);
    const wave2 = Math.cos(progress * Math.PI * 4 + phase) * (baseAmplitude * 0.3 * amplitudeFactor);

    points.push({
      x: baseX * position,
      y: baseY + wave1 + wave2,
    });
  }

  const pathCommands = points.map((point: Point, i: number) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prevPoint = points[i - 1];
    const tension = 0.4;
    const cp1x = prevPoint.x + (point.x - prevPoint.x) * tension;
    const cp1y = prevPoint.y;
    const cp2x = prevPoint.x + (point.x - prevPoint.x) * (1 - tension);
    const cp2y = point.y;
    return `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
  });

  return pathCommands.join(" ");
}

// 2. Optimized Path Layer
const FloatingPaths = memo(function FloatingPaths({ position }: { position: number }) {
  const paths: PathData[] = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: `path-${i}`,
        d: generateAestheticPath(i, position, "primary"),
        opacity: 0.1 + i * 0.03,
        width: 1.5 + i * 0.1,
      })),
    [position]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="h-full w-full"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="-2400 -800 4800 1600"
      >
        <defs>
          <linearGradient id="heroGradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF2D85" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
          </linearGradient>
        </defs>

        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="url(#heroGradient)"
            strokeWidth={path.width}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: path.opacity,
              y: [0, -20, 0] 
            }}
            transition={{
              pathLength: { duration: 3, ease: "easeInOut" },
              opacity: { duration: 2 },
              y: { 
                duration: 8 + Math.random() * 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
          />
        ))}
      </svg>
    </div>
  );
});

// 3. Main Hero Component
export default function HeroSection() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mx-auto max-w-4xl"
        >
          {/* Logo Badge */}
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="w-16 h-16 bg-[#FF2D85] rounded-2xl mx-auto mb-8 flex items-center justify-center text-white text-3xl font-bold shadow-[0_0_40px_rgba(255,45,133,0.3)] border border-white/10"
          >
            Q
          </motion.div>

          {/* Title */}
          <h1 className="mb-6 text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Quick<span className="text-[#FF2D85]">Notes</span>
          </h1>

          {/* Description */}
          <p className="mb-10 text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Quickly capture ideas and organize them into clear, simple 
            <span className="text-white"> collections</span>—so you can stay focused and productive.
          </p>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="h-14 px-10 rounded-full bg-[#FF2D85] hover:bg-[#e02674] text-white text-lg font-bold transition-all shadow-lg hover:shadow-[#FF2D85]/20">
              <Link to="/register">Get Started</Link>
            </Button>
            
            <Link to="/login" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">
              Already have an account? Log in
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Vignette */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}