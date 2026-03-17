import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Plus, MessageCircle, Send, ThumbsUp, Clock } from "lucide-react";

interface ForumScreenProps {
  onBack: () => void;
}

const forumPosts = [
  {
    id: 1,
    author: "Janet M.",
    avatar: "JM",
    title: "Best A-Level combination for Medicine?",
    content: "I want to become a doctor but I'm not sure which subjects to pick. Should I include Mathematics?",
    replies: 5,
    likes: 12,
    time: "2 hours ago",
    tag: "Medicine",
    comments: [
      { author: "Dr. Okello", text: "PCB (Physics, Chemistry, Biology) is the standard. Mathematics is optional but helpful.", time: "1h ago" },
      { author: "Sarah N.", text: "I did BCM and got admitted to MBChB at Makerere. Biology and Chemistry are a must!", time: "45min ago" },
    ],
  },
  {
    id: 2,
    author: "Peter K.",
    avatar: "PK",
    title: "Is Computer Science a good career in Africa?",
    content: "My parents want me to do Law but I love technology. Are there good tech jobs here?",
    replies: 8,
    likes: 24,
    time: "5 hours ago",
    tag: "Technology",
    comments: [
      { author: "Eng. David", text: "Absolutely! Tech companies are growing fast across Africa. Follow your passion.", time: "3h ago" },
    ],
  },
  {
    id: 3,
    author: "Amina R.",
    avatar: "AR",
    title: "Changing combination in Senior 6?",
    content: "I started with HEG but now I realise I want to do Nursing. Is it too late to change?",
    replies: 3,
    likes: 7,
    time: "1 day ago",
    tag: "Guidance",
    comments: [],
  },
];

const tagColors: Record<string, string> = {
  Medicine: "bg-social/10 text-social",
  Technology: "bg-investigative/10 text-investigative",
  Guidance: "bg-primary/10 text-primary",
};

const ForumScreen = ({ onBack }: ForumScreenProps) => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <motion.button whileTap={{ scale: 0.9 }} onClick={onBack} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </motion.button>
            <div>
              <h1 className="font-display font-bold text-lg text-foreground">Discussion Forum</h1>
              <p className="text-xs text-muted-foreground font-body">Ask questions, share experiences</p>
            </div>
          </div>
          <motion.button whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center shadow-gold">
            <Plus className="w-5 h-5 text-primary-foreground" />
          </motion.button>
        </div>
      </div>

      <div className="px-6 flex flex-col gap-3">
        {forumPosts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl border border-border overflow-hidden shadow-card"
          >
            <button
              onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
              className="w-full p-5 text-left"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full gradient-indigo flex items-center justify-center">
                    <span className="text-primary-foreground font-display font-bold text-[10px]">{post.avatar}</span>
                  </div>
                  <div>
                    <p className="font-display font-medium text-sm text-foreground">{post.author}</p>
                    <div className="flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 text-muted-foreground" />
                      <p className="text-[10px] text-muted-foreground font-body">{post.time}</p>
                    </div>
                  </div>
                </div>
                <span className={`text-[10px] font-display font-medium px-2.5 py-1 rounded-full ${tagColors[post.tag] || "bg-muted text-muted-foreground"}`}>
                  {post.tag}
                </span>
              </div>
              <h3 className="font-display font-semibold text-sm text-foreground mb-1.5">{post.title}</h3>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">{post.content}</p>
              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border/50">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                  <ThumbsUp className="w-3.5 h-3.5" /> {post.likes}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                  <MessageCircle className="w-3.5 h-3.5" /> {post.replies} replies
                </span>
              </div>
            </button>

            <AnimatePresence>
              {expandedPost === post.id && post.comments.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-border px-5 pb-4 overflow-hidden"
                >
                  {post.comments.map((c, j) => (
                    <div key={j} className="pt-3 flex gap-3">
                      <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <span className="text-foreground font-display font-bold text-[10px]">
                          {c.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-display font-medium text-xs text-foreground">{c.author}</span>
                          <span className="text-[10px] text-muted-foreground">{c.time}</span>
                        </div>
                        <p className="text-xs text-muted-foreground font-body mt-0.5 leading-relaxed">{c.text}</p>
                      </div>
                    </div>
                  ))}
                  <div className="mt-3 flex gap-2">
                    <input
                      placeholder="Write a reply..."
                      className="flex-1 px-4 py-2.5 rounded-xl bg-muted border border-border text-xs font-body focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                    <motion.button whileTap={{ scale: 0.9 }} className="w-9 h-9 rounded-xl gradient-gold flex items-center justify-center shadow-sm">
                      <Send className="w-3.5 h-3.5 text-primary-foreground" />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ForumScreen;
