import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQScreenProps {
  onBack: () => void;
}

const faqs = [
  { q: "What is the RIASEC personality assessment?", a: "RIASEC stands for Realistic, Investigative, Artistic, Social, Enterprising, and Conventional. It is a widely used model developed by John Holland to match people's personalities with suitable career paths based on their interests and strengths." },
  { q: "How does personality relate to career choice?", a: "Research shows that people who choose careers that match their personality type tend to be more satisfied, productive, and successful. The assessment helps you understand which work environments and activities suit you best." },
  { q: "Can I retake the assessment?", a: "Yes! You can retake the assessment as many times as you want. Your personality may evolve as you gain new experiences and interests. We recommend retaking it at key transition points." },
  { q: "What subjects should I take for A-Level?", a: "Your A-Level subject combination depends on your desired career path. Use the Career Exploration feature to see which subjects are required for specific courses at Ugandan universities." },
  { q: "How accurate is the career matching?", a: "The matching algorithm is based on established RIASEC theory and local career data. While no assessment is 100% accurate, it provides a strong starting point. We recommend discussing results with a career counsellor for personalised guidance." },
  { q: "Is this app free to use?", a: "Yes, all core features including the personality assessment, career exploration, and discussion forum are free for all secondary school students in Uganda." },
];

const FAQScreen = ({ onBack }: FAQScreenProps) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={onBack} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="font-display font-bold text-lg text-foreground">FAQs</h1>
        </div>
      </div>

      <div className="px-6 flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-xl border border-border overflow-hidden"
          >
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full p-4 flex items-center justify-between text-left"
            >
              <span className="font-display font-medium text-sm text-foreground pr-4">{faq.q}</span>
              {openIdx === i ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              )}
            </button>
            <AnimatePresence>
              {openIdx === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-border"
                >
                  <p className="p-4 text-xs text-muted-foreground font-body leading-relaxed">{faq.a}</p>
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
