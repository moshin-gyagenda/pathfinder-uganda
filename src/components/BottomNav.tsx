import { Home, Compass, BookOpen, MessageSquare, User } from "lucide-react";
import { motion } from "framer-motion";

const tabs = [
  { icon: Home, label: "Home", key: "home" },
  { icon: Compass, label: "Assess", key: "assessment" },
  { icon: BookOpen, label: "Careers", key: "careers" },
  { icon: MessageSquare, label: "Forum", key: "forum" },
  { icon: User, label: "Profile", key: "profile" },
];

interface BottomNavProps {
  active: string;
  onNavigate: (key: string) => void;
}

const BottomNav = ({ active, onNavigate }: BottomNavProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-border">
      <div className="max-w-lg mx-auto flex items-center justify-around py-2 px-4">
        {tabs.map((tab) => {
          const isActive = active === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => onNavigate(tab.key)}
              className="flex flex-col items-center gap-0.5 py-1 px-3 relative"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-2 w-8 h-1 rounded-full gradient-gold"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <tab.icon
                className={`w-5 h-5 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <span
                className={`text-[10px] font-body transition-colors ${
                  isActive ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
