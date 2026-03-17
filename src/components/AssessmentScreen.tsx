import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";

interface AssessmentScreenProps {
  onBack: () => void;
  onComplete: (scores: Record<string, number>) => void;
}

const assessmentItems = [
  { id: 1, text: "I enjoy working with tools and machines", cat: "R" },
  { id: 2, text: "I like building or fixing things with my hands", cat: "R" },
  { id: 3, text: "I prefer outdoor physical activities", cat: "R" },
  { id: 4, text: "I am good at sports and athletics", cat: "R" },
  { id: 5, text: "I enjoy farming and gardening activities", cat: "R" },
  { id: 6, text: "I like cooking and preparing meals", cat: "R" },
  { id: 7, text: "I enjoy working with animals", cat: "R" },
  { id: 8, text: "I enjoy solving complex problems", cat: "I" },
  { id: 9, text: "I like reading scientific books and articles", cat: "I" },
  { id: 10, text: "I am curious about how things work", cat: "I" },
  { id: 11, text: "I enjoy doing research and investigation", cat: "I" },
  { id: 12, text: "I like mathematics and calculations", cat: "I" },
  { id: 13, text: "I enjoy analysing data and information", cat: "I" },
  { id: 14, text: "I prefer to think through problems logically", cat: "I" },
  { id: 15, text: "I enjoy drawing, painting or designing", cat: "A" },
  { id: 16, text: "I like writing stories, poems or songs", cat: "A" },
  { id: 17, text: "I enjoy music, dance or drama", cat: "A" },
  { id: 18, text: "I am creative and imaginative", cat: "A" },
  { id: 19, text: "I like decorating and interior design", cat: "A" },
  { id: 20, text: "I enjoy photography and videography", cat: "A" },
  { id: 21, text: "I prefer expressing myself through art", cat: "A" },
  { id: 22, text: "I enjoy helping and caring for others", cat: "S" },
  { id: 23, text: "I like teaching and explaining things", cat: "S" },
  { id: 24, text: "I am good at listening to people's problems", cat: "S" },
  { id: 25, text: "I enjoy working in groups and teams", cat: "S" },
  { id: 26, text: "I like counselling and advising others", cat: "S" },
  { id: 27, text: "I am patient with people who need help", cat: "S" },
  { id: 28, text: "I enjoy community service activities", cat: "S" },
  { id: 29, text: "I enjoy leading and organising people", cat: "E" },
  { id: 30, text: "I like selling and persuading others", cat: "E" },
  { id: 31, text: "I am confident in making decisions", cat: "E" },
  { id: 32, text: "I enjoy starting new projects or businesses", cat: "E" },
  { id: 33, text: "I like debating and public speaking", cat: "E" },
  { id: 34, text: "I am good at negotiating and making deals", cat: "E" },
  { id: 35, text: "I enjoy taking risks for potential rewards", cat: "E" },
  { id: 36, text: "I like organising files and keeping records", cat: "C" },
  { id: 37, text: "I enjoy following set rules and procedures", cat: "C" },
  { id: 38, text: "I am good at handling details and accuracy", cat: "C" },
  { id: 39, text: "I like working with numbers and data entry", cat: "C" },
  { id: 40, text: "I enjoy scheduling and planning activities", cat: "C" },
  { id: 41, text: "I prefer a structured work environment", cat: "C" },
  { id: 42, text: "I am good at accounting and bookkeeping", cat: "C" },
];

const ITEMS_PER_PAGE = 7;
const categories = ["R", "I", "A", "S", "E", "C"];
const categoryLabels: Record<string, string> = {
  R: "Realistic", I: "Investigative", A: "Artistic",
  S: "Social", E: "Enterprising", C: "Conventional",
};
const categoryColors: Record<string, string> = {
  R: "bg-realistic", I: "bg-investigative", A: "bg-artistic",
  S: "bg-social", E: "bg-enterprising", C: "bg-conventional",
};

const AssessmentScreen = ({ onBack, onComplete }: AssessmentScreenProps) => {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(assessmentItems.length / ITEMS_PER_PAGE);

  const currentItems = assessmentItems.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const toggle = (id: number) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

  const handleNext = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    } else {
      const scores: Record<string, number> = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
      assessmentItems.forEach((item) => {
        if (selected.has(item.id)) scores[item.cat]++;
      });
      onComplete(scores);
    }
  };

  const progress = ((page + 1) / totalPages) * 100;
  const currentCat = categories[page];
  const selectedOnPage = currentItems.filter((i) => selected.has(i.id)).length;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-center gap-4 mb-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </motion.button>
          <div className="flex-1">
            <h1 className="font-display font-bold text-lg text-foreground">Personality Assessment</h1>
            <div className="flex items-center gap-2 mt-0.5">
              <div className={`w-2.5 h-2.5 rounded-full ${categoryColors[currentCat]}`} />
              <p className="text-xs text-muted-foreground font-body">
                {page + 1}/{totalPages} — {categoryLabels[currentCat]}
              </p>
            </div>
          </div>
          <div className="bg-muted px-3 py-1.5 rounded-full">
            <span className="font-display font-semibold text-xs text-foreground">{selectedOnPage}/7</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2.5 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full gradient-gold"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* Category chips */}
        <div className="flex gap-1.5 mt-3 overflow-x-auto scrollbar-hide">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setPage(i)}
              className={`px-3 py-1 rounded-full text-[10px] font-display font-medium transition-all whitespace-nowrap ${
                i === page
                  ? `${categoryColors[cat]} text-primary-foreground`
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Items */}
      <div className="flex-1 px-6 py-3 overflow-y-auto">
        <p className="text-sm text-muted-foreground font-body mb-3">
          Select the statements that describe you:
        </p>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2.5"
          >
            {currentItems.map((item, idx) => {
              const isSelected = selected.has(item.id);
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggle(item.id)}
                  className={`p-4 rounded-xl border text-left font-body text-sm transition-all flex items-center gap-3 ${
                    isSelected
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border bg-card hover:border-primary/20"
                  }`}
                >
                  <motion.div
                    animate={isSelected ? { scale: [1, 1.2, 1] } : {}}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      isSelected ? "border-primary bg-primary" : "border-border"
                    }`}
                  >
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-primary-foreground" />}
                  </motion.div>
                  <span className={isSelected ? "text-foreground font-medium" : "text-foreground"}>
                    {item.text}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="px-6 pb-8 pt-3 flex gap-3 bg-background border-t border-border/50">
        {page > 0 && (
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setPage(page - 1)}
            className="flex-1 py-4 rounded-2xl bg-muted text-foreground font-display font-semibold text-sm"
          >
            Previous
          </motion.button>
        )}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleNext}
          className="flex-1 py-4 rounded-2xl gradient-gold text-primary-foreground font-display font-semibold text-sm shadow-gold flex items-center justify-center gap-2"
        >
          {page === totalPages - 1 && <Sparkles className="w-4 h-4" />}
          {page === totalPages - 1 ? "View Results" : "Next"}
        </motion.button>
      </div>
    </div>
  );
};

export default AssessmentScreen;
