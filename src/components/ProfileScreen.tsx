import { motion } from "framer-motion";
import { ArrowLeft, User, GraduationCap, Settings, LogOut, ChevronRight, HelpCircle, Bell, Shield, Edit3 } from "lucide-react";

interface ProfileScreenProps {
  onBack: () => void;
  onLogout: () => void;
  onNavigate: (screen: string) => void;
}

const ProfileScreen = ({ onBack, onLogout, onNavigate }: ProfileScreenProps) => {
  const menuItems = [
    { icon: GraduationCap, label: "My Assessment Results", action: () => {}, color: "text-primary" },
    { icon: Bell, label: "Notifications", action: () => {}, color: "text-info" },
    { icon: HelpCircle, label: "FAQs", action: () => onNavigate("faq"), color: "text-social" },
    { icon: Shield, label: "Privacy & Security", action: () => {}, color: "text-artistic" },
    { icon: Settings, label: "Settings", action: () => {}, color: "text-muted-foreground" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="gradient-hero pt-12 pb-12 px-6 rounded-b-[2.5rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary-foreground/5 -translate-y-1/2 translate-x-1/4" />

        <div className="flex items-center gap-4 mb-8 relative z-10">
          <motion.button whileTap={{ scale: 0.9 }} onClick={onBack} className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </motion.button>
          <h1 className="font-display font-bold text-lg text-primary-foreground">Profile</h1>
        </div>

        <div className="flex flex-col items-center relative z-10">
          <div className="relative mb-4">
            <div className="w-22 h-22 rounded-2xl gradient-gold flex items-center justify-center shadow-gold p-0.5">
              <div className="w-full h-full rounded-[14px] bg-secondary flex items-center justify-center">
                <User className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
            <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full gradient-gold flex items-center justify-center shadow-sm border-2 border-secondary">
              <Edit3 className="w-3 h-3 text-primary-foreground" />
            </button>
          </div>
          <h2 className="font-display font-bold text-lg text-primary-foreground">Student Name</h2>
          <p className="text-primary-foreground/50 text-sm font-body">A-Level Student</p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 -mt-5">
        <div className="bg-card rounded-2xl shadow-card border border-border p-4 flex gap-4">
          {[
            { value: "1", label: "Assessments" },
            { value: "5", label: "Careers Explored" },
            { value: "3", label: "Forum Posts" },
          ].map((stat, i) => (
            <div key={stat.label} className={`flex-1 text-center ${i < 2 ? "border-r border-border" : ""}`}>
              <p className="font-display font-bold text-xl text-foreground">{stat.value}</p>
              <p className="text-[10px] text-muted-foreground font-body mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div className="px-6 mt-6">
        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card">
          {menuItems.map((item, i) => (
            <motion.button
              key={item.label}
              whileTap={{ scale: 0.99 }}
              onClick={item.action}
              className={`w-full px-4 py-4 flex items-center gap-3 text-left ${
                i < menuItems.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center">
                <item.icon className={`w-4 h-4 ${item.color}`} />
              </div>
              <span className="flex-1 font-body text-sm text-foreground">{item.label}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="px-6 mt-6">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onLogout}
          className="w-full py-4 rounded-2xl border-2 border-destructive/20 text-destructive font-display font-semibold text-sm flex items-center justify-center gap-2 bg-destructive/5"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </motion.button>
      </div>
    </div>
  );
};

export default ProfileScreen;
