import { ArrowLeft, ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQScreenProps {
  onBack: () => void;
}

const faqs = [
  { q: "What is the RIASEC personality assessment?", a: "RIASEC stands for Realistic, Investigative, Artistic, Social, Enterprising, and Conventional. It is a widely used model developed by John Holland to match people's personalities with suitable career paths based on their interests and strengths.", icon: "🧩" },
  { q: "How does personality relate to career choice?", a: "Research shows that people who choose careers that match their personality type tend to be more satisfied, productive, and successful. The assessment helps you understand which work environments and activities suit you best.", icon: "🎯" },
  { q: "Can I retake the assessment?", a: "Yes! You can retake the assessment as many times as you want. Your personality may evolve as you gain new experiences and interests. We recommend retaking it at key transition points.", icon: "🔄" },
  { q: "What subjects should I take for A-Level?", a: "Your A-Level subject combination depends on your desired career path. Use the Career Exploration feature to see which subjects are required for specific courses at universities.", icon: "📚" },
  { q: "How accurate is the career matching?", a: "The matching algorithm is based on established RIASEC theory and local career data. While no assessment is 100% accurate, it provides a strong starting point. We recommend discussing results with a career counsellor for personalised guidance.", icon: "📊" },
  { q: "Is MyCareerAfrica free to use?", a: "Yes, all core features including the personality assessment, career exploration, and discussion forum are free for all secondary school students.", icon: "✨" },
];

const FAQScreen = ({ onBack }: FAQScreenProps) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-center gap-4 mb-4">
          <motion.button whileTap={{ scale: 0.9 }} onClick={onBack} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </motion.button>
          <div>
            <h1 className="font-display font-bold text-lg text-foreground">FAQs</h1>
            <p className="text-xs text-muted-foreground font-body">Common questions answered</p>
          </div>
        </div>

        {/* Header card */}
        <div className="gradient-indigo p-5 rounded-2xl mb-4 flex items-center gap-3">
          <HelpCircle className="w-8 h-8 text-primary-foreground/60" />
          <div>
            <h2 className="font-display font-semibold text-sm text-primary-foreground">Have a question?</h2>
            <p className="text-primary-foreground/60 text-xs font-body">Find answers to common questions about career guidance</p>
          </div>
        </div>
      </div>

      <div className="px-6 flex flex-col gap-2.5">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-2xl border border-border overflow-hidden shadow-card"
          >
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full p-4 flex items-center gap-3 text-left"
            >
              <span className="text-xl flex-shrink-0">{faq.icon}</span>
              <span className="font-display font-medium text-sm text-foreground flex-1 pr-2">{faq.q}</span>
              <motion.div animate={{ rotate: openIdx === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIdx === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border-t border-border overflow-hidden"
                >
                  <p className="p-4 pl-14 text-xs text-muted-foreground font-body leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQScreen;
