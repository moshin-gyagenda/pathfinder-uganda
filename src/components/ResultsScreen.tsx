import { motion } from "framer-motion";
import { ArrowLeft, Download, Share2, Trophy, Target } from "lucide-react";

interface ResultsScreenProps {
  scores: Record<string, number>;
  onBack: () => void;
  onHome: () => void;
}

const categoryData: Record<string, { label: string; desc: string; careers: string; color: string; emoji: string }> = {
  R: { label: "Realistic", desc: "The Doers", careers: "Engineers, Athletes, Farmers, Chefs, Military", color: "bg-realistic", emoji: "🔧" },
  I: { label: "Investigative", desc: "The Thinkers", careers: "Scientists, IT Specialists, Mathematicians, Lawyers", color: "bg-investigative", emoji: "🔬" },
  A: { label: "Artistic", desc: "The Creators", careers: "Artists, Designers, Musicians, Journalists", color: "bg-artistic", emoji: "🎨" },
  S: { label: "Social", desc: "The Helpers", careers: "Teachers, Nurses, Doctors, Counsellors", color: "bg-social", emoji: "💚" },
  E: { label: "Enterprising", desc: "The Persuaders", careers: "Entrepreneurs, Leaders, Bankers, Lawyers", color: "bg-enterprising", emoji: "💼" },
  C: { label: "Conventional", desc: "The Organisers", careers: "Auditors, Accountants, Administrators", color: "bg-conventional", emoji: "📊" },
};

const ResultsScreen = ({ scores, onBack, onHome }: ResultsScreenProps) => {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const maxScore = 7;
  const top3 = sorted.slice(0, 3);

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="gradient-hero pt-12 pb-10 px-6 rounded-b-[2.5rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary-foreground/5 -translate-y-1/2 translate-x-1/4" />
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <motion.button whileTap={{ scale: 0.9 }} onClick={onBack} className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </motion.button>
          <h1 className="font-display font-bold text-lg text-primary-foreground">Your Results</h1>
        </div>
        <div className="text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-20 h-20 rounded-2xl bg-primary-foreground/10 mx-auto mb-4 flex items-center justify-center text-4xl backdrop-blur-sm"
          >
            {categoryData[top3[0][0]].emoji}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary-foreground/60 font-body text-xs uppercase tracking-wider mb-1"
          >
            Your Top Personality
          </motion.p>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-display font-bold text-primary-foreground"
          >
            {categoryData[top3[0][0]].label}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-primary-foreground/50 font-body text-sm mt-1"
          >
            {categoryData[top3[0][0]].desc}
          </motion.p>
        </div>
      </div>

      {/* Top 3 Cards */}
      <div className="px-6 -mt-5">
        <div className="bg-card rounded-2xl shadow-card border border-border p-5">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-4 h-4 text-primary" />
            <h3 className="font-display font-semibold text-sm text-foreground">Your Top 3 Personalities</h3>
          </div>
          <div className="flex flex-col gap-4">
            {top3.map(([key, score], i) => {
              const data = categoryData[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <span className="font-display font-bold text-lg text-muted-foreground/40 w-6">#{i + 1}</span>
                  <div className={`w-10 h-10 rounded-xl ${data.color} flex items-center justify-center shadow-sm`}>
                    <span className="text-lg">{data.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-display font-semibold text-sm text-foreground">{data.label}</span>
                      <span className="text-xs text-muted-foreground font-display font-medium bg-muted px-2 py-0.5 rounded-full">{score}/{maxScore}</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${data.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${(score / maxScore) * 100}%` }}
                        transition={{ delay: 0.7 + i * 0.15, duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* All Scores */}
      <div className="px-6 mt-6">
        <h3 className="font-display font-semibold text-sm text-foreground mb-3">All Scores</h3>
        <div className="grid grid-cols-3 gap-2.5">
          {sorted.map(([key, score]) => {
            const data = categoryData[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-card p-3 rounded-xl border border-border text-center"
              >
                <div className={`w-9 h-9 rounded-lg ${data.color} mx-auto mb-2 flex items-center justify-center text-lg`}>
                  {data.emoji}
                </div>
                <p className="font-display font-bold text-base text-foreground">{score}</p>
                <p className="text-[10px] text-muted-foreground font-body mt-0.5">{data.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Recommended Careers */}
      <div className="px-6 mt-6">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-4 h-4 text-primary" />
          <h3 className="font-display font-semibold text-sm text-foreground">Recommended Careers</h3>
        </div>
        <div className="bg-card rounded-2xl shadow-card border border-border p-5">
          {top3.map(([key]) => {
            const data = categoryData[key];
            return (
              <div key={key} className="mb-4 last:mb-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className={`w-3 h-3 rounded-full ${data.color}`} />
                  <span className="font-display font-medium text-sm text-foreground">{data.label}</span>
                </div>
                <p className="text-xs text-muted-foreground font-body pl-5 leading-relaxed">{data.careers}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 mt-6 flex gap-3">
        <motion.button whileTap={{ scale: 0.97 }} className="flex-1 py-3.5 rounded-2xl bg-muted text-foreground font-display font-semibold text-sm flex items-center justify-center gap-2 border border-border">
          <Download className="w-4 h-4" /> Download
        </motion.button>
        <motion.button whileTap={{ scale: 0.97 }} className="flex-1 py-3.5 rounded-2xl bg-muted text-foreground font-display font-semibold text-sm flex items-center justify-center gap-2 border border-border">
          <Share2 className="w-4 h-4" /> Share
        </motion.button>
      </div>

      <div className="px-6 mt-4">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onHome}
          className="w-full py-4 rounded-2xl gradient-gold text-primary-foreground font-display font-semibold text-sm shadow-gold"
        >
          Explore Careers
        </motion.button>
      </div>
    </div>
  );
};

export default ResultsScreen;
