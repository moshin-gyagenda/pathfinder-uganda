import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search, ChevronDown, Clock, DollarSign, TrendingUp, BookOpen, GraduationCap } from "lucide-react";

interface CareerExploreScreenProps {
  onBack: () => void;
}

const careerCategories = [
  {
    category: "Realistic",
    color: "bg-realistic",
    emoji: "🔧",
    careers: [
      { name: "Civil Engineering", level: "Degree", duration: "4 years", cost: "UGX 3.5M/yr", demand: "High", subjects: "Physics, Mathematics, Chemistry" },
      { name: "Agriculture", level: "Degree", duration: "3 years", cost: "UGX 2.5M/yr", demand: "High", subjects: "Biology, Chemistry, Agriculture" },
      { name: "Mechanical Engineering", level: "Degree", duration: "4 years", cost: "UGX 4M/yr", demand: "Medium", subjects: "Physics, Mathematics, Chemistry" },
    ],
  },
  {
    category: "Investigative",
    color: "bg-investigative",
    emoji: "🔬",
    careers: [
      { name: "Medicine & Surgery", level: "Degree", duration: "5 years", cost: "UGX 5M/yr", demand: "High", subjects: "Biology, Chemistry, Physics/Mathematics" },
      { name: "Computer Science", level: "Degree", duration: "3 years", cost: "UGX 3M/yr", demand: "Very High", subjects: "Mathematics, Physics, Economics" },
      { name: "Law", level: "Degree", duration: "4 years", cost: "UGX 3.5M/yr", demand: "High", subjects: "History, Economics, Literature" },
    ],
  },
  {
    category: "Social",
    color: "bg-social",
    emoji: "💚",
    careers: [
      { name: "Education", level: "Degree", duration: "3 years", cost: "UGX 2M/yr", demand: "High", subjects: "Relevant teaching subjects" },
      { name: "Nursing", level: "Degree", duration: "3 years", cost: "UGX 3M/yr", demand: "Very High", subjects: "Biology, Chemistry, Physics" },
      { name: "Social Work", level: "Degree", duration: "3 years", cost: "UGX 2.5M/yr", demand: "Medium", subjects: "Economics, History, Divinity" },
    ],
  },
  {
    category: "Enterprising",
    color: "bg-enterprising",
    emoji: "💼",
    careers: [
      { name: "Business Administration", level: "Degree", duration: "3 years", cost: "UGX 3M/yr", demand: "High", subjects: "Economics, Mathematics, Entrepreneurship" },
      { name: "Banking & Finance", level: "Degree", duration: "3 years", cost: "UGX 3.5M/yr", demand: "High", subjects: "Mathematics, Economics, Accounts" },
    ],
  },
];

const demandColors: Record<string, string> = {
  "Very High": "text-success",
  "High": "text-primary",
  "Medium": "text-warning",
};

const CareerExploreScreen = ({ onBack }: CareerExploreScreenProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCareer, setExpandedCareer] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-center gap-4 mb-4">
          <motion.button whileTap={{ scale: 0.9 }} onClick={onBack} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </motion.button>
          <div>
            <h1 className="font-display font-bold text-lg text-foreground">Explore Careers</h1>
            <p className="text-xs text-muted-foreground font-body">Find your ideal career path</p>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search careers or courses..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-muted border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>
      </div>

      {/* Career Categories */}
      <div className="px-6">
        {careerCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIdx * 0.08 }}
            className="mb-6"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className={`w-8 h-8 rounded-lg ${cat.color} flex items-center justify-center text-base`}>
                {cat.emoji}
              </div>
              <h2 className="font-display font-semibold text-sm text-foreground">{cat.category}</h2>
            </div>
            <div className="flex flex-col gap-2">
              {cat.careers
                .filter((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((career) => (
                  <motion.div
                    key={career.name}
                    layout
                    className="bg-card rounded-2xl border border-border overflow-hidden shadow-card"
                  >
                    <button
                      onClick={() => setExpandedCareer(expandedCareer === career.name ? null : career.name)}
                      className="w-full p-4 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="font-display font-medium text-sm text-foreground">{career.name}</h3>
                          <p className="text-[11px] text-muted-foreground font-body">{career.level} · {career.duration}</p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                          expandedCareer === career.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {expandedCareer === career.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-border overflow-hidden"
                        >
                          <div className="px-4 pb-4 pt-3">
                            <div className="grid grid-cols-2 gap-3">
                              <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-2.5">
                                <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                                <span className="text-xs font-body text-foreground">{career.duration}</span>
                              </div>
                              <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-2.5">
                                <DollarSign className="w-3.5 h-3.5 text-muted-foreground" />
                                <span className="text-xs font-body text-foreground">{career.cost}</span>
                              </div>
                              <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-2.5">
                                <TrendingUp className="w-3.5 h-3.5 text-muted-foreground" />
                                <span className={`text-xs font-body font-medium ${demandColors[career.demand] || "text-foreground"}`}>
                                  {career.demand} demand
                                </span>
                              </div>
                              <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-2.5">
                                <BookOpen className="w-3.5 h-3.5 text-muted-foreground" />
                                <span className="text-xs font-body text-foreground">A-Level</span>
                              </div>
                            </div>
                            <div className="mt-3 p-3 rounded-xl bg-secondary/5 border border-secondary/10">
                              <p className="text-xs font-body text-muted-foreground">
                                <span className="font-semibold text-foreground">Required subjects:</span> {career.subjects}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CareerExploreScreen;
