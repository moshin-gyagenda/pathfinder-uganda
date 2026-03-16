import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home, Compass, BookOpen, MessageSquare, User,
  Search, Bell, ChevronRight, Wrench, Microscope,
  Palette, Heart, Briefcase, Calculator, Star, TrendingUp
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
  { icon: Compass, label: "Take Assessment", desc: "Discover your personality", route: "assessment" },
  { icon: BookOpen, label: "Explore Careers", desc: "Browse career options", route: "careers" },
  { icon: Star, label: "Success Stories", desc: "Get inspired", route: "stories" },
  { icon: MessageSquare, label: "Forum", desc: "Ask questions", route: "forum" },
];

const tabs = [
  { icon: Home, label: "Home", key: "home" },
  { icon: Compass, label: "Assess", key: "assessment" },
  { icon: BookOpen, label: "Careers", key: "careers" },
  { icon: MessageSquare, label: "Forum", key: "forum" },
  { icon: User, label: "Profile", key: "profile" },
];

interface DashboardProps {
  onNavigate: (screen: string) => void;
}

const Dashboard = ({ onNavigate }: DashboardProps) => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="gradient-hero pt-12 pb-8 px-6 rounded-b-[2rem]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-primary-foreground/70 font-body text-sm">Good morning 👋</p>
            <h1 className="text-xl font-display font-bold text-primary-foreground">Welcome, Student</h1>
          </div>
          <button className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
            <Bell className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/50" />
          <input
            placeholder="Search careers, courses..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm border-none focus:outline-none focus:ring-2 focus:ring-primary-foreground/20"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 -mt-4">
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <motion.button
              key={action.label}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate(action.route)}
              className="bg-card p-4 rounded-2xl shadow-card text-left flex flex-col gap-2 border border-border"
            >
              <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center">
                <action.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-sm text-foreground">{action.label}</h3>
              <p className="text-xs text-muted-foreground font-body">{action.desc}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* RIASEC Section */}
      <div className="px-6 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-bold text-lg text-foreground">Personality Types</h2>
          <button className="text-primary text-xs font-body font-medium">See All</button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
          {riasecTypes.map((type) => (
            <motion.div
              key={type.key}
              whileTap={{ scale: 0.95 }}
              className="min-w-[120px] bg-card p-4 rounded-2xl shadow-card border border-border flex flex-col items-center gap-2"
            >
              <div className={`w-12 h-12 rounded-xl ${type.color} flex items-center justify-center`}>
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
        <div className="gradient-indigo p-5 rounded-2xl">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-5 h-5 text-primary-foreground" />
            <h3 className="font-display font-semibold text-primary-foreground">Your Progress</h3>
          </div>
          <p className="text-primary-foreground/70 text-sm font-body mb-4">
            Complete your personality assessment to get personalized career recommendations.
          </p>
          <div className="w-full h-2 rounded-full bg-primary-foreground/20">
            <div className="h-full w-1/4 rounded-full gradient-gold" />
          </div>
          <p className="text-primary-foreground/50 text-xs font-body mt-2">25% Complete</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
