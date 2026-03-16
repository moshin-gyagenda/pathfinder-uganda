import { ArrowLeft, User, Mail, GraduationCap, Settings, LogOut, ChevronRight, HelpCircle, Bell, Shield } from "lucide-react";

interface ProfileScreenProps {
  onBack: () => void;
  onLogout: () => void;
  onNavigate: (screen: string) => void;
}

const ProfileScreen = ({ onBack, onLogout, onNavigate }: ProfileScreenProps) => {
  const menuItems = [
    { icon: GraduationCap, label: "My Assessment Results", action: () => {} },
    { icon: Bell, label: "Notifications", action: () => {} },
    { icon: HelpCircle, label: "FAQs", action: () => onNavigate("faq") },
    { icon: Shield, label: "Privacy & Security", action: () => {} },
    { icon: Settings, label: "Settings", action: () => {} },
  ];

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="gradient-hero pt-12 pb-10 px-6 rounded-b-[2rem]">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={onBack} className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <h1 className="font-display font-bold text-lg text-primary-foreground">Profile</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mb-3 shadow-gold">
            <User className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="font-display font-bold text-lg text-primary-foreground">Student Name</h2>
          <p className="text-primary-foreground/60 text-sm font-body">A-Level Student</p>
        </div>
      </div>

      {/* Info */}
      <div className="px-6 -mt-4">
        <div className="bg-card rounded-2xl shadow-card border border-border p-4 flex gap-4">
          <div className="flex-1 text-center border-r border-border">
            <p className="font-display font-bold text-lg text-foreground">1</p>
            <p className="text-[10px] text-muted-foreground font-body">Assessments</p>
          </div>
          <div className="flex-1 text-center border-r border-border">
            <p className="font-display font-bold text-lg text-foreground">5</p>
            <p className="text-[10px] text-muted-foreground font-body">Careers Explored</p>
          </div>
          <div className="flex-1 text-center">
            <p className="font-display font-bold text-lg text-foreground">3</p>
            <p className="text-[10px] text-muted-foreground font-body">Forum Posts</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="px-6 mt-6">
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {menuItems.map((item, i) => (
            <button
              key={item.label}
              onClick={item.action}
              className={`w-full px-4 py-3.5 flex items-center gap-3 text-left ${
                i < menuItems.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <item.icon className="w-4 h-4 text-muted-foreground" />
              <span className="flex-1 font-body text-sm text-foreground">{item.label}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="px-6 mt-6">
        <button
          onClick={onLogout}
          className="w-full py-3.5 rounded-2xl border border-destructive text-destructive font-display font-semibold text-sm flex items-center justify-center gap-2"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;
