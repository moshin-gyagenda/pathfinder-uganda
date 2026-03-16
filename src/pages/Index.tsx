import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import OnboardingScreen from "@/components/OnboardingScreen";
import AuthScreen from "@/components/AuthScreen";
import Dashboard from "@/components/Dashboard";
import AssessmentScreen from "@/components/AssessmentScreen";
import ResultsScreen from "@/components/ResultsScreen";
import CareerExploreScreen from "@/components/CareerExploreScreen";
import SuccessStoriesScreen from "@/components/SuccessStoriesScreen";
import ForumScreen from "@/components/ForumScreen";
import FAQScreen from "@/components/FAQScreen";
import ProfileScreen from "@/components/ProfileScreen";
import BottomNav from "@/components/BottomNav";

type AppScreen = "splash" | "onboarding" | "auth" | "home" | "assessment" | "results" | "careers" | "stories" | "forum" | "faq" | "profile";

const Index = () => {
  const [screen, setScreen] = useState<AppScreen>("splash");
  const [scores, setScores] = useState<Record<string, number>>({});

  // Screens that show the bottom nav
  const showNav = ["home", "assessment", "careers", "forum", "profile"].includes(screen);
  const navActive = ["home", "assessment", "careers", "forum", "profile"].includes(screen) ? screen : "home";

  const handleNavigation = (target: string) => {
    setScreen(target as AppScreen);
  };

  return (
    <div className="max-w-lg mx-auto min-h-screen bg-background relative overflow-hidden">
      <AnimatePresence>
        {screen === "splash" && (
          <SplashScreen onComplete={() => setScreen("onboarding")} />
        )}
      </AnimatePresence>

      {screen === "onboarding" && (
        <OnboardingScreen onComplete={() => setScreen("auth")} />
      )}

      {screen === "auth" && (
        <AuthScreen onLogin={() => setScreen("home")} />
      )}

      {screen === "home" && (
        <Dashboard onNavigate={handleNavigation} />
      )}

      {screen === "assessment" && (
        <AssessmentScreen
          onBack={() => setScreen("home")}
          onComplete={(s) => {
            setScores(s);
            setScreen("results");
          }}
        />
      )}

      {screen === "results" && (
        <ResultsScreen
          scores={scores}
          onBack={() => setScreen("assessment")}
          onHome={() => setScreen("careers")}
        />
      )}

      {screen === "careers" && (
        <CareerExploreScreen onBack={() => setScreen("home")} />
      )}

      {screen === "stories" && (
        <SuccessStoriesScreen onBack={() => setScreen("home")} />
      )}

      {screen === "forum" && (
        <ForumScreen onBack={() => setScreen("home")} />
      )}

      {screen === "faq" && (
        <FAQScreen onBack={() => setScreen("home")} />
      )}

      {screen === "profile" && (
        <ProfileScreen
          onBack={() => setScreen("home")}
          onLogout={() => setScreen("auth")}
          onNavigate={handleNavigation}
        />
      )}

      {showNav && (
        <BottomNav active={navActive} onNavigate={handleNavigation} />
      )}
    </div>
  );
};

export default Index;
