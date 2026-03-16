import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";

interface AuthScreenProps {
  onLogin: () => void;
}

const AuthScreen = ({ onLogin }: AuthScreenProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="fixed inset-0 z-30 flex flex-col bg-background">
      {/* Header */}
      <div className="gradient-hero pt-14 pb-10 px-8 rounded-b-[2rem]">
        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="CareerPath" className="w-16 h-16" />
        </div>
        <h1 className="text-2xl font-display font-bold text-primary-foreground text-center">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="text-primary-foreground/70 text-center font-body text-sm mt-1">
          {isLogin ? "Sign in to continue your journey" : "Start your career discovery today"}
        </p>
      </div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="flex-1 px-8 pt-8 flex flex-col"
      >
        {!isLogin && (
          <div className="mb-4">
            <label className="text-xs font-display font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your full name"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-muted border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
          </div>
        )}

        <div className="mb-4">
          <label className="text-xs font-display font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Enter your email"
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-muted border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="text-xs font-display font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Enter your password"
              className="w-full pl-11 pr-11 py-3.5 rounded-xl bg-muted border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {isLogin && (
          <button type="button" className="text-primary text-sm font-body font-medium mb-6 text-right">
            Forgot Password?
          </button>
        )}

        <button
          type="submit"
          className="w-full py-4 rounded-2xl gradient-gold text-primary-foreground font-display font-semibold text-base shadow-gold transition-transform active:scale-[0.98]"
        >
          {isLogin ? "Sign In" : "Create Account"}
        </button>

        <div className="mt-auto pb-10 text-center">
          <p className="text-muted-foreground font-body text-sm">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary font-semibold"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </motion.form>
    </div>
  );
};

export default AuthScreen;
