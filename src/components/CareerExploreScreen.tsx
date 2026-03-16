import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, ChevronRight, Clock, DollarSign, TrendingUp, BookOpen } from "lucide-react";

interface CareerExploreScreenProps {
  onBack: () => void;
}

const careerCategories = [
  {
    category: "Realistic",
    color: "bg-realistic",
    careers: [
      { name: "Civil Engineering", level: "Degree", duration: "4 years", cost: "UGX 3.5M/yr", demand: "High", subjects: "Physics, Mathematics, Chemistry" },
      { name: "Agriculture", level: "Degree", duration: "3 years", cost: "UGX 2.5M/yr", demand: "High", subjects: "Biology, Chemistry, Agriculture" },
      { name: "Mechanical Engineering", level: "Degree", duration: "4 years", cost: "UGX 4M/yr", demand: "Medium", subjects: "Physics, Mathematics, Chemistry" },
    ],
  },
  {
    category: "Investigative",
    color: "bg-investigative",
    careers: [
      { name: "Medicine & Surgery", level: "Degree", duration: "5 years", cost: "UGX 5M/yr", demand: "High", subjects: "Biology, Chemistry, Physics/Mathematics" },
      { name: "Computer Science", level: "Degree", duration: "3 years", cost: "UGX 3M/yr", demand: "Very High", subjects: "Mathematics, Physics, Economics" },
      { name: "Law", level: "Degree", duration: "4 years", cost: "UGX 3.5M/yr", demand: "High", subjects: "History, Economics, Literature" },
    ],
  },
  {
    category: "Social",
    color: "bg-social",
    careers: [
      { name: "Education", level: "Degree", duration: "3 years", cost: "UGX 2M/yr", demand: "High", subjects: "Relevant teaching subjects" },
      { name: "Nursing", level: "Degree", duration: "3 years", cost: "UGX 3M/yr", demand: "Very High", subjects: "Biology, Chemistry, Physics" },
      { name: "Social Work", level: "Degree", duration: "3 years", cost: "UGX 2.5M/yr", demand: "Medium", subjects: "Economics, History, Divinity" },
    ],
  },
  {
    category: "Enterprising",
    color: "bg-enterprising",
    careers: [
      { name: "Business Administration", level: "Degree", duration: "3 years", cost: "UGX 3M/yr", demand: "High", subjects: "Economics, Mathematics, Entrepreneurship" },
      { name: "Banking & Finance", level: "Degree", duration: "3 years", cost: "UGX 3.5M/yr", demand: "High", subjects: "Mathematics, Economics, Accounts" },
    ],
  },
];

const CareerExploreScreen = ({ onBack }: CareerExploreScreenProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCareer, setExpandedCareer] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={onBack} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="font-display font-bold text-lg text-foreground">Explore Careers</h1>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search careers or courses..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      {/* Career Categories */}
      <div className="px-6">
        {careerCategories.map((cat) => (
          <div key={cat.category} className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-3 h-3 rounded-full ${cat.color}`} />
              <h2 className="font-display font-semibold text-sm text-foreground">{cat.category}</h2>
            </div>
            <div className="flex flex-col gap-2">
              {cat.careers
                .filter((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((career) => (
                  <motion.div
                    key={career.name}
                    layout
                    className="bg-card rounded-xl border border-border overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedCareer(expandedCareer === career.name ? null : career.name)}
                      className="w-full p-4 flex items-center justify-between text-left"
                    >
                      <div>
                        <h3 className="font-display font-medium text-sm text-foreground">{career.name}</h3>
                        <p className="text-xs text-muted-foreground font-body">{career.level}</p>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 text-muted-foreground transition-transform ${
                          expandedCareer === career.name ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {expandedCareer === career.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="px-4 pb-4 border-t border-border pt-3"
                      >
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                            <span className="text-xs font-body text-muted-foreground">{career.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-3.5 h-3.5 text-muted-foreground" />
                            <span className="text-xs font-body text-muted-foreground">{career.cost}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-3.5 h-3.5 text-muted-foreground" />
                            <span className="text-xs font-body text-muted-foreground">Demand: {career.demand}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-3.5 h-3.5 text-muted-foreground" />
                            <span className="text-xs font-body text-muted-foreground">A-Level</span>
                          </div>
                        </div>
                        <div className="mt-3 p-3 rounded-lg bg-muted">
                          <p className="text-xs font-body text-muted-foreground">
                            <span className="font-semibold text-foreground">Required subjects:</span> {career.subjects}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerExploreScreen;
