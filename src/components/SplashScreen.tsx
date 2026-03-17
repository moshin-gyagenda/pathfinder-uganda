import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gradient-hero"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.3, opacity: 0, rotate: -20 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8"
      >
        <div className="relative">
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ background: "radial-gradient(circle, hsl(37 90% 51% / 0.15) 0%, transparent 70%)" }}
          />
          <img src={logo} alt="MyCareerAfrica" className="w-32 h-32 relative z-10" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
        className="text-4xl font-display font-bold text-primary-foreground mb-1"
      >
        MyCareer<span className="text-gradient-gold">Africa</span>
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-primary-foreground/60 font-body text-sm tracking-[0.2em] uppercase"
      >
        Discover Your Path
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1.2, ease: "easeInOut" }}
        onAnimationComplete={onComplete}
        className="mt-12 h-1 w-40 rounded-full gradient-gold origin-left"
      />
    </motion.div>
  );
};

export default SplashScreen;
