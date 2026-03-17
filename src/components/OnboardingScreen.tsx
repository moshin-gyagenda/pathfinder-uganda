import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import onboarding1 from "@/assets/onboarding-1.png";
import onboarding2 from "@/assets/onboarding-2.png";
import onboarding3 from "@/assets/onboarding-3.png";

interface OnboardingScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    image: onboarding1,
    title: "Discover Your Path",
    subtitle: "Find the career that matches your unique personality, interests, and strengths across Africa",
  },
  {
    image: onboarding2,
    title: "Know Yourself",
    subtitle: "Take the RIASEC personality assessment to uncover your true career personality type",
  },
  {
    image: onboarding3,
    title: "Shape Your Future",
    subtitle: "Explore careers, connect with mentors, and make informed decisions for your future",
  },
];

const OnboardingScreen = ({ onComplete }: OnboardingScreenProps) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
    else onComplete();
  };

  const skip = () => onComplete();

  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-background">
      <div className="flex justify-end p-5">
        <button onClick={skip} className="text-muted-foreground font-body text-sm hover:text-foreground transition-colors px-3 py-1.5 rounded-full bg-muted/50">
          Skip
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.45, ease: [0.25, 0.8, 0.25, 1] }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-72 h-72 mb-10 relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5" />
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-full object-contain relative z-10 animate-float"
              />
            </div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              {slides[current].title}
            </h2>
            <p className="text-muted-foreground font-body text-base max-w-xs leading-relaxed">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              width: i === current ? 32 : 8,
              opacity: i === current ? 1 : 0.4,
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "gradient-gold" : "bg-border"
            }`}
          />
        ))}
      </div>

      {/* Button */}
      <div className="px-8 pb-10">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={next}
          className="w-full py-4 rounded-2xl gradient-gold text-primary-foreground font-display font-semibold text-base shadow-gold transition-transform"
        >
          {current === slides.length - 1 ? "Get Started" : "Next"}
        </motion.button>
      </div>
    </div>
  );
};

export default OnboardingScreen;
