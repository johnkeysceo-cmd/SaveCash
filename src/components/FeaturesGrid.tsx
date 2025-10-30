import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3,
  CreditCard,
  PiggyBank,
  AlertCircle,
  Calendar,
  Lock,
  Smartphone
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI Financial Assistant",
    description: "Intelligent AI that analyzes your spending patterns and suggests personalized savings strategies.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Target,
    title: "Personalized Budget Automation",
    description: "Automatically categorize expenses and optimize your budget based on your financial goals.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Real-Time Cost Analysis",
    description: "Get instant insights into your spending habits with advanced analytics and reporting.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Automated Savings Strategies",
    description: "AI-powered algorithms that automatically transfer money to savings based on your income patterns.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: AlertCircle,
    title: "Predictive Financial Alerts",
    description: "Receive smart notifications about potential overspending before it happens.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Calendar,
    title: "Goal-Based Financial Planning",
    description: "Set and track financial goals with AI-powered recommendations and progress monitoring.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: CreditCard,
    title: "Integrated Account Management",
    description: "Connect all your accounts for a unified view of your financial health.",
    color: "from-teal-500 to-blue-500"
  },
  {
    icon: BarChart3,
    title: "Expense Categorization & Tracking",
    description: "Automatic categorization of expenses with detailed insights and trend analysis.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: PiggyBank,
    title: "AI-Driven Investment Suggestions",
    description: "Get personalized investment recommendations based on your risk tolerance and goals.",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Bank-level security with end-to-end encryption and compliance with financial regulations.",
    color: "from-gray-500 to-slate-500"
  },
  {
    icon: Smartphone,
    title: "Multi-Platform Accessibility",
    description: "Access your financial insights anywhere with our mobile and web applications.",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Lock,
    title: "API & Developer Access",
    description: "Integrate SaveCash Pro with your existing financial tools and workflows.",
    color: "from-emerald-500 to-green-500"
  }
];

const FeaturesGrid = memo(() => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Financial Success
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to take control of your finances with AI-powered automation and insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
});

FeaturesGrid.displayName = 'FeaturesGrid';

export default FeaturesGrid;
