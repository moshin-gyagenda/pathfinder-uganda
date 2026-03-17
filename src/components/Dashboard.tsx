import { motion } from "framer-motion";
import {
  Search, Bell, ChevronRight, Wrench, Microscope,
  Palette, Heart, Briefcase, Calculator, Star, TrendingUp,
  Compass, BookOpen, MessageSquare, Sparkles
} from "lucide-react";

const riasecTypes = [
  { key: "R", label: "Realistic", desc: "The Doers", color: "bg-realistic", icon: Wrench },
  { key: "I", label: "Investigative", desc: "The Thinkers", color: "bg-investigative", icon: Microscope },
  { key: "A", label: "Artistic", desc: "The Creators", color: "bg-artistic", icon: Palette },
  { key: "S", label: "Social", desc: "The Helpers", color: "bg-social", icon: Heart },
  { key: "E", label: "Enterprising", desc: "The Persuaders", color: "bg-enterprising", icon: Briefcase },
  { key: "C", label: "Conventional", desc: "The Organisers", color: "bg-conventional", icon: Calculator },
];

const quickActions = [
  { icon: Compass, label: "Take Assessment", desc: "Discover your personality", route: "assessment", gradient: "gradient-gold" },
  { icon: BookOpen, label: "Explore Careers", desc: "Browse career options", route: "careers", gradient: "gradient-indigo" },
  { icon: Star, label: "Success Stories", desc: "Get inspired", route: "stories", gradient: "gradient-gold" },
  { icon: MessageSquare, label: "Forum", desc: "Ask questions", route: "forum", gradient: "gradient-indigo" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

interface DashboardProps {
  onNavigate: (screen: string) => void;
}

const Dashboard = ({ onNavigate }: DashboardProps) => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="gradient-hero pt-12 pb-10 px-6 rounded-b-[2.5rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-foreground/5 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-primary-foreground/5 translate-y-1/2 -translate-x-1/3" />

        <div className="flex items-center justify-between mb-6 relative z-10">
          <div>
            <p className="text-primary-foreground/60 font-body text-sm">Good morning 👋</p>
            <h1 className="text-xl font-display font-bold text-primary-foreground">Welcome, Student</h1>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center backdrop-blur-sm"
          >
            <Bell className="w-5 h-5 text-primary-foreground" />
          </motion.button>
        </div>

        {/* Search */}
        <div className="relative z-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/40" />
          <input
            placeholder="Search careers, courses..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/35 font-body text-sm border border-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20 backdrop-blur-sm"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="px-6 -mt-5"
      >
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <motion.button
              key={action.label}
              variants={item}
              whileTap={{ scale: 0.96 }}
              onClick={() => onNavigate(action.route)}
              className="bg-card p-4 rounded-2xl shadow-card text-left flex flex-col gap-3 border border-border hover:border-primary/20 transition-colors"
            >
              <div className={`w-11 h-11 rounded-xl ${action.gradient} flex items-center justify-center shadow-sm`}>
                <action.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm text-foreground">{action.label}</h3>
                <p className="text-[11px] text-muted-foreground font-body mt-0.5">{action.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* RIASEC Section */}
      <div className="px-6 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-bold text-lg text-foreground">RIASEC Types</h2>
          <button className="text-primary text-xs font-body font-medium flex items-center gap-1">
            Learn More <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
          {riasecTypes.map((type, i) => (
            <motion.div
              key={type.key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              whileTap={{ scale: 0.95 }}
              className="min-w-[110px] bg-card p-4 rounded-2xl shadow-card border border-border flex flex-col items-center gap-2.5 hover:border-primary/20 transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl ${type.color} flex items-center justify-center shadow-sm`}>
                <type.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display font-semibold text-xs text-foreground">{type.label}</span>
              <span className="text-[10px] text-muted-foreground font-body">{type.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progress Card */}
      <div className="px-6 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="gradient-indigo p-6 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary-foreground/5 -translate-y-1/2 translate-x-1/3" />
          <div className="flex items-center gap-3 mb-3 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-display font-semibold text-primary-foreground">Your Progress</h3>
          </div>
          <p className="text-primary-foreground/60 text-sm font-body mb-4 relative z-10">
            Complete your personality assessment to get personalized career recommendations.
          </p>
          <div className="w-full h-2.5 rounded-full bg-primary-foreground/15 relative z-10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "25%" }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="h-full rounded-full gradient-gold"
            />
          </div>
          <p className="text-primary-foreground/40 text-xs font-body mt-2 relative z-10">25% Complete</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
