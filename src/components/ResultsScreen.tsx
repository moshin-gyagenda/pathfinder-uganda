import { motion } from "framer-motion";
import { ArrowLeft, Download, Share2, CheckCircle, XCircle } from "lucide-react";

interface ResultsScreenProps {
  scores: Record<string, number>;
  onBack: () => void;
  onHome: () => void;
}

const categoryData: Record<string, { label: string; desc: string; careers: string; color: string }> = {
  R: { label: "Realistic", desc: "The Doers", careers: "Engineers, Athletes, Farmers, Chefs, Military", color: "bg-realistic" },
  I: { label: "Investigative", desc: "The Thinkers", careers: "Scientists, IT Specialists, Mathematicians, Lawyers", color: "bg-investigative" },
  A: { label: "Artistic", desc: "The Creators", careers: "Artists, Designers, Musicians, Journalists", color: "bg-artistic" },
  S: { label: "Social", desc: "The Helpers", careers: "Teachers, Nurses, Doctors, Counsellors", color: "bg-social" },
  E: { label: "Enterprising", desc: "The Persuaders", careers: "Entrepreneurs, Leaders, Bankers, Lawyers", color: "bg-enterprising" },
  C: { label: "Conventional", desc: "The Organisers", careers: "Auditors, Accountants, Administrators", color: "bg-conventional" },
};

const ResultsScreen = ({ scores, onBack, onHome }: ResultsScreenProps) => {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const maxScore = 7;
  const top3 = sorted.slice(0, 3);

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="gradient-hero pt-12 pb-8 px-6 rounded-b-[2rem]">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={onBack} className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <h1 className="font-display font-bold text-lg text-primary-foreground">Your Results</h1>
        </div>
        <div className="text-center">
          <p className="text-primary-foreground/70 font-body text-sm mb-2">Your Top Personality</p>
          <h2 className="text-3xl font-display font-bold text-primary-foreground">
            {categoryData[top3[0][0]].label}
          </h2>
          <p className="text-primary-foreground/60 font-body text-sm mt-1">
            {categoryData[top3[0][0]].desc}
          </p>
        </div>
      </div>

      {/* Top 3 Cards */}
      <div className="px-6 -mt-4">
        <div className="bg-card rounded-2xl shadow-card border border-border p-5">
          <h3 className="font-display font-semibold text-sm text-foreground mb-4">Your Top 3 Personalities</h3>
          <div className="flex flex-col gap-3">
            {top3.map(([key, score], i) => {
              const data = categoryData[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <span className="font-display font-bold text-lg text-muted-foreground w-6">#{i + 1}</span>
                  <div className={`w-8 h-8 rounded-lg ${data.color} flex items-center justify-center`}>
                    <span className="text-primary-foreground font-display font-bold text-xs">{key}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display font-medium text-sm text-foreground">{data.label}</span>
                      <span className="text-xs text-muted-foreground font-body">{score}/{maxScore}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-muted">
                      <motion.div
                        className={`h-full rounded-full ${data.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${(score / maxScore) * 100}%` }}
                        transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
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
        <div className="grid grid-cols-3 gap-3">
          {sorted.map(([key, score]) => {
            const data = categoryData[key];
            return (
              <div key={key} className="bg-card p-3 rounded-xl border border-border text-center">
                <div className={`w-8 h-8 rounded-lg ${data.color} mx-auto mb-2 flex items-center justify-center`}>
                  <span className="text-primary-foreground font-display font-bold text-xs">{key}</span>
                </div>
                <p className="font-display font-semibold text-sm text-foreground">{score}</p>
                <p className="text-[10px] text-muted-foreground font-body">{data.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommended Careers */}
      <div className="px-6 mt-6">
        <h3 className="font-display font-semibold text-sm text-foreground mb-3">Recommended Careers</h3>
        <div className="bg-card rounded-2xl shadow-card border border-border p-5">
          {top3.map(([key]) => {
            const data = categoryData[key];
            return (
              <div key={key} className="mb-4 last:mb-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-3 h-3 rounded-full ${data.color}`} />
                  <span className="font-display font-medium text-sm text-foreground">{data.label}</span>
                </div>
                <p className="text-xs text-muted-foreground font-body pl-5">{data.careers}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 mt-6 flex gap-3">
        <button className="flex-1 py-3.5 rounded-2xl bg-muted text-foreground font-display font-semibold text-sm flex items-center justify-center gap-2">
          <Download className="w-4 h-4" /> Download
        </button>
        <button className="flex-1 py-3.5 rounded-2xl bg-muted text-foreground font-display font-semibold text-sm flex items-center justify-center gap-2">
          <Share2 className="w-4 h-4" /> Share
        </button>
      </div>

      <div className="px-6 mt-4">
        <button
          onClick={onHome}
          className="w-full py-4 rounded-2xl gradient-gold text-primary-foreground font-display font-semibold text-sm shadow-gold transition-transform active:scale-[0.98]"
        >
          Explore Careers
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;
