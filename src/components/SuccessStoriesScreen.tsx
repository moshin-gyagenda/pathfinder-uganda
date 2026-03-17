import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, GraduationCap, Quote, MapPin } from "lucide-react";

interface SuccessStoriesScreenProps {
  onBack: () => void;
}

const stories = [
  {
    name: "Dr. Sarah Namukasa",
    title: "Medical Doctor, Mulago Hospital",
    location: "Kampala, Uganda",
    path: "Biology, Chemistry, Physics → MBChB Makerere → Medical Officer",
    dream: "I always wanted to help sick children in my village.",
    message: "Follow your passion, not the crowd. Medicine is hard but rewarding if it's truly your calling.",
    subjects: "Biology, Chemistry, Physics",
    avatar: "SN",
    color: "bg-social",
  },
  {
    name: "Eng. David Ochieng",
    title: "Software Engineer, SafeBoda",
    location: "Kampala, Uganda",
    path: "Mathematics, Physics, Economics → BSc Computer Science → Software Developer",
    dream: "I loved solving puzzles and building things with technology.",
    message: "Tech is the future. Start learning to code early and never stop being curious.",
    subjects: "Mathematics, Physics, Economics",
    avatar: "DO",
    color: "bg-investigative",
  },
  {
    name: "Grace Atim",
    title: "Founder, Atim Arts Studio",
    location: "Gulu, Uganda",
    path: "Fine Art, Literature, History → BA Fine Arts → Creative Director",
    dream: "I spent all my free time painting and drawing since Primary school.",
    message: "Art is not a hobby—it's a career. Africa needs more creative thinkers.",
    subjects: "Fine Art, Literature, History",
    avatar: "GA",
    color: "bg-artistic",
  },
  {
    name: "Moses Kibuuka",
    title: "Chartered Accountant, PwC Uganda",
    location: "Kampala, Uganda",
    path: "Mathematics, Economics, Accounts → BBA Accounting → CPA",
    dream: "Numbers always made sense to me. I wanted to be in banking.",
    message: "If you love working with numbers and details, accounting gives you a stable and respected career.",
    subjects: "Mathematics, Economics, Accounts",
    avatar: "MK",
    color: "bg-conventional",
  },
];

const SuccessStoriesScreen = ({ onBack }: SuccessStoriesScreenProps) => {
  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-center gap-4 mb-4">
          <motion.button whileTap={{ scale: 0.9 }} onClick={onBack} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </motion.button>
          <div>
            <h1 className="font-display font-bold text-lg text-foreground">Success Stories</h1>
            <p className="text-xs text-muted-foreground font-body">Real stories from African professionals</p>
          </div>
        </div>
      </div>

      <div className="px-6 flex flex-col gap-4">
        {stories.map((story, i) => (
          <motion.div
            key={story.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl border border-border p-5 shadow-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-13 h-13 rounded-2xl ${story.color} flex items-center justify-center p-3`}>
                <span className="text-primary-foreground font-display font-bold text-sm">{story.avatar}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-sm text-foreground">{story.name}</h3>
                <p className="text-xs text-muted-foreground font-body">{story.title}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-muted-foreground" />
                  <p className="text-[10px] text-muted-foreground font-body">{story.location}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-3">
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-xs text-muted-foreground font-body">
                  <span className="font-semibold text-foreground">A-Level:</span> {story.subjects}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Briefcase className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-xs text-muted-foreground font-body">{story.path}</p>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-xl border border-border/50">
              <div className="flex items-start gap-2.5">
                <Quote className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-xs text-foreground font-body italic leading-relaxed">
                  "{story.message}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStoriesScreen;
