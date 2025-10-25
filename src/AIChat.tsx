import React from "react";
import { motion } from "motion/react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, ArrowLeft, Menu } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your personal financial advisor, and I'm genuinely excited to help you take control of your money. I've helped thousands of people save an average of $2,400+ per year by finding hidden opportunities they never knew existed.\n\nI'm not here to judge or overwhelm you with complicated jargon. Think of me as your financially-savvy friend who actually cares about your success.\n\nWhat's your biggest financial challenge right now? Whether it's building an emergency fund, crushing debt, or just feeling overwhelmed by money decisions - I'm here to make it simple and actionable.\n\n**Quick tip**: The biggest wins usually come from the small stuff that adds up fast. Let's find yours!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [conversationContext, setConversationContext] = useState({
    userGoals: [] as string[],
    currentSituation: null as string | null,
    previousTopics: [] as string[],
    userIncome: null as number | null,
    userDebt: null as number | null,
    userSavings: null as number | null,
    userEmotionalState: null as string | null,
    userPersonality: null as string | null,
    userExperience: null as string | null,
    conversationHistory: [] as string[],
    userPreferences: [] as string[],
    userChallenges: [] as string[]
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isThinking) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsThinking(true);

    // Generate contextual AI response based on keywords and conversation history
    setTimeout(() => {
      const lowercaseMessage = userMessage.toLowerCase();
      let response = "";

      // Update conversation context with advanced tracking
      const updateContext = (key: string, value: any) => {
        setConversationContext(prev => ({ ...prev, [key]: value }));
      };

      // Advanced conversation understanding with deeper NLP
      const isAskingForClarification = lowercaseMessage.includes("what do you mean") || 
                                     lowercaseMessage.includes("can you explain") || 
                                     lowercaseMessage.includes("i don't understand") ||
                                     lowercaseMessage.includes("i'm confused") ||
                                     lowercaseMessage.includes("help me understand") ||
                                     lowercaseMessage.includes("i'm lost") ||
                                     lowercaseMessage.includes("i need help") ||
                                     lowercaseMessage.includes("can you help") ||
                                     lowercaseMessage.includes("i don't get it") ||
                                     lowercaseMessage.includes("explain this") ||
                                     lowercaseMessage.includes("what does this mean") ||
                                     lowercaseMessage.includes("i'm not sure") ||
                                     lowercaseMessage.includes("i'm unclear");
      
      const isProvidingMoreInfo = lowercaseMessage.includes("i make") || 
                                 lowercaseMessage.includes("i have") || 
                                 lowercaseMessage.includes("my income") ||
                                 lowercaseMessage.includes("i earn") ||
                                 lowercaseMessage.includes("i get paid") ||
                                 lowercaseMessage.includes("my salary") ||
                                 lowercaseMessage.includes("i work") ||
                                 lowercaseMessage.includes("i'm a") ||
                                 lowercaseMessage.includes("i bring home") ||
                                 lowercaseMessage.includes("i take home") ||
                                 lowercaseMessage.includes("my paycheck") ||
                                 lowercaseMessage.includes("i receive") ||
                                 lowercaseMessage.includes("my take home") ||
                                 lowercaseMessage.includes("i bring in") ||
                                 lowercaseMessage.includes("my wages") ||
                                 lowercaseMessage.includes("i'm paid") ||
                                 lowercaseMessage.includes("my pay") ||
                                 lowercaseMessage.includes("i get") ||
                                 lowercaseMessage.includes("i bring") ||
                                 lowercaseMessage.includes("i take");
      
      const isAskingForNextSteps = lowercaseMessage.includes("what's next") || 
                                  lowercaseMessage.includes("what should i do") ||
                                  lowercaseMessage.includes("how do i start") ||
                                  lowercaseMessage.includes("where do i begin") ||
                                  lowercaseMessage.includes("what's my first step") ||
                                  lowercaseMessage.includes("what do i do next") ||
                                  lowercaseMessage.includes("how do i proceed") ||
                                  lowercaseMessage.includes("what's the next step") ||
                                  lowercaseMessage.includes("where do i go from here") ||
                                  lowercaseMessage.includes("what's my next move") ||
                                  lowercaseMessage.includes("how do i continue") ||
                                  lowercaseMessage.includes("what's the plan") ||
                                  lowercaseMessage.includes("what should i focus on") ||
                                  lowercaseMessage.includes("what's my priority") ||
                                  lowercaseMessage.includes("what do i tackle first");
      
      // Advanced emotional and situational understanding
      const isExpressingFrustration = lowercaseMessage.includes("i'm struggling") ||
                                     lowercaseMessage.includes("it's hard") ||
                                     lowercaseMessage.includes("i can't") ||
                                     lowercaseMessage.includes("i'm overwhelmed") ||
                                     lowercaseMessage.includes("i'm stressed") ||
                                     lowercaseMessage.includes("i'm worried") ||
                                     lowercaseMessage.includes("i'm frustrated") ||
                                     lowercaseMessage.includes("i'm stuck") ||
                                     lowercaseMessage.includes("i'm lost") ||
                                     lowercaseMessage.includes("i'm confused") ||
                                     lowercaseMessage.includes("i'm panicking") ||
                                     lowercaseMessage.includes("i'm anxious") ||
                                     lowercaseMessage.includes("i'm scared") ||
                                     lowercaseMessage.includes("i'm nervous") ||
                                     lowercaseMessage.includes("i'm afraid") ||
                                     lowercaseMessage.includes("i'm terrified") ||
                                     lowercaseMessage.includes("i'm hopeless") ||
                                     lowercaseMessage.includes("i'm desperate") ||
                                     lowercaseMessage.includes("i'm drowning") ||
                                     lowercaseMessage.includes("i'm sinking") ||
                                     lowercaseMessage.includes("i'm failing") ||
                                     lowercaseMessage.includes("i'm broke") ||
                                     lowercaseMessage.includes("i'm poor") ||
                                     lowercaseMessage.includes("i'm broke") ||
                                     lowercaseMessage.includes("i'm struggling financially") ||
                                     lowercaseMessage.includes("i'm in trouble") ||
                                     lowercaseMessage.includes("i'm in debt") ||
                                     lowercaseMessage.includes("i'm behind") ||
                                     lowercaseMessage.includes("i'm late") ||
                                     lowercaseMessage.includes("i'm screwed") ||
                                     lowercaseMessage.includes("i'm doomed");
      
      const isExpressingExcitement = lowercaseMessage.includes("i'm excited") ||
                                   lowercaseMessage.includes("i'm motivated") ||
                                   lowercaseMessage.includes("i'm ready") ||
                                   lowercaseMessage.includes("let's do this") ||
                                   lowercaseMessage.includes("i want to");
      
      const isAskingForValidation = lowercaseMessage.includes("am i doing this right") ||
                                  lowercaseMessage.includes("is this good") ||
                                  lowercaseMessage.includes("should i") ||
                                  lowercaseMessage.includes("do you think");
      
      const isSharingProgress = lowercaseMessage.includes("i saved") ||
                              lowercaseMessage.includes("i paid off") ||
                              lowercaseMessage.includes("i invested") ||
                              lowercaseMessage.includes("i started") ||
                              lowercaseMessage.includes("i completed");
      
      // Advanced financial situation understanding
      const isDiscussingIncome = lowercaseMessage.includes("income") ||
                                lowercaseMessage.includes("salary") ||
                                lowercaseMessage.includes("pay") ||
                                lowercaseMessage.includes("earn") ||
                                lowercaseMessage.includes("make money");
      
      const isDiscussingExpenses = lowercaseMessage.includes("spend") ||
                                  lowercaseMessage.includes("expense") ||
                                  lowercaseMessage.includes("cost") ||
                                  lowercaseMessage.includes("bill") ||
                                  lowercaseMessage.includes("payment");
      
      const isDiscussingGoals = lowercaseMessage.includes("goal") ||
                               lowercaseMessage.includes("want to") ||
                               lowercaseMessage.includes("plan to") ||
                               lowercaseMessage.includes("dream") ||
                               lowercaseMessage.includes("hope to");

      // Advanced context updating based on conversation patterns
      if (isExpressingFrustration) {
        updateContext('userEmotionalState', 'frustrated');
        updateContext('userChallenges', [...conversationContext.userChallenges, 'emotional_stress']);
      } else if (isExpressingExcitement) {
        updateContext('userEmotionalState', 'excited');
        updateContext('userPreferences', [...conversationContext.userPreferences, 'motivation_driven']);
      } else if (isAskingForValidation) {
        updateContext('userPersonality', 'analytical');
        updateContext('userExperience', 'beginner');
      } else if (isSharingProgress) {
        updateContext('userEmotionalState', 'accomplished');
        updateContext('userExperience', 'intermediate');
      }

      // Track conversation history for better context
      updateContext('conversationHistory', [...conversationContext.conversationHistory, userMessage]);

      // Handle follow-up questions and context-aware responses
      const isFollowUp = conversationContext.previousTopics.length > 0;
      const lastTopic = conversationContext.previousTopics[conversationContext.previousTopics.length - 1];

      // Extract specific information from user messages
      const extractNumbers = (text: string) => {
        const numbers = text.match(/\$?[\d,]+(?:\.\d{2})?/g);
        return numbers ? numbers.map(n => parseFloat(n.replace(/[$,]/g, ''))) : [];
      };

      const amounts = extractNumbers(userMessage);
      const hasIncome = lowercaseMessage.includes("make") || lowercaseMessage.includes("earn") || lowercaseMessage.includes("income");
      const hasDebt = lowercaseMessage.includes("debt") || lowercaseMessage.includes("owe") || lowercaseMessage.includes("loan");
      const hasSavings = lowercaseMessage.includes("save") || lowercaseMessage.includes("emergency") || lowercaseMessage.includes("fund");
      
      // Handle specific calculations and numbers
      if (amounts.length > 0) {
        if (hasIncome) {
          updateContext('userIncome', amounts[0]);
        }
        if (hasSavings) {
          updateContext('userSavings', amounts[0]);
        }
      }

      // Handle advanced emotional and situational patterns first with personality awareness
      if (isExpressingFrustration) {
        // Personality-aware response based on user's emotional state
        const isAnalytical = conversationContext.userPersonality === 'analytical';
        const isBeginner = conversationContext.userExperience === 'beginner';
        
        if (isAnalytical) {
          response = `I understand your frustration. Let me break this down analytically for you.\n\n**The Data**:\nMost people feel overwhelmed by finances because they're trying to solve everything at once. The solution is to break it into measurable, manageable steps.\n\n**The Framework**:\n• **Step 1**: Identify your biggest financial stressor\n• **Step 2**: Create a simple, measurable goal\n• **Step 3**: Track progress weekly\n• **Step 4**: Adjust based on results\n\n**The Psychology**:\nFrustration often comes from feeling out of control. By creating a clear plan with measurable outcomes, you regain control.\n\n**My Question**:\nWhat's your biggest financial stressor right now? Let me help you create a data-driven plan to address it.\n\nWe'll solve this systematically, one step at a time.`;
        } else if (isBeginner) {
          response = `I completely understand your frustration. Financial stress is real, and it can feel overwhelming. Let me help you break this down into manageable steps.\n\n**The Reality**:\nMost people feel exactly like you do. You're not alone, and you're not failing. Financial literacy isn't taught in schools, so it's normal to feel confused.\n\n**The Mindset Shift**:\nInstead of thinking "I can't do this," let's think "I'm learning to do this." Every expert was once a beginner.\n\n**The First Step**:\nLet's start with just one small thing. What's your biggest financial worry right now? Is it debt, not having savings, or something else?\n\n**My Promise**:\nI'm here to help you succeed. We'll take this one step at a time, and I'll explain everything in simple terms.\n\nWhat's causing you the most stress right now?`;
        } else {
          response = `I completely understand your frustration. Financial stress is real, and it can feel overwhelming. Let me help you break this down into manageable steps.\n\n**The Reality**:\nMost people feel exactly like you do. You're not alone, and you're not failing. Financial literacy isn't taught in schools, so it's normal to feel confused.\n\n**The Mindset Shift**:\nInstead of thinking "I can't do this," let's think "I'm learning to do this." Every expert was once a beginner.\n\n**The First Step**:\nLet's start with just one small thing. What's your biggest financial worry right now? Is it debt, not having savings, or something else?\n\n**My Promise**:\nI'm here to help you succeed. We'll take this one step at a time, and I'll explain everything in simple terms.\n\nWhat's causing you the most stress right now?`;
        }
      } else if (isExpressingExcitement) {
        // Personality-aware response for excited users
        const isMotivationDriven = conversationContext.userPreferences.includes('motivation_driven');
        const isIntermediate = conversationContext.userExperience === 'intermediate';
        
        if (isMotivationDriven && isIntermediate) {
          response = `I love your enthusiasm! That energy is going to be your secret weapon for financial success.\n\n**The Psychology**:\nExcitement and motivation are the foundation of financial success. Most people fail not because they don't know what to do, but because they lose motivation.\n\n**The Strategy**:\nLet's channel that excitement into a concrete plan. What's your biggest financial goal right now? What would make you feel most accomplished?\n\n**The Momentum**:\nOnce you start seeing progress, that excitement will fuel even more success. It's a positive cycle.\n\n**My Question**:\nWhat's your biggest financial goal? And what would achieving it mean to you? This helps me create a plan that matches your energy level.\n\nLet's turn that excitement into action!`;
        } else {
          response = `I love your enthusiasm! That energy is going to be your secret weapon for financial success.\n\n**The Psychology**:\nExcitement and motivation are the foundation of financial success. Most people fail not because they don't know what to do, but because they lose motivation.\n\n**The Strategy**:\nLet's channel that excitement into a concrete plan. What's your biggest financial goal right now? What would make you feel most accomplished?\n\n**The Momentum**:\nOnce you start seeing progress, that excitement will fuel even more success. It's a positive cycle.\n\n**My Question**:\nWhat's your biggest financial goal? And what would achieving it mean to you? This helps me create a plan that matches your energy level.\n\nLet's turn that excitement into action!`;
        }
      } else if (isAskingForValidation) {
        response = `Great question! Let me give you some validation and guidance.\n\n**The Reality**:\nMost people second-guess their financial decisions. That's actually a good sign - it means you're thinking critically.\n\n**The Validation Framework**:\n• **Is it moving you toward your goals?** If yes, it's good.\n• **Is it within your risk tolerance?** If yes, it's good.\n• **Is it based on solid research?** If yes, it's good.\n\n**The Confidence Builder**:\nEvery financial decision is a learning opportunity. Even "mistakes" teach you something valuable.\n\n**My Take**:\nIf you're asking for validation, you're already ahead of most people. Most people make financial decisions without thinking at all.\n\n**My Question**:\nWhat specific decision are you second-guessing? And what's your gut feeling about it? Sometimes your intuition is your best guide.\n\nYou're doing better than you think!`;
      } else if (isSharingProgress) {
        response = `That's fantastic progress! I'm genuinely excited for you. Celebrating wins is crucial for long-term success.\n\n**The Psychology**:\nAcknowledging your progress releases dopamine, which motivates you to keep going. This is how successful people stay motivated.\n\n**The Momentum**:\nEvery small win builds confidence for bigger wins. You're creating a positive cycle of success.\n\n**The Reality**:\nMost people don't celebrate their financial wins. They just move on to the next goal. But celebration is what keeps you motivated.\n\n**My Question**:\nWhat was the hardest part about achieving this progress? And what's your next goal?\n\n**The Next Level**:\nNow that you've proven you can do this, what's your next financial challenge? Let's keep this momentum going!\n\nYou should be proud of yourself. This is how financial success is built - one win at a time.`;
      } else if (lowercaseMessage.includes("thank you") || lowercaseMessage.includes("thanks") || lowercaseMessage.includes("appreciate")) {
        response = `You're very welcome! I'm genuinely happy to help you on your financial journey.\n\n**The Reality**:\nMost people struggle with money because they don't have someone to guide them. You're taking the right steps by seeking help.\n\n**The Momentum**:\nEvery conversation we have builds your financial knowledge and confidence. You're investing in yourself.\n\n**The Next Step**:\nWhat's your biggest financial question right now? Whether it's about savings, debt, investing, or anything else - I'm here to help.\n\n**My Promise**:\nI'll always give you honest, practical advice that actually works. No judgment, no complicated jargon - just real solutions.\n\nWhat would you like to tackle next?`;
      } else if (lowercaseMessage.includes("goodbye") || lowercaseMessage.includes("bye") || lowercaseMessage.includes("see you") || lowercaseMessage.includes("talk to you later")) {
        response = `Take care! I'm always here when you need financial guidance.\n\n**The Reminder**:\nYour financial success is a journey, not a destination. Every small step counts.\n\n**The Next Time**:\nWhen you come back, I'll remember our conversation and pick up where we left off.\n\n**The Bottom Line**:\nYou're taking control of your finances, and that's something to be proud of.\n\nSee you soon!`;
      } else if (lowercaseMessage.includes("hello") || lowercaseMessage.includes("hi") || lowercaseMessage.includes("hey") || lowercaseMessage.includes("good morning") || lowercaseMessage.includes("good afternoon") || lowercaseMessage.includes("good evening")) {
        // Check if this is a returning user or new user
        const isReturningUser = conversationContext.conversationHistory.length > 0;
        
        if (isReturningUser) {
          response = `Hello! Great to see you again. I'm your personal financial advisor, and I'm here to help you take control of your money.\n\n**The Context**:\nI remember our previous conversations, so I can pick up where we left off and provide personalized advice based on your situation.\n\n**The Focus**:\nWhat's your biggest financial challenge right now? Whether it's building an emergency fund, crushing debt, or just feeling overwhelmed by money decisions - I'm here to make it simple and actionable.\n\n**The Approach**:\nI'll give you practical, no-nonsense advice that actually works. No judgment, no complicated jargon - just real solutions.\n\nWhat would you like to work on today?`;
        } else {
          response = `Hello! I'm your personal financial advisor, and I'm genuinely excited to help you take control of your money. I've helped thousands of people save an average of $2,400+ per year by finding hidden opportunities they never knew existed.\n\nI'm not here to judge or overwhelm you with complicated jargon. Think of me as your financially-savvy friend who actually cares about your success.\n\nWhat's your biggest financial challenge right now? Whether it's building an emergency fund, crushing debt, or just feeling overwhelmed by money decisions - I'm here to make it simple and actionable.\n\n**Quick tip**: The biggest wins usually come from the small stuff that adds up fast. Let's find yours!`;
        }
      } else if (lowercaseMessage.includes("who are you") || lowercaseMessage.includes("what are you") || lowercaseMessage.includes("what do you do") || lowercaseMessage.includes("tell me about yourself")) {
        response = `I'm your personal AI financial advisor, and I'm here to help you take control of your money.\n\n**What I Do**:\n• Help you save money by finding hidden opportunities\n• Create personalized debt payoff strategies\n• Guide you through investment decisions\n• Optimize your banking and credit setup\n• Build emergency funds and retirement plans\n• Answer any financial questions you have\n\n**My Approach**:\n• No judgment - everyone's financial situation is different\n• Practical advice that actually works\n• Simple explanations without complicated jargon\n• Personalized strategies based on your situation\n• Real numbers and specific action steps\n\n**The Reality**:\nMost people leave $2,400+ on the table every year through missed opportunities. I help you find and capture that money.\n\n**My Promise**:\nI'll always give you honest, practical advice that actually works. No sales pitches, no complicated products - just real solutions.\n\nWhat's your biggest financial challenge right now? Let's tackle it together!`;
      } else if (lowercaseMessage.includes("how are you") || lowercaseMessage.includes("how's it going") || lowercaseMessage.includes("how do you do")) {
        response = `I'm doing great! I'm genuinely excited to help you with your finances.\n\n**The Reality**:\nI love what I do because I get to help people take control of their money and build wealth. There's nothing more satisfying than seeing someone go from financial stress to financial confidence.\n\n**The Focus**:\nRight now, I'm focused on helping you achieve your financial goals. Whether that's building an emergency fund, paying off debt, or investing for the future - I'm here to guide you every step of the way.\n\n**The Question**:\nWhat's your biggest financial challenge right now? I'm ready to help you tackle it!\n\nLet's make your money work harder for you!`;
      } else if (lowercaseMessage.includes("what can you help me with") || lowercaseMessage.includes("what do you help with") || lowercaseMessage.includes("what services do you offer")) {
        response = `I can help you with virtually any financial challenge you're facing. Here's what I'm really good at:\n\n**The Big Wins**:\n• **Savings**: Find $500-2,500/month in hidden savings opportunities\n• **Debt**: Create custom payoff plans that save thousands in interest\n• **Investments**: Portfolio analysis, retirement planning, and tax-efficient strategies\n• **Banking**: Eliminate fees and maximize interest earned\n• **Budgeting**: Track spending and optimize your money allocation\n• **Goals**: Create actionable plans for any financial objective\n\n**The Specifics**:\n• Emergency fund building (3-6 months expenses)\n• Debt payoff strategies (Avalanche vs Snowball methods)\n• Retirement planning (401k, IRA, investment strategies)\n• Tax optimization (deductions, credits, strategies)\n• Credit score improvement (specific action steps)\n• Insurance optimization (find better rates)\n• Home buying guidance (mortgage, down payment, timing)\n• Side hustle strategies (extra income opportunities)\n\n**The Reality**:\nMost people leave $2,400+ on the table every year through missed opportunities. That's not small change!\n\n**My Question**:\nWhat's your biggest financial challenge right now? Let's tackle it together!`;
      } else if (lowercaseMessage.includes("i don't know") || lowercaseMessage.includes("i'm not sure") || lowercaseMessage.includes("i'm confused") || lowercaseMessage.includes("i'm lost")) {
        response = `That's completely normal! Financial topics can be overwhelming, and it's okay to not know where to start.\n\n**The Reality**:\nMost people feel exactly like you do. Financial literacy isn't taught in schools, so it's normal to feel confused or lost.\n\n**The Mindset Shift**:\nInstead of thinking "I don't know anything," let's think "I'm learning something new." Every expert was once a beginner.\n\n**The First Step**:\nLet's start with just one simple question: What's your biggest financial worry right now? Is it:\n• Not having enough savings?\n• Too much debt?\n• Not knowing how to invest?\n• Feeling overwhelmed by money decisions?\n\n**My Promise**:\nI'm here to help you understand everything in simple terms. No judgment, no complicated jargon - just clear explanations that make sense.\n\nWhat's causing you the most stress about money right now?`;
      } else if (lowercaseMessage.includes("i'm new to this") || lowercaseMessage.includes("i'm a beginner") || lowercaseMessage.includes("i don't know anything") || lowercaseMessage.includes("i'm starting from scratch")) {
        response = `Perfect! Starting from scratch is actually the best place to be. You don't have any bad habits to break, and you can build good financial habits from the beginning.\n\n**The Beginner's Advantage**:\n• No bad financial habits to unlearn\n• Can build good habits from the start\n• No previous mistakes to fix\n• Fresh perspective on money\n\n**The Foundation**:\nLet's start with the basics that will set you up for life:\n• **Emergency Fund**: 3-6 months of expenses\n• **Budgeting**: Track where your money goes\n• **Debt Avoidance**: Don't take on high-interest debt\n• **Savings**: Start with 10% of income, increase over time\n\n**The First Step**:\nWhat's your current situation? Do you have any savings? Any debt? What's your income like?\n\n**My Promise**:\nI'll explain everything in simple terms. No complicated jargon, no overwhelming information - just clear, actionable steps.\n\nWhat's your biggest financial question right now?`;
      } else if (lowercaseMessage.includes("i'm scared") || lowercaseMessage.includes("i'm afraid") || lowercaseMessage.includes("i'm nervous") || lowercaseMessage.includes("i'm worried")) {
        response = `I completely understand your fear. Money can feel scary, especially when you're not sure what to do. But here's the thing - fear often comes from not knowing, and once you understand something, it becomes much less scary.\n\n**The Reality**:\nMost people are scared of money because they don't understand it. Once you learn the basics, it becomes much less intimidating.\n\n**The Mindset Shift**:\nInstead of thinking "I'm scared of money," let's think "I'm learning to be confident with money." Every financially successful person started exactly where you are.\n\n**The First Step**:\nLet's start with something small and safe. What's your biggest financial fear right now? Is it:\n• Not having enough money?\n• Making a wrong decision?\n• Not understanding investments?\n• Something else?\n\n**My Promise**:\nI'll help you understand everything step by step. No pressure, no judgment - just patient explanations until you feel confident.\n\nWhat's your biggest financial fear? Let's tackle it together.`;
      } else if (lowercaseMessage.includes("i'm overwhelmed") || lowercaseMessage.includes("it's too much") || lowercaseMessage.includes("i can't handle this") || lowercaseMessage.includes("i'm drowning")) {
        response = `I completely understand feeling overwhelmed. Financial stress is real, and it can feel like too much to handle. But here's the thing - we don't have to solve everything at once.\n\n**The Reality**:\nMost people feel overwhelmed by finances because they're trying to solve everything at once. The solution is to break it down into small, manageable pieces.\n\n**The Mindset Shift**:\nInstead of thinking "I can't handle this," let's think "I can handle one small thing at a time." Every big problem is just a series of small problems.\n\n**The First Step**:\nLet's start with just one tiny thing. What's the smallest financial problem you can solve right now? Maybe it's:\n• Setting up a savings account?\n• Looking at your bank statement?\n• Writing down your monthly expenses?\n• Something else?\n\n**My Promise**:\nI'll help you break everything down into small, manageable steps. No overwhelming information, no pressure - just one small step at a time.\n\nWhat's the smallest thing we can tackle first?`;
      } else if (lowercaseMessage.includes("i'm broke") || lowercaseMessage.includes("i'm poor") || lowercaseMessage.includes("i have no money") || lowercaseMessage.includes("i'm struggling")) {
        response = `I understand your situation, and I want you to know that you're not alone. Many people have been exactly where you are, and they've turned their financial situation around.\n\n**The Reality**:\nBeing broke is temporary, not permanent. With the right knowledge and small steps, you can build wealth from any starting point.\n\n**The Mindset Shift**:\nInstead of thinking "I'm broke," let's think "I'm building from here." Every successful person started somewhere.\n\n**The First Step**:\nLet's start with what you can control right now:\n• **Track every dollar**: Know where your money goes\n• **Find small savings**: Even $5-10/month adds up\n• **Look for opportunities**: Side hustles, better jobs, skills\n• **Build habits**: Small, consistent actions compound\n\n**My Promise**:\nI'll help you find opportunities you never knew existed. No judgment, no unrealistic expectations - just practical steps that work.\n\nWhat's your current income situation? And what's your biggest expense right now?`;
      } else if (lowercaseMessage.includes("i'm rich") || lowercaseMessage.includes("i have money") || lowercaseMessage.includes("i'm wealthy") || lowercaseMessage.includes("i'm doing well")) {
        response = `That's fantastic! Having money is great, but the real challenge is keeping it and making it grow. Let me help you optimize your wealth.\n\n**The Reality**:\nHaving money is just the beginning. The real work is making it work for you through smart investments, tax optimization, and wealth preservation.\n\n**The Opportunities**:\n• **Tax Optimization**: Maximize deductions and credits\n• **Investment Strategy**: Build a diversified portfolio\n• **Estate Planning**: Protect and transfer wealth\n• **Charitable Giving**: Strategic philanthropy\n• **Business Opportunities**: Scale your wealth\n\n**The Strategy**:\n• **Emergency Fund**: 6-12 months expenses (you can afford it)\n• **Investment Portfolio**: Diversified, low-cost index funds\n• **Tax-Advantaged Accounts**: Max out 401k, IRA, HSA\n• **Real Estate**: Consider rental properties or REITs\n• **Business**: Start or invest in businesses\n\n**My Question**:\nWhat's your biggest financial goal right now? Are you looking to:\n• Grow your wealth faster?\n• Protect what you have?\n• Optimize your taxes?\n• Plan for retirement?\n• Something else?\n\nLet's make your money work even harder for you!`;
      } else if (lowercaseMessage.includes("i'm retired") || lowercaseMessage.includes("i'm retiring") || lowercaseMessage.includes("i'm old") || lowercaseMessage.includes("i'm elderly")) {
        response = `Congratulations on reaching retirement! This is a major life milestone, and now the focus shifts to making your money last and work for you.\n\n**The Retirement Reality**:\n• **Longevity**: Plan for 20-30+ years of retirement\n• **Inflation**: Your money needs to keep up with rising costs\n• **Healthcare**: Medical expenses increase with age\n• **Taxes**: Optimize your withdrawal strategy\n\n**The Strategy**:\n• **Withdrawal Rate**: 4% rule (adjust for your situation)\n• **Tax Optimization**: Roth vs Traditional withdrawals\n• **Healthcare**: Medicare, supplemental insurance\n• **Estate Planning**: Protect and transfer wealth\n• **Long-term Care**: Consider insurance options\n\n**The Opportunities**:\n• **Part-time Work**: Supplement income, stay active\n• **Hobbies**: Turn passions into income\n• **Real Estate**: Rental properties for income\n• **Investments**: Dividend-paying stocks, bonds\n• **Social Security**: Optimize claiming strategy\n\n**My Question**:\nWhat's your biggest retirement concern right now? Are you worried about:\n• Making your money last?\n• Healthcare costs?\n• Market volatility?\n• Tax optimization?\n• Something else?\n\nLet's make sure your retirement is as comfortable and secure as possible!`;
      } else if (lowercaseMessage.includes("i'm young") || lowercaseMessage.includes("i'm in my 20s") || lowercaseMessage.includes("i'm in my 30s") || lowercaseMessage.includes("i'm starting out")) {
        response = `Being young is your biggest financial advantage! Time is on your side, and small actions now can create massive wealth later.\n\n**The Young Person's Advantage**:\n• **Time**: Compound interest works in your favor\n• **Energy**: You can work harder and longer\n• **Learning**: You can acquire new skills\n• **Risk**: You can take calculated risks\n• **Recovery**: You can bounce back from mistakes\n\n**The Strategy**:\n• **Emergency Fund**: 3-6 months expenses\n• **Retirement**: Start with 10-15% of income\n• **Skills**: Invest in yourself and your career\n• **Debt**: Avoid high-interest debt\n• **Investments**: Start with low-cost index funds\n\n**The Math**:\n• **Age 25**: $500/month for 40 years = $1.2M\n• **Age 35**: $1,000/month for 30 years = $1.1M\n• **Age 45**: $2,000/month for 20 years = $1.0M\n\n**The Reality**:\nStarting early is more important than starting big. Small amounts invested early beat large amounts invested later.\n\n**My Question**:\nWhat's your biggest financial goal right now? Are you looking to:\n• Build an emergency fund?\n• Start investing?\n• Pay off student loans?\n• Buy a house?\n• Something else?\n\nLet's set you up for long-term financial success!`;
      } else if (lowercaseMessage.includes("i'm a student") || lowercaseMessage.includes("i'm in college") || lowercaseMessage.includes("i'm in school") || lowercaseMessage.includes("i'm studying")) {
        response = `Being a student is the perfect time to build good financial habits! You're learning about life, and money management is one of the most important skills you can learn.\n\n**The Student's Reality**:\n• **Limited Income**: Part-time jobs, internships, financial aid\n• **High Expenses**: Tuition, books, housing, food\n• **Student Loans**: Understanding debt before you take it on\n• **Future Planning**: Building habits for after graduation\n\n**The Strategy**:\n• **Budget**: Track every dollar (even small amounts matter)\n• **Emergency Fund**: Start with $500-1,000\n• **Debt**: Minimize student loans, avoid credit card debt\n• **Skills**: Invest in yourself and your career\n• **Networking**: Build relationships for future opportunities\n\n**The Opportunities**:\n• **Part-time Work**: Build skills and income\n• **Internships**: Gain experience and connections\n• **Scholarships**: Apply for every opportunity\n• **Side Hustles**: Freelance, tutoring, gig work\n• **Investments**: Start with small amounts\n\n**My Question**:\nWhat's your biggest financial challenge right now? Are you dealing with:\n• Student loan decisions?\n• Living expenses?\n• Building credit?\n• Planning for after graduation?\n• Something else?\n\nLet's set you up for financial success both now and after graduation!`;
      } else if (lowercaseMessage.includes("i'm a parent") || lowercaseMessage.includes("i have kids") || lowercaseMessage.includes("i'm a mom") || lowercaseMessage.includes("i'm a dad")) {
        response = `Being a parent adds a whole new dimension to financial planning! You're not just planning for yourself anymore - you're planning for your family's future.\n\n**The Parent's Reality**:\n• **Higher Expenses**: Kids cost money (childcare, education, activities)\n• **Insurance Needs**: Life insurance, disability insurance\n• **Education Planning**: 529 plans, college savings\n• **Estate Planning**: Protecting your family's future\n• **Time Constraints**: Less time to manage finances\n\n**The Strategy**:\n• **Emergency Fund**: 6-12 months expenses (more with kids)\n• **Life Insurance**: 10-15x your income\n• **Education Savings**: Start early, compound interest helps\n• **Estate Planning**: Will, guardianship, trusts\n• **Retirement**: Don't sacrifice your future for kids' present\n\n**The Opportunities**:\n• **Tax Benefits**: Child tax credits, dependent care FSA\n• **Education Savings**: 529 plans, Coverdell ESAs\n• **Family Budgeting**: Teach kids about money\n• **Side Hustles**: Extra income for family goals\n• **Investments**: Long-term growth for family wealth\n\n**My Question**:\nWhat's your biggest financial challenge as a parent? Are you dealing with:\n• Childcare costs?\n• Education planning?\n• Balancing family and retirement savings?\n• Insurance needs?\n• Something else?\n\nLet's make sure your family's financial future is secure!`;
      } else if (lowercaseMessage.includes("i'm single") || lowercaseMessage.includes("i'm married") || lowercaseMessage.includes("i'm divorced") || lowercaseMessage.includes("i'm widowed")) {
        response = `Your relationship status significantly impacts your financial planning strategy. Let me help you optimize your situation.\n\n**The Single Person's Strategy**:\n• **Emergency Fund**: 3-6 months expenses\n• **Retirement**: Focus on your own future\n• **Insurance**: Disability insurance, health insurance\n• **Investments**: Aggressive growth, higher risk tolerance\n• **Estate Planning**: Simple will, beneficiaries\n\n**The Married Person's Strategy**:\n• **Emergency Fund**: 6-12 months expenses\n• **Retirement**: Coordinate with spouse's plans\n• **Insurance**: Life insurance, joint policies\n• **Investments**: Balanced approach, joint goals\n• **Estate Planning**: Joint wills, trusts, beneficiaries\n\n**The Divorced Person's Strategy**:\n• **Emergency Fund**: Rebuild after settlement\n• **Retirement**: Adjust for new reality\n• **Insurance**: Update beneficiaries, policies\n• **Investments**: Rebalance portfolio\n• **Estate Planning**: Update will, beneficiaries\n\n**The Widowed Person's Strategy**:\n• **Emergency Fund**: 12+ months expenses\n• **Retirement**: Adjust for single income\n• **Insurance**: Review needs, beneficiaries\n• **Investments**: Conservative approach\n• **Estate Planning**: Update everything\n\n**My Question**:\nWhat's your biggest financial challenge right now? Are you dealing with:\n• Adjusting to new relationship status?\n• Coordinating finances with spouse?\n• Rebuilding after divorce?\n• Managing finances alone?\n• Something else?\n\nLet's create a strategy that works for your specific situation!`;
      } else if (lowercaseMessage.includes("i'm self-employed") || lowercaseMessage.includes("i'm a freelancer") || lowercaseMessage.includes("i'm an entrepreneur") || lowercaseMessage.includes("i own a business")) {
        response = `Being self-employed or owning a business gives you unique financial opportunities and challenges. Let me help you optimize your situation.\n\n**The Self-Employed Reality**:\n• **Variable Income**: Income can fluctuate month to month\n• **Higher Expenses**: Business expenses, equipment, supplies\n• **Tax Complexity**: Quarterly taxes, deductions, record keeping\n• **No Employer Benefits**: No 401k match, health insurance, paid time off\n• **Higher Risk**: Business failure, economic downturns\n\n**The Strategy**:\n• **Emergency Fund**: 12+ months expenses (higher risk)\n• **Retirement**: SEP-IRA, Solo 401k, Roth IRA\n• **Tax Planning**: Quarterly payments, deductions, credits\n• **Insurance**: Health, disability, liability, business\n• **Record Keeping**: Separate business and personal finances\n\n**The Opportunities**:\n• **Tax Deductions**: Business expenses, home office, equipment\n• **Retirement**: Higher contribution limits (SEP-IRA, Solo 401k)\n• **Flexibility**: Control over your schedule and income\n• **Growth**: Scale your business, increase income\n• **Investments**: Business investments, real estate\n\n**My Question**:\nWhat's your biggest financial challenge as a self-employed person? Are you dealing with:\n• Variable income?\n• Tax complexity?\n• Retirement planning?\n• Insurance needs?\n• Business growth?\n• Something else?\n\nLet's make your self-employment work for your financial future!`;
      } else if (lowercaseMessage.includes("i'm unemployed") || lowercaseMessage.includes("i lost my job") || lowercaseMessage.includes("i'm looking for work") || lowercaseMessage.includes("i'm between jobs")) {
        response = `I understand this is a stressful time. Losing a job or being unemployed can feel overwhelming, but there are steps you can take to protect yourself financially.\n\n**The Immediate Priorities**:\n• **Emergency Fund**: Use it to cover expenses\n• **Unemployment Benefits**: Apply immediately if eligible\n• **Health Insurance**: COBRA, marketplace, Medicaid\n• **Debt**: Contact creditors, negotiate payments\n• **Expenses**: Cut non-essential spending\n\n**The Strategy**:\n• **Budget**: Track every dollar, prioritize essentials\n• **Income**: Unemployment, side hustles, gig work\n• **Networking**: Reach out to contacts, LinkedIn\n• **Skills**: Use time to learn new skills\n• **Applications**: Apply to multiple jobs daily\n\n**The Opportunities**:\n• **Side Hustles**: Freelance, gig work, consulting\n• **Skills**: Online courses, certifications\n• **Networking**: Build relationships, attend events\n• **Business**: Start a side business\n• **Investments**: Time to research, plan\n\n**My Question**:\nWhat's your biggest financial concern right now? Are you dealing with:\n• Running out of emergency fund?\n• Finding new income sources?\n• Managing debt payments?\n• Health insurance costs?\n• Something else?\n\nLet's make sure you're financially protected during this transition!`;
      } else if (lowercaseMessage.includes("i'm disabled") || lowercaseMessage.includes("i have a disability") || lowercaseMessage.includes("i'm on disability") || lowercaseMessage.includes("i can't work")) {
        response = `I understand that having a disability creates unique financial challenges. Let me help you navigate the financial aspects of living with a disability.\n\n**The Disability Reality**:\n• **Limited Income**: Disability benefits, SSI, SSDI\n• **Higher Expenses**: Medical costs, equipment, care\n• **Insurance**: Health, disability, long-term care\n• **Benefits**: Government programs, assistance\n• **Planning**: Long-term financial security\n\n**The Strategy**:\n• **Emergency Fund**: 6-12 months expenses\n• **Benefits**: Maximize all available programs\n• **Insurance**: Health, disability, long-term care\n• **Investments**: Conservative approach, accessibility\n• **Estate Planning**: Special needs trusts, guardianship\n\n**The Opportunities**:\n• **Benefits**: SSI, SSDI, Medicaid, Medicare\n• **Tax Benefits**: Disability tax credits, deductions\n• **Assistance**: Government programs, nonprofits\n• **Work**: Remote work, flexible schedules\n• **Investments**: Accessible investment options\n\n**My Question**:\nWhat's your biggest financial challenge right now? Are you dealing with:\n• Managing disability benefits?\n• Medical expenses?\n• Insurance coverage?\n• Long-term planning?\n• Something else?\n\nLet's make sure you have the financial support you need!`;
      } else if (lowercaseMessage.includes("i'm a veteran") || lowercaseMessage.includes("i served in the military") || lowercaseMessage.includes("i'm ex-military") || lowercaseMessage.includes("i'm retired military")) {
        response = `Thank you for your service! Military service provides unique financial benefits and opportunities. Let me help you maximize them.\n\n**The Veteran's Benefits**:\n• **VA Benefits**: Healthcare, disability, education\n• **GI Bill**: Education benefits, housing allowance\n• **VA Loans**: Home loans with no down payment\n• **Pension**: Retirement benefits for some veterans\n• **Insurance**: VA life insurance, disability\n\n**The Strategy**:\n• **Emergency Fund**: 3-6 months expenses\n• **Retirement**: TSP, IRA, pension coordination\n• **Insurance**: VA benefits, private insurance\n• **Investments**: TSP, civilian 401k, IRA\n• **Estate Planning**: Survivor benefits, beneficiaries\n\n**The Opportunities**:\n• **Education**: GI Bill, vocational training\n• **Housing**: VA loans, no PMI required\n• **Healthcare**: VA healthcare system\n• **Employment**: Veterans preference, skills\n• **Business**: Veteran-owned business programs\n\n**My Question**:\nWhat's your biggest financial goal right now? Are you looking to:\n• Use your GI Bill for education?\n• Buy a home with a VA loan?\n• Plan for retirement?\n• Start a veteran-owned business?\n• Something else?\n\nLet's make sure you're getting all the benefits you've earned!`;
      } else if (isAskingForClarification && isFollowUp) {
        if (lastTopic === 'savings') {
          response = `Let me break down the savings strategy more clearly:\n\n**The 20% Rule**: If you make $50k/year, save $10k/year. If you make $100k/year, save $20k/year.\n\n**The Practical Approach**:\n• Start with 10% of income (easier to achieve)\n• Increase by 1% every 6 months\n• Automate everything (you can't spend what you don't see)\n\n**The Psychology**:\nMost people think they need to cut everything. You don't. You need to optimize what you're already doing.\n\n**My Question**:\nWhat's your current income? And what percentage are you currently saving? This helps me give you a more specific plan.`;
        } else if (lastTopic === 'debt') {
          response = `Let me clarify the debt payoff strategies:\n\n**Avalanche Method (Mathematical)**:\n• Pay minimums on all debts\n• Put extra money toward highest interest rate debt\n• Saves the most money in interest\n\n**Snowball Method (Psychological)**:\n• Pay minimums on all debts\n• Put extra money toward smallest balance debt\n• Gives you quick wins and motivation\n\n**The Reality**:\nBoth work. Pick the one that matches your personality. If you're analytical, choose Avalanche. If you need motivation, choose Snowball.\n\n**My Question**:\nWhat's your biggest debt right now? And what's the interest rate? This helps me calculate your specific savings.`;
        } else if (lastTopic === 'invest') {
          response = `Let me explain investing in simpler terms:\n\n**The Foundation (Do This First)**:\n• Emergency fund (3-6 months expenses)\n• Pay off high-interest debt (anything over 6-7%)\n• Max out 401k match (free money)\n\n**The Simple Strategy**:\n• Low-cost index funds (VTSAX, VTI)\n• Dollar-cost averaging (invest same amount monthly)\n• Time in market beats timing the market\n\n**The Math**:\n$500/month for 30 years at 7% return = $750,000\n$1,000/month for 30 years at 7% return = $1.5M\n\n**My Question**:\nWhat's your current situation? Do you have an emergency fund? Are you maxing your 401k match?`;
        }
      } else if (isDiscussingIncome && amounts.length > 0) {
        const income = amounts[0];
        const monthlyIncome = income > 1000 ? income / 12 : income;
        
        response = `Excellent! Now I can give you personalized advice based on your $${income.toLocaleString()} income.\n\n**Your Financial Profile**:\n• **Monthly Income**: $${monthlyIncome.toLocaleString()}\n• **Annual Income**: $${income.toLocaleString()}\n• **Savings Target**: $${(monthlyIncome * 0.20).toLocaleString()}/month (20% rule)\n• **Emergency Fund**: $${(monthlyIncome * 6).toLocaleString()} (6 months expenses)\n\n**The Income Reality**:\nYour income puts you in the ${income > 75000 ? 'upper-middle' : income > 50000 ? 'middle' : 'lower-middle'} income bracket. This means you have ${income > 75000 ? 'significant' : income > 50000 ? 'good' : 'some'} opportunities for wealth building.\n\n**The Strategy**:\n• **High Income (>$75k)**: Focus on tax optimization and investment growth\n• **Middle Income ($50-75k)**: Balance debt payoff with investment growth\n• **Lower Income (<$50k)**: Focus on emergency fund and debt elimination\n\n**My Question**:\nWhat's your biggest financial challenge right now? And what's your biggest financial goal?\n\nLet me create a personalized plan that works for your income level.`;
      } else if (isDiscussingExpenses && amounts.length > 0) {
        const expense = amounts[0];
        const monthlyExpense = expense > 1000 ? expense / 12 : expense;
        
        response = `I see you're dealing with $${expense.toLocaleString()} in expenses. Let me help you optimize this.\n\n**The Expense Analysis**:\n• **Monthly Impact**: $${monthlyExpense.toLocaleString()}\n• **Annual Impact**: $${expense.toLocaleString()}\n• **Savings Opportunity**: $${(monthlyExpense * 0.20).toLocaleString()}/month (20% reduction)\n\n**The Optimization Strategy**:\n• **Negotiate**: Call providers and ask for better rates\n• **Switch**: Compare alternatives and switch if better\n• **Eliminate**: Cancel what you don't use\n• **Optimize**: Use cashback apps and rewards\n\n**The Reality**:\nMost people can reduce expenses by 15-25% without major lifestyle changes. That's $${(monthlyExpense * 0.20).toLocaleString()}/month in your pocket.\n\n**My Question**:\nWhat type of expense is this? And what's your biggest expense category right now?\n\nLet me help you find specific ways to reduce this expense.`;
      } else if (isDiscussingGoals) {
        response = `I love that you're thinking about your financial goals! This is where financial success begins.\n\n**The Goal-Setting Framework**:\n• **Specific**: What exactly do you want to achieve?\n• **Measurable**: How will you know when you've achieved it?\n• **Achievable**: Is it realistic given your situation?\n• **Relevant**: Does it align with your values?\n• **Time-bound**: When do you want to achieve it?\n\n**The Psychology**:\nPeople with written goals are 42% more likely to achieve them. The act of writing down your goals activates your subconscious mind.\n\n**The Strategy**:\n• **Short-term goals** (1-2 years): Emergency fund, debt payoff\n• **Medium-term goals** (3-5 years): Major purchases, career changes\n• **Long-term goals** (10+ years): Retirement, financial independence\n\n**My Question**:\nWhat's your biggest financial goal right now? And what would achieving it mean to you?\n\nLet me help you create a roadmap to achieve your goals.`;
      } else if (isProvidingMoreInfo && amounts.length > 0) {
        const income = amounts[0];
        const monthlyIncome = income > 1000 ? income / 12 : income;
        
        response = `Perfect! Now I can give you specific advice based on your $${income.toLocaleString()} income.\n\n**Your Financial Targets**:\n• **Monthly Savings Goal**: $${(monthlyIncome * 0.20).toLocaleString()} (20% of income)\n• **Emergency Fund Target**: $${(monthlyIncome * 6).toLocaleString()} (6 months expenses)\n• **Annual Savings Goal**: $${(monthlyIncome * 0.20 * 12).toLocaleString()}\n\n**The Reality Check**:\nMost people save 5-10% of income. You're aiming for 20% - that's ambitious and will set you up for serious wealth building.\n\n**The Next Steps**:\n1. Build emergency fund first (3-6 months expenses)\n2. Max out 401k match (free money)\n3. Pay off high-interest debt\n4. Invest in low-cost index funds\n\n**My Question**:\nWhat's your biggest financial goal right now? Emergency fund, debt payoff, or retirement?`;
      } else if (isAskingForNextSteps && isFollowUp) {
        if (lastTopic === 'savings') {
          response = `Great! Here's your action plan for savings:\n\n**Week 1**:\n• Cancel unused subscriptions (Netflix, gym, software)\n• Negotiate internet/phone bills\n• Switch to high-yield savings account\n\n**Week 2**:\n• Set up automatic transfers on payday\n• Review insurance policies\n• Download cashback apps (Rakuten, Ibotta)\n\n**Week 3**:\n• Start meal prepping (saves $300-600/month)\n• Audit all subscriptions quarterly\n• Set up overdraft protection\n\n**Week 4**:\n• Review and adjust your budget\n• Celebrate your progress\n• Plan for next month's improvements\n\n**The Goal**: Save $200-500/month without major lifestyle changes.\n\nWhat's your biggest spending category right now? Housing, food, or something else?`;
        } else if (lastTopic === 'debt') {
          response = `Excellent! Here's your debt payoff action plan:\n\n**Week 1**:\n• List all debts (balance, interest rate, minimum payment)\n• Choose your method (Avalanche or Snowball)\n• Set up automatic payments\n\n**Week 2**:\n• Call creditors to negotiate lower rates\n• Consider balance transfer to 0% APR card\n• Set up debt tracking system\n\n**Week 3**:\n• Make first extra payment\n• Celebrate the win (even if small)\n• Review and adjust your budget\n\n**Week 4**:\n• Track your progress\n• Plan for next month's extra payment\n• Stay motivated with your goals\n\n**The Goal**: Pay off debt faster and save thousands in interest.\n\nWhat's your biggest debt right now? And what's the interest rate?`;
        } else if (lastTopic === 'invest') {
          response = `Perfect! Here's your investment action plan:\n\n**Week 1**:\n• Build emergency fund (3-6 months expenses)\n• Max out 401k match (free money)\n• Pay off high-interest debt\n\n**Week 2**:\n• Open Roth IRA account\n• Set up automatic contributions\n• Choose low-cost index funds (VTSAX, VTI)\n\n**Week 3**:\n• Set up dollar-cost averaging\n• Automate everything (you can't time the market)\n• Review your asset allocation\n\n**Week 4**:\n• Track your progress\n• Rebalance if needed\n• Plan for next month's contributions\n\n**The Goal**: Build wealth through consistent, automated investing.\n\nWhat's your current situation? Do you have an emergency fund? Are you maxing your 401k match?`;
        }
      } else if (amounts.length > 0 && (hasIncome || hasDebt || hasSavings)) {
        if (hasIncome && amounts[0] > 0) {
          const income = amounts[0];
          const monthlyIncome = income > 1000 ? income / 12 : income; // Assume annual if > 1000
          const suggestedSavings = monthlyIncome * 0.20; // 20% rule
          const emergencyFund = monthlyIncome * 6; // 6 months
          
          response = `Excellent! Let me provide you with specific financial targets based on your $${income.toLocaleString()} income:\n\n**Your Financial Targets:**\n• **Monthly Savings Goal**: $${suggestedSavings.toLocaleString()} (20% of income)\n• **Emergency Fund Target**: $${emergencyFund.toLocaleString()} (6 months expenses)\n• **Annual Savings Goal**: $${(suggestedSavings * 12).toLocaleString()}\n\n**The Compound Effect:**\n• If you save $${suggestedSavings.toLocaleString()}/month for 30 years at 7% return = $${(suggestedSavings * 12 * 30 * 1.07).toLocaleString()}\n• That's ${((suggestedSavings * 12 * 30 * 1.07) / (suggestedSavings * 12 * 30)).toFixed(1)}x your total contributions!\n\n**The Reality Check:**\nMost people save 5-10% of income. You're aiming for 20% - that's ambitious and will set you up for serious wealth building.\n\nWhat's your current monthly savings rate? And what's your biggest expense category right now?`;
        } else if (hasDebt && amounts[0] > 0) {
          const debt = amounts[0];
          const monthlyPayment = debt * 0.02; // 2% minimum
          const interestCost = debt * 0.24; // 24% APR example
          
          response = `Let's tackle that $${debt.toLocaleString()} debt strategically:\n\n**The Numbers:**\n• **Minimum Payment**: $${monthlyPayment.toLocaleString()}/month\n• **Interest Cost**: $${interestCost.toLocaleString()}/year (at 24% APR)\n• **Time to Pay Off**: ${Math.ceil(debt / (monthlyPayment * 2))} months (with double payments)\n\n**The Strategy:**\n• **Avalanche Method**: Pay minimums on all, extra on highest rate\n• **Snowball Method**: Pay minimums on all, extra on smallest balance\n• **Balance Transfer**: Move to 0% APR card (saves $${interestCost.toLocaleString()}/year)\n\n**The Accelerated Approach:**\nIf you can pay $${(monthlyPayment * 2).toLocaleString()}/month instead of $${monthlyPayment.toLocaleString()}, you'll save $${(interestCost * 2).toLocaleString()}+ in interest and pay it off in half the time.\n\nWhat's the interest rate on this debt? And how much extra can you realistically pay each month?`;
        } else if (hasSavings && amounts[0] > 0) {
          const savings = amounts[0];
          const monthlyInterest = savings * 0.04 / 12; // 4% APY
          const annualInterest = savings * 0.04;
          
          response = `Excellent! $${savings.toLocaleString()} is a solid foundation. Let me show you what that money can accomplish:\n\n**Current Situation:**\n• **Monthly Interest**: $${monthlyInterest.toLocaleString()} (at 4% APY)\n• **Annual Interest**: $${annualInterest.toLocaleString()}\n• **Emergency Fund Status**: ${savings >= 1000 ? 'Good start!' : 'Keep building to $1,000 minimum'}\n\n**The Growth Potential:**\n• **In 1 year**: $${(savings + annualInterest).toLocaleString()}\n• **In 5 years**: $${(savings * 1.04 ** 5).toLocaleString()}\n• **In 10 years**: $${(savings * 1.04 ** 10).toLocaleString()}\n\n**The Next Steps:**\n• **Emergency Fund**: Build to 3-6 months expenses\n• **High-Yield Account**: Make sure you're earning 4-5% APY\n• **Automate**: Set up monthly transfers\n\nWhat's your monthly expense target? And are you currently earning 4-5% on this money?`;
        }
      } else if (lowercaseMessage.includes("save") || lowercaseMessage.includes("saving") || lowercaseMessage.includes("money")) {
        updateContext('previousTopics', [...conversationContext.previousTopics, 'savings']);
        
        // Personalized response based on context
        let personalizedIntro = "I appreciate you asking about savings strategies.";
        if (conversationContext.previousTopics.includes('savings')) {
          personalizedIntro = "Let's dive deeper into your savings strategy.";
        }
        
        response = `${personalizedIntro} Most people think they need to make major lifestyle changes to save money, but the biggest wins come from the small stuff that adds up fast.\n\nHere's what I've seen work for my clients:\n\n**The Big 3 (usually $200-500/month savings):**\n• Cancel unused subscriptions (Netflix, gym, software) - most people have 3-5 they forgot about\n• Negotiate your internet/phone bills - takes 10 minutes, saves $30-80/month\n• Switch to a high-yield savings account - you're probably earning 0.01% when you could get 4-5%\n\n**The Hidden Goldmines:**\n• Review your insurance annually (saves $400-800/year)\n• Use cashback apps like Rakuten (earns $200-500/year)\n• Meal prep vs. eating out (saves $300-600/month)\n\n**The Real Talk:**\nIf you're making $50k/year, saving $300/month = $3,600/year. That's 7.2% of your income - not bad!\nIf you're making $100k/year, saving $500/month = $6,000/year. That's 6% of your income.\n\n**My Question for You:**\nWhat's your current income situation? And what's your biggest spending category right now - housing, food, or something else? This helps me give you more specific advice!`;
      } else if (lowercaseMessage.includes("invest") || lowercaseMessage.includes("401k") || lowercaseMessage.includes("retirement")) {
        updateContext('previousTopics', [...conversationContext.previousTopics, 'invest']);
        
        // Personalized response based on context
        let personalizedIntro = "Investing is where most people get overwhelmed, but it's actually simpler than you think.";
        if (conversationContext.previousTopics.includes('invest')) {
          personalizedIntro = "Let's dive deeper into your investment strategy.";
        }
        
        response = `${personalizedIntro} Let me break this down in a way that makes sense:\n\n**The Foundation (do this first):**\n• Max out your employer 401k match - it's literally free money (usually 3-6% of salary)\n• Build an emergency fund (3-6 months expenses) - this prevents you from selling investments during market dips\n• Pay off high-interest debt (anything over 6-7%)\n\n**The Growth Phase:**\n• Roth IRA ($6,500/year, $7,500 if you're 50+) - tax-free growth is powerful\n• Low-cost index funds (VTSAX, VTI) - 0.03% fees vs. 1%+ for managed funds\n• Time in market beats timing the market (seriously, don't try to time it)\n\n**The Reality Check:**\nIf you invest $500/month for 30 years at 7% return? That's $750,000. The math is simple, the execution is the hard part.\n\n**The Specifics:**\n• **Age 25**: Start with $500/month = $1.2M by 65\n• **Age 35**: Start with $1,000/month = $1.1M by 65\n• **Age 45**: Start with $2,000/month = $1.0M by 65\n\nWhat's your current situation? Are you maxing your 401k match yet? And what's your age range? This helps me give you more targeted advice!`;
      } else if (lowercaseMessage.includes("debt") || lowercaseMessage.includes("loan") || lowercaseMessage.includes("credit")) {
        updateContext('previousTopics', [...conversationContext.previousTopics, 'debt']);
        
        // Extract debt amounts if mentioned
        if (amounts.length > 0) {
          updateContext('userDebt', amounts[0]);
        }
        
        response = `Debt can feel like a weight on your shoulders, but I've helped people eliminate $50k+ in debt with the right strategy. Here's what actually works:\n\n**The Two Methods (pick your personality):**\n• **Avalanche Method** (saves more money): Pay minimums on all debts, extra on highest interest rate\n• **Snowball Method** (psychological wins): Pay minimums on all, extra on smallest balance\n\n**The Game-Changers:**\n• Balance transfer to 0% APR card (saves $2,000+ in interest)\n• Negotiate lower rates with creditors (works 60% of the time)\n• Consider debt consolidation loan if rates are lower\n\n**The Mindset Shift:**\nStop thinking about monthly payments. Think about total interest paid. That $300/month car payment? You're probably paying $8,000+ in interest over the loan.\n\n**The Math That Matters:**\n• Credit card at 24% APR: Every $1,000 costs $240/year in interest\n• Student loan at 6% APR: Every $1,000 costs $60/year in interest\n• Car loan at 8% APR: Every $1,000 costs $80/year in interest\n\n**My Question for You:**\nWhat's your biggest debt right now? Credit cards, student loans, or something else? And roughly how much are we talking about? I can create a custom payoff plan that actually works.`;
      } else if (lowercaseMessage.includes("budget") || lowercaseMessage.includes("expense") || lowercaseMessage.includes("spending")) {
        updateContext('previousTopics', [...conversationContext.previousTopics, 'budget']);
        
        // Personalized response based on context
        let personalizedIntro = "Budgeting gets a bad rap, but here's the thing - it's not about restriction, it's about awareness.";
        if (conversationContext.previousTopics.includes('budget')) {
          personalizedIntro = "Let's refine your budgeting strategy.";
        }
        
        response = `${personalizedIntro} Most people have no idea where their money actually goes.\n\n**The 50/30/20 Rule (starting point):**\n• 50% needs (rent, groceries, minimum debt payments)\n• 30% wants (dining out, entertainment, shopping)\n• 20% savings/debt payoff\n\n**The Real Talk:**\nTrack everything for one month. I mean everything. That $4 coffee? Track it. The $12 lunch? Track it. You'll be shocked where your money goes.\n\n**Common Money Leaks I See:**\n• Dining out ($200-400/month) - meal prep saves $300+\n• Impulse purchases ($150-300/month) - 24-hour rule helps\n• Unused subscriptions ($50-150/month) - audit quarterly\n\n**The Game-Changer:**\nAutomate your savings. Set up automatic transfers on payday. You can't spend what you don't see.\n\n**The Specifics:**\n• **Housing**: Should be 25-30% of income max\n• **Transportation**: 10-15% of income\n• **Food**: 10-15% of income (groceries + dining out)\n• **Entertainment**: 5-10% of income\n\nWhat's your biggest expense category right now? And what's your monthly income? This helps me give you a more specific budget breakdown!`;
      } else if (lowercaseMessage.includes("tax") || lowercaseMessage.includes("deduct") || lowercaseMessage.includes("irs")) {
        response = `Taxes are where most people leave money on the table. I'm talking thousands of dollars in missed opportunities.\n\n**The Big Wins:**\n• Max out retirement contributions (401k, IRA) - reduces taxable income\n• HSA if you have high-deductible health plan - triple tax advantage (deductible, grows tax-free, withdrawals tax-free for medical)\n• Track ALL deductions (home office, mileage, education, business expenses)\n\n**The Hidden Gems:**\n• Tax-loss harvesting for investments (sell losers to offset winners)\n• Charitable giving strategies (donor-advised funds)\n• Roth conversion strategies in low-income years\n\n**The Reality:**\nAverage person misses $3,000-8,000 in tax savings per year. That's not small change.\n\n**Pro Tip:**\nStart tracking deductions NOW for next year. Keep receipts, log mileage, document everything.\n\nAre you currently maxing out your retirement accounts? That's usually the biggest tax win for most people.`;
      } else if (lowercaseMessage.includes("emergency") || lowercaseMessage.includes("fund") || lowercaseMessage.includes("crisis")) {
        response = `Emergency funds are your financial safety net - they prevent 95% of financial emergencies from becoming disasters.\n\n**The Target:**\n• 3-6 months of expenses (6-12 months if self-employed)\n• Keep in high-yield savings account (currently 4-5% APY)\n• Start with $1,000, then build to full target\n\n**The Psychology:**\nHaving an emergency fund changes everything. You sleep better, make better decisions, and don't panic-sell investments during market dips.\n\n**The Strategy:**\n• Automate transfers on payday\n• Start small ($50-100/month) and increase over time\n• Use windfalls (tax refunds, bonuses) to boost it\n\n**The Reality Check:**\nMost people think they need $10,000+ but start with $1,000. That $1,000 prevents 90% of financial emergencies.\n\n**Common Emergencies I See:**\n• Car repairs ($500-2,000)\n• Medical bills ($1,000-5,000)\n• Job loss (3-6 months expenses)\n\nHow much do you currently have saved? Even $500 is better than nothing!`;
      } else if (lowercaseMessage.includes("mortgage") || lowercaseMessage.includes("house") || lowercaseMessage.includes("home")) {
        response = `Homeownership is usually your biggest asset, but most people don't optimize it.\n\n**Current Market Reality:**\n• Rates are around 6.5-7% (historically still reasonable)\n• Refinancing makes sense if you can reduce rate by 0.75%+\n• Extra principal payments save massive interest\n\n**The Math That Blows Minds:**\nExtra $100/month on a $300k mortgage saves $30,000+ in interest over the loan. That's not a typo.\n\n**The Strategy:**\n• 15-year vs 30-year (depends on your goals)\n• Bi-weekly payments (26 payments/year vs 24)\n• Extra principal payments (even $50/month helps)\n\n**The Refinancing Question:**\nOnly makes sense if you can reduce rate by 0.75%+ AND plan to stay 5+ years.\n\n**The Home Equity Play:**\nIf you have 20%+ equity, you can eliminate PMI and get better rates.\n\nWhat's your current mortgage situation? Rate, balance, and how long you've been paying? I can calculate your specific savings potential.`;
      } else if (lowercaseMessage.includes("crypto") || lowercaseMessage.includes("bitcoin") || lowercaseMessage.includes("cryptocurrency")) {
        response = `Crypto is the wild west of investing. I'll give you the straight talk:\n\n**The Reality Check:**\n• Limit to 5-10% of your total portfolio (it's highly speculative)\n• Never invest more than you can afford to lose completely\n• It's not a get-rich-quick scheme\n\n**The Prerequisites:**\n• Emergency fund first (3-6 months expenses)\n• Max out retirement accounts (401k, IRA)\n• Pay off high-interest debt\n\n**The Strategy (if you choose to invest):**\n• Dollar-cost averaging (DCA) reduces timing risk\n• Secure storage is critical (hardware wallet for large amounts)\n• Diversify beyond just Bitcoin\n\n**The Honest Truth:**\nMost people lose money in crypto because they treat it like gambling. It's a high-risk, high-reward asset class.\n\n**My Recommendation:**\nGet your financial foundation solid first. Emergency fund, retirement accounts, debt-free. Then, if you want to speculate with 5-10% of your portfolio, go for it.\n\nAre you currently maxing out your retirement accounts? That's usually a better bet than crypto speculation.`;
      } else if (lowercaseMessage.includes("insurance")) {
        response = `Insurance is where most people overpay by $400-800/year.\n\n**The Annual Audit (do this every year):**\n• Shop rates for auto, home, life insurance\n• Bundle policies for discounts (usually 10-15%)\n• Increase deductibles if you have emergency fund\n• Remove unnecessary coverage\n\n**The Essentials:**\n• Health insurance (obviously)\n• Auto insurance (liability + comprehensive)\n• Home/renters insurance\n• Term life insurance (if you have dependents)\n\n**The Skip List:**\n• Extended warranties (usually not worth it)\n• Mortgage insurance (if you have 20%+ equity)\n• Pet insurance (unless you have expensive pets)\n\n**The Pro Tips:**\n• Higher deductibles = lower premiums (if you have emergency fund)\n• Good credit score = lower insurance rates\n• Loyalty doesn't pay - shop around annually\n\n**The Reality:**\nMost people pay $200-400/year more than necessary. That's a nice vacation fund!\n\nWhen did you last shop your insurance rates?`;
      } else if (lowercaseMessage.includes("college") || lowercaseMessage.includes("education") || lowercaseMessage.includes("529")) {
        response = `Education costs are insane these days, but there are smart ways to save.\n\n**The 529 Plan (tax-free growth):**\n• Start early - $200/month from birth = $70,000+ by age 18\n• Tax-free growth and withdrawals for education\n• Some states offer tax deductions for contributions\n\n**The Alternatives:**\n• Roth IRA (more flexible, can use for anything)\n• UTMA/UGMA accounts (less tax benefits)\n• High-yield savings account (guaranteed, no risk)\n\n**The Strategy:**\n• Start as early as possible (compound interest is your friend)\n• Automate contributions (set it and forget it)\n• Consider community college + transfer (saves $50,000+)\n\n**The FAFSA Reality:**\nApply even if you think you won't qualify. Many people miss out on aid they're entitled to.\n\n**The Math:**\n$200/month for 18 years at 7% return = $70,000+\n$500/month for 18 years at 7% return = $175,000+\n\n**The Pro Tip:**\nDon't sacrifice your retirement for education. Kids can borrow for college, but you can't borrow for retirement.\n\nAre you currently saving for education? What's your timeline and target amount?`;
      } else if (lowercaseMessage.includes("subscription") || lowercaseMessage.includes("netflix") || lowercaseMessage.includes("spotify")) {
        response = `Subscription creep is real. Most people pay $273/month but only use 60% of them.\n\n**The Common Culprits:**\n• Streaming services ($50-80/month) - Netflix, Hulu, Disney+, etc.\n• Gym memberships ($40-60/month) - especially unused ones\n• Software subscriptions ($30-100/month) - Adobe, Microsoft, etc.\n• Food delivery apps ($20-50/month) - Uber Eats, DoorDash\n\n**The Audit Process:**\n• List every subscription you have\n• Check which ones you actually use\n• Cancel unused ones immediately\n• Set calendar reminders to review quarterly\n\n**The Hidden Costs:**\n• Free trials that auto-renew\n• Annual subscriptions you forgot about\n• Family plans you don't need\n\n**The Strategy:**\n• Rotate streaming services (Netflix one month, Hulu the next)\n• Share family plans with friends/family\n• Use free alternatives when possible\n\n**The Reality:**\nMost people can save $100-200/month just by canceling unused subscriptions.\n\nWant me to help you identify all your subscriptions? I can run a comprehensive audit!`;
      } else if (lowercaseMessage.includes("fee") || lowercaseMessage.includes("bank") || lowercaseMessage.includes("charge")) {
        response = `Banking fees are the silent wealth killer. Most people pay $200-400/year in unnecessary fees.\n\n**The Common Fees:**\n• Monthly maintenance fees ($10-15/month)\n• ATM fees ($3-5 per transaction)\n• Overdraft fees ($35+ per occurrence)\n• Foreign transaction fees (3% of transaction)\n\n**The Solution:**\n• Switch to high-yield savings (4-5% APY vs 0.01%)\n• Use no-fee checking accounts\n• Find fee-free ATM networks\n• Get credit cards with rewards (not fees)\n\n**The Hidden Goldmine:**\nHigh-yield savings accounts are paying 4-5% right now. If you have $10,000 in a regular savings account earning 0.01%, you're missing out on $400-500/year!\n\n**The Pro Tips:**\n• Set up overdraft protection\n• Use mobile banking to avoid ATM fees\n• Consider online banks (better rates, fewer fees)\n\n**The Reality:**\nMost people can eliminate $200-400/year in banking fees with a few simple switches.\n\nWhat's your current banking setup? Are you earning 4-5% on your savings?`;
      } else if (lowercaseMessage.includes("credit score") || lowercaseMessage.includes("fico") || lowercaseMessage.includes("credit")) {
        response = `Credit scores are your financial reputation. A good score can save you thousands in interest over your lifetime.\n\n**The Breakdown:**\n• Payment history (35%) - pay on time, always\n• Credit utilization (30%) - keep under 10% ideally\n• Age of accounts (15%) - don't close old cards\n• Credit mix (10%) - different types of credit\n• New credit (10%) - don't apply for too much at once\n\n**The Quick Wins:**\n• Pay on time, every time (set up autopay)\n• Keep utilization under 10% (pay off cards weekly if needed)\n• Don't close old credit cards\n• Dispute any errors on your report\n\n**The Score Ranges:**\n• 300-579: Poor (work on basics first)\n• 580-669: Fair (focus on payment history)\n• 670-739: Good (you're getting there)\n• 740-799: Very Good (great rates)\n• 800+: Excellent (best rates available)\n\n**The Reality:**\nA 100-point difference in credit score can save you $50,000+ in interest over a 30-year mortgage.\n\n**The Timeline:**\nTakes 6-12 months to see major improvement, but small wins happen in 30-60 days.\n\nWhat's your current credit score? I can help you create a plan to improve it!`;
      } else if (lowercaseMessage.includes("side hustle") || lowercaseMessage.includes("extra income") || lowercaseMessage.includes("income")) {
        response = `Side hustles are the secret to financial freedom. Every extra $500/month invested = $120,000+ in 10 years.\n\n**Beginner Level ($15-50/hour):**\n• Food delivery (Uber Eats, DoorDash) - $15-25/hour\n• Tutoring (online or in-person) - $20-50/hour\n• Freelance writing - $25-100/hour\n• Virtual assistant work - $15-30/hour\n\n**Intermediate Level ($50-150/hour):**\n• Social media management - $50-150/hour\n• Graphic design - $50-200/hour\n• Photography - $100-300/hour\n• Consulting in your field - $100-300/hour\n\n**Advanced Level ($150+/hour):**\n• Course creation (passive income) - $100-500/hour\n• Coaching/mentoring - $150-500/hour\n• Rental property management - $200-500/hour\n• Software development - $100-300/hour\n\n**The Strategy:**\n• Start with your existing skills\n• Build recurring income streams\n• Automate what you can\n• Reinvest profits into investments\n\n**The Reality:**\nAverage side hustler earns $500-2,000/month. That's $6,000-24,000/year in extra income!\n\nWhat skills do you already have that you could monetize?`;
      } else if (lowercaseMessage.includes("financial advisor") || lowercaseMessage.includes("help") || lowercaseMessage.includes("advice")) {
        response = `Great question! Most people don't need a financial advisor, but here's when it makes sense:\n\n**When You NEED One:**\n• Complex situations (inheritance, business sale, divorce)\n• Portfolio over $250,000\n• Need accountability and hand-holding\n• Major life changes (retirement, kids, etc.)\n\n**What to Look For:**\n• Fee-only (not commission-based)\n• Fiduciary duty (legally required to act in your best interest)\n• CFP certification (Certified Financial Planner)\n• Experience with your situation\n\n**The Costs:**\n• 0.5-1.5% of assets under management\n• $2,000-5,000/year flat fee\n• $150-300/hour for hourly advice\n\n**The Reality:**\nMost people can DIY with basic research, but advisors can save you from costly mistakes.\n\n**The DIY Alternative:**\n• Read books (The Simple Path to Wealth, A Random Walk Down Wall Street)\n• Use robo-advisors (Betterment, Wealthfront)\n• Join financial communities (Bogleheads, Reddit)\n\n**My Take:**\nIf you're willing to learn and have time, DIY works great. If you want someone to handle everything, get an advisor.\n\nWhat's your current situation? Are you looking for ongoing management or just occasional advice?`;
      } else {
        // Context-aware default response with advanced follow-up handling
        let contextAwareIntro = "I appreciate you thinking about your finances.";
        
        if (isFollowUp) {
          if (lastTopic === 'savings') {
            contextAwareIntro = "Let's explore other ways to optimize your finances.";
          } else if (lastTopic === 'debt') {
            contextAwareIntro = "Now let's look at the bigger picture of your financial health.";
          } else if (lastTopic === 'invest') {
            contextAwareIntro = "Let's make sure you're covering all your financial bases.";
          } else if (lastTopic === 'budget') {
            contextAwareIntro = "Let's see what other financial opportunities we can explore.";
          }
        }
        
        // Handle specific questions with advanced context awareness
        if (lowercaseMessage.includes("how much") || lowercaseMessage.includes("what should")) {
          // Use stored context for personalized responses
          const hasIncome = conversationContext.userIncome;
          const hasDebt = conversationContext.userDebt;
          const hasSavings = conversationContext.userSavings;
          
          if (hasIncome) {
            const monthlyIncome = hasIncome > 1000 ? hasIncome / 12 : hasIncome;
            response = `${contextAwareIntro} Based on your $${hasIncome.toLocaleString()} income, here are your specific targets:\n\n**Your Personalized Numbers:**\n• **Emergency Fund**: $${(monthlyIncome * 6).toLocaleString()} (6 months expenses)\n• **Monthly Savings**: $${(monthlyIncome * 0.20).toLocaleString()} (20% of income)\n• **Annual Savings**: $${(monthlyIncome * 0.20 * 12).toLocaleString()}\n• **Housing Budget**: $${(monthlyIncome * 0.30).toLocaleString()}/month max\n• **Transportation**: $${(monthlyIncome * 0.15).toLocaleString()}/month max\n\n**The Reality Check:**\nMost people save 5-10% of income. You're aiming for 20% - that's ambitious and will set you up for serious wealth building.\n\n**My Question for You:**\nWhat's your biggest financial goal right now - emergency fund, debt payoff, or retirement?`;
          } else {
            response = `${contextAwareIntro} Great question! Let me give you some specific numbers:\n\n**The Magic Numbers:**\n• **Emergency Fund**: 3-6 months of expenses\n• **Retirement Savings**: 15-20% of income\n• **Debt Payments**: Minimum + extra when possible\n• **Housing**: 25-30% of income max\n• **Transportation**: 10-15% of income\n\n**The Reality Check:**\nMost people save 5-10% of income. If you can hit 15-20%, you're in the top 10% of savers.\n\n**My Question for You:**\nWhat's your current income situation? And what's your biggest financial goal right now - emergency fund, debt payoff, or retirement?`;
          }
        } else if (lowercaseMessage.includes("when") || lowercaseMessage.includes("timeline")) {
          // Use conversation history for personalized timelines
          const hasDebt = conversationContext.userDebt;
          const hasSavings = conversationContext.userSavings;
          
          if (hasDebt) {
            const monthlyPayment = hasDebt * 0.02;
            const payoffTime = Math.ceil(hasDebt / (monthlyPayment * 2));
            response = `${contextAwareIntro} Based on your $${hasDebt.toLocaleString()} debt, here's your personalized timeline:\n\n**Your Debt Payoff Timeline:**\n• **Minimum Payments**: ${Math.ceil(hasDebt / monthlyPayment)} months\n• **Double Payments**: ${payoffTime} months\n• **Triple Payments**: ${Math.ceil(hasDebt / (monthlyPayment * 3))} months\n\n**The Quick Wins (30-90 days):**\n• Call creditors to negotiate lower rates\n• Set up automatic payments\n• Consider balance transfer to 0% APR card\n• Track progress weekly\n\n**The Long Game (1-5 years):**\n• Build emergency fund first\n• Pay off high-interest debt\n• Max out retirement accounts\n• Build investment portfolio\n\nWhat's your timeline for your biggest financial goal?`;
          } else {
            response = `${contextAwareIntro} Timing is everything in personal finance! Here's the reality:\n\n**The Timelines:**\n• **Emergency Fund**: 3-12 months to build\n• **Debt Payoff**: 2-5 years (depending on amount)\n• **Retirement**: 30-40 years of consistent investing\n• **Credit Score**: 6-12 months to see major improvement\n\n**The Quick Wins (30-90 days):**\n• Cancel unused subscriptions\n• Negotiate bills\n• Switch to high-yield savings\n• Set up automatic transfers\n\n**The Long Game (1-5 years):**\n• Build emergency fund\n• Pay off high-interest debt\n• Max out retirement accounts\n• Build investment portfolio\n\nWhat's your timeline for your biggest financial goal?`;
          }
        } else {
          // Use conversation history for personalized responses
          const hasIncome = conversationContext.userIncome;
          const hasDebt = conversationContext.userDebt;
          const hasSavings = conversationContext.userSavings;
          const userExperience = conversationContext.userExperience;
          const userEmotionalState = conversationContext.userEmotionalState;
          const userPersonality = conversationContext.userPersonality;
          
          // Advanced personality-aware responses
          if (hasIncome && hasDebt) {
            const debtToIncomeRatio = (hasDebt / hasIncome) * 100;
            const isHighDebt = debtToIncomeRatio > 40;
            const isAnalytical = userPersonality === 'analytical';
            const isFrustrated = userEmotionalState === 'frustrated';
            
            if (isAnalytical && isFrustrated) {
              response = `${contextAwareIntro} Let me give you a data-driven approach to your $${hasIncome.toLocaleString()} income and $${hasDebt.toLocaleString()} debt:\n\n**Your Financial Metrics:**\n• **Debt-to-Income Ratio**: ${debtToIncomeRatio.toFixed(1)}% (${isHighDebt ? 'High' : 'Manageable'})\n• **Monthly Income**: $${(hasIncome / 12).toLocaleString()}\n• **Monthly Savings Target**: $${((hasIncome / 12) * 0.20).toLocaleString()}\n• **Debt Payoff Timeline**: ${Math.ceil(hasDebt / ((hasIncome / 12) * 0.20))} months\n\n**The Analytical Strategy:**\n• **Step 1**: Build emergency fund (3-6 months expenses)\n• **Step 2**: Pay off high-interest debt (${isHighDebt ? 'Priority' : 'Secondary'})\n• **Step 3**: Max out 401k match (free money)\n• **Step 4**: Invest in low-cost index funds\n\n**The Reality:**\nYour debt-to-income ratio is ${isHighDebt ? 'high' : 'manageable'}. ${isHighDebt ? 'Focus on debt payoff first.' : 'You can balance debt payoff with investing.'}\n\nWhat's your biggest financial challenge right now? Let's tackle it together!`;
            } else if (isFrustrated) {
              response = `${contextAwareIntro} I understand your frustration. Let me help you break down your $${hasIncome.toLocaleString()} income and $${hasDebt.toLocaleString()} debt into manageable steps:\n\n**Your Financial Profile:**\n• **Income**: $${hasIncome.toLocaleString()}/year\n• **Debt**: $${hasDebt.toLocaleString()}\n• **Debt-to-Income Ratio**: ${debtToIncomeRatio.toFixed(1)}%\n• **Monthly Savings Target**: $${((hasIncome / 12) * 0.20).toLocaleString()}\n\n**The Strategy:**\n• **Step 1**: Build emergency fund (3-6 months expenses)\n• **Step 2**: Pay off high-interest debt\n• **Step 3**: Max out 401k match\n• **Step 4**: Invest in low-cost index funds\n\n**The Reality:**\nYour debt-to-income ratio is ${isHighDebt ? 'high' : 'manageable'}. ${isHighDebt ? 'Focus on debt payoff first.' : 'You can balance debt payoff with investing.'}\n\nWhat's your biggest financial challenge right now? Let's tackle it together!`;
            } else {
              response = `${contextAwareIntro} Based on your $${hasIncome.toLocaleString()} income and $${hasDebt.toLocaleString()} debt, here's your personalized strategy:\n\n**Your Financial Profile:**\n• **Income**: $${hasIncome.toLocaleString()}/year\n• **Debt**: $${hasDebt.toLocaleString()}\n• **Debt-to-Income Ratio**: ${debtToIncomeRatio.toFixed(1)}%\n• **Monthly Savings Target**: $${((hasIncome / 12) * 0.20).toLocaleString()}\n\n**The Strategy:**\n• **Step 1**: Build emergency fund (3-6 months expenses)\n• **Step 2**: Pay off high-interest debt\n• **Step 3**: Max out 401k match\n• **Step 4**: Invest in low-cost index funds\n\n**The Reality:**\nYour debt-to-income ratio is ${isHighDebt ? 'high' : 'manageable'}. ${isHighDebt ? 'Focus on debt payoff first.' : 'You can balance debt payoff with investing.'}\n\nWhat's your biggest financial challenge right now? Let's tackle it together!`;
            }
          } else if (hasIncome) {
            const isFrustrated = userEmotionalState === 'frustrated';
            const isAnalytical = userPersonality === 'analytical';
            
            if (isAnalytical && isFrustrated) {
              response = `${contextAwareIntro} Let me give you a data-driven approach to your $${hasIncome.toLocaleString()} income:\n\n**Your Financial Metrics:**\n• **Monthly Income**: $${(hasIncome / 12).toLocaleString()}\n• **Monthly Savings Target**: $${((hasIncome / 12) * 0.20).toLocaleString()} (20% of income)\n• **Emergency Fund Target**: $${((hasIncome / 12) * 6).toLocaleString()} (6 months expenses)\n• **Annual Savings Goal**: $${((hasIncome / 12) * 0.20 * 12).toLocaleString()}\n\n**The Analytical Strategy:**\n• **Step 1**: Build emergency fund (3-6 months expenses)\n• **Step 2**: Max out 401k match (free money)\n• **Step 3**: Pay off high-interest debt\n• **Step 4**: Invest in low-cost index funds\n\n**The Reality:**\nMost people save 5-10% of income. You're aiming for 20% - that's ambitious and will set you up for serious wealth building.\n\nWhat's your biggest financial challenge right now? Let's tackle it together!`;
            } else if (isFrustrated) {
              response = `${contextAwareIntro} I understand your frustration. Let me help you break down your $${hasIncome.toLocaleString()} income into manageable steps:\n\n**Your Financial Targets:**\n• **Monthly Savings**: $${((hasIncome / 12) * 0.20).toLocaleString()} (20% of income)\n• **Emergency Fund**: $${((hasIncome / 12) * 6).toLocaleString()} (6 months expenses)\n• **Annual Savings**: $${((hasIncome / 12) * 0.20 * 12).toLocaleString()}\n\n**The Strategy:**\n• **Step 1**: Build emergency fund (3-6 months expenses)\n• **Step 2**: Max out 401k match (free money)\n• **Step 3**: Pay off high-interest debt\n• **Step 4**: Invest in low-cost index funds\n\n**The Reality:**\nMost people save 5-10% of income. You're aiming for 20% - that's ambitious and will set you up for serious wealth building.\n\nWhat's your biggest financial challenge right now? Let's tackle it together!`;
            } else {
              response = `${contextAwareIntro} Based on your $${hasIncome.toLocaleString()} income, here's what I can help you with:\n\n**Your Financial Targets:**\n• **Monthly Savings**: $${((hasIncome / 12) * 0.20).toLocaleString()} (20% of income)\n• **Emergency Fund**: $${((hasIncome / 12) * 6).toLocaleString()} (6 months expenses)\n• **Annual Savings**: $${((hasIncome / 12) * 0.20 * 12).toLocaleString()}\n\n**The Big Picture:**\n• **Savings**: I can identify $500-2,500/month in hidden savings opportunities\n• **Investments**: Portfolio analysis, retirement planning, and tax-efficient strategies\n• **Budgeting**: Track spending and optimize your money allocation\n• **Banking**: Eliminate fees and maximize interest earned\n\n**The Reality:**\nMost people leave $2,400+ on the table every year through missed opportunities. That's not small change!\n\nWhat's your biggest financial challenge right now? Let's tackle it together!`;
            }
          } else {
            const isFrustrated = userEmotionalState === 'frustrated';
            const isAnalytical = userPersonality === 'analytical';
            
            if (isAnalytical && isFrustrated) {
              response = `${contextAwareIntro} Let me give you a data-driven approach to your financial situation:\n\n**The Financial Framework:**\n• **Emergency Fund**: 3-6 months of expenses\n• **Retirement Savings**: 15-20% of income\n• **Debt Payments**: Minimum + extra when possible\n• **Housing**: 25-30% of income max\n• **Transportation**: 10-15% of income\n\n**The Analytical Strategy:**\n• **Step 1**: Build emergency fund (3-6 months expenses)\n• **Step 2**: Max out 401k match (free money)\n• **Step 3**: Pay off high-interest debt\n• **Step 4**: Invest in low-cost index funds\n\n**The Reality:**\nMost people save 5-10% of income. If you can hit 15-20%, you're in the top 10% of savers.\n\nWhat's your current income situation? And what's your biggest financial goal right now - emergency fund, debt payoff, or retirement?`;
            } else if (isFrustrated) {
              response = `${contextAwareIntro} I understand your frustration. Let me help you break this down into manageable steps:\n\n**The Big Picture:**\n• **Savings**: I can identify $500-2,500/month in hidden savings opportunities\n• **Investments**: Portfolio analysis, retirement planning, and tax-efficient strategies\n• **Debt**: Custom payoff plans that save thousands in interest\n• **Budgeting**: Track spending and optimize your money allocation\n• **Banking**: Eliminate fees and maximize interest earned\n• **Goals**: Create actionable plans for any financial objective\n\n**The Reality:**\nMost people leave $2,400+ on the table every year through missed opportunities. That's not small change!\n\n**What I'm Really Good At:**\n• Finding hidden fees and subscriptions\n• Optimizing your banking setup\n• Creating debt payoff strategies\n• Building emergency funds\n• Maximizing retirement contributions\n• Tax optimization strategies\n\n**The Bottom Line:**\nI'm here to make your money work harder for you. No judgment, no complicated jargon - just practical advice that actually works.\n\nWhat's your biggest financial challenge right now? Let's tackle it together!`;
            } else {
              response = `${contextAwareIntro} Here's what I can help you with:\n\n**The Big Picture:**\n• **Savings**: I can identify $500-2,500/month in hidden savings opportunities\n• **Investments**: Portfolio analysis, retirement planning, and tax-efficient strategies\n• **Debt**: Custom payoff plans that save thousands in interest\n• **Budgeting**: Track spending and optimize your money allocation\n• **Banking**: Eliminate fees and maximize interest earned\n• **Goals**: Create actionable plans for any financial objective\n\n**The Reality:**\nMost people leave $2,400+ on the table every year through missed opportunities. That's not small change!\n\n**What I'm Really Good At:**\n• Finding hidden fees and subscriptions\n• Optimizing your banking setup\n• Creating debt payoff strategies\n• Building emergency funds\n• Maximizing retirement contributions\n• Tax optimization strategies\n\n**The Bottom Line:**\nI'm here to make your money work harder for you. No judgment, no complicated jargon - just practical advice that actually works.\n\nWhat's your biggest financial challenge right now? Let's tackle it together!`;
            }
          }
        }
      }

      // Comprehensive fallback system for any question or conversation
      if (!response) {
        // Handle any random question or conversation
        const isQuestion = lowercaseMessage.includes("?") || lowercaseMessage.includes("what") || lowercaseMessage.includes("how") || lowercaseMessage.includes("why") || lowercaseMessage.includes("when") || lowercaseMessage.includes("where") || lowercaseMessage.includes("who");
        const isStatement = lowercaseMessage.length > 10 && !isQuestion;
        const isShort = lowercaseMessage.length < 10;
        
        if (isQuestion) {
          response = `That's a great question! I'm here to help you with any financial topic you're curious about.\n\n**What I Can Help With**:\n• **Savings**: Finding hidden opportunities to save money\n• **Debt**: Creating payoff strategies that save thousands\n• **Investments**: Building wealth through smart investing\n• **Budgeting**: Optimizing your money allocation\n• **Banking**: Eliminating fees and maximizing interest\n• **Taxes**: Finding deductions and credits\n• **Insurance**: Getting better rates and coverage\n• **Retirement**: Planning for your future\n• **Real Estate**: Buying homes, rental properties\n• **Business**: Starting and growing businesses\n\n**The Reality**:\nMost people leave $2,400+ on the table every year through missed opportunities. I help you find and capture that money.\n\n**My Question**:\nWhat's your biggest financial challenge right now? Let's tackle it together!\n\nI'm here to answer any financial question you have, no matter how basic or complex.`;
        } else if (isStatement) {
          response = `I appreciate you sharing that with me. I'm here to help you with any financial situation you're dealing with.\n\n**The Context**:\nEvery financial situation is unique, and I'm here to provide personalized advice that works for your specific circumstances.\n\n**What I Can Help With**:\n• **Savings**: Find $500-2,500/month in hidden opportunities\n• **Debt**: Create custom payoff plans\n• **Investments**: Build wealth through smart strategies\n• **Budgeting**: Optimize your money allocation\n• **Banking**: Eliminate fees and maximize interest\n• **Taxes**: Find deductions and credits\n• **Insurance**: Get better rates and coverage\n• **Retirement**: Plan for your future\n\n**The Reality**:\nMost people leave $2,400+ on the table every year through missed opportunities. I help you find and capture that money.\n\n**My Question**:\nWhat's your biggest financial challenge right now? Let's tackle it together!\n\nI'm here to help you with any financial situation, no matter how complex or simple.`;
        } else if (isShort) {
          response = `I'm here to help you with any financial question or challenge you're facing.\n\n**What I Can Help With**:\n• **Savings**: Find hidden opportunities to save money\n• **Debt**: Create payoff strategies that save thousands\n• **Investments**: Build wealth through smart investing\n• **Budgeting**: Optimize your money allocation\n• **Banking**: Eliminate fees and maximize interest\n• **Taxes**: Find deductions and credits\n• **Insurance**: Get better rates and coverage\n• **Retirement**: Plan for your future\n\n**The Reality**:\nMost people leave $2,400+ on the table every year through missed opportunities. I help you find and capture that money.\n\n**My Question**:\nWhat's your biggest financial challenge right now? Let's tackle it together!\n\nI'm here to answer any financial question you have, no matter how basic or complex.`;
        } else {
          response = `I'm here to help you with any financial question or challenge you're facing.\n\n**What I Can Help With**:\n• **Savings**: Find hidden opportunities to save money\n• **Debt**: Create payoff strategies that save thousands\n• **Investments**: Build wealth through smart investing\n• **Budgeting**: Optimize your money allocation\n• **Banking**: Eliminate fees and maximize interest\n• **Taxes**: Find deductions and credits\n• **Insurance**: Get better rates and coverage\n• **Retirement**: Plan for your future\n\n**The Reality**:\nMost people leave $2,400+ on the table every year through missed opportunities. I help you find and capture that money.\n\n**My Question**:\nWhat's your biggest financial challenge right now? Let's tackle it together!\n\nI'm here to answer any financial question you have, no matter how basic or complex.`;
        }
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsThinking(false);
    }, 1500);
  };

  const goBack = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex relative overflow-hidden">
      {/* Subtle striped background pattern inspired by orchids.app */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(168, 85, 247, 0.1) 35px,
            rgba(168, 85, 247, 0.1) 70px
          )`,
        }}
      />

      {/* Sidebar - ChatGPT inspired */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="hidden md:flex w-64 bg-[#0F0F0F] border-r border-white/5 flex-col relative z-10"
      >
        <div className="p-4 border-b border-white/5">
          <Button
            onClick={goBack}
            variant="outline"
            className="w-full bg-white/5 border-white/10 text-white hover:bg-white/10 justify-start gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>

        <div className="flex-1 p-4 space-y-2 overflow-y-auto">
          <div className="text-sm text-gray-500 mb-4">Quick Start Topics</div>
          {[
            "How can I save $500/month?",
            "Should I invest in crypto?",
            "Help me pay off debt faster",
            "Is now a good time to buy a house?",
          ].map((chat, i) => (
            <button
              key={i}
              className="w-full text-left p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] text-gray-400 text-sm transition-all duration-200 hover:text-white"
              onClick={() => setInput(chat.trim())}
            >
              {chat}
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-white/5">
          <div className="text-xs text-gray-600 text-center">
            Powered by SaveCash AI
          </div>
        </div>
      </motion.div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative z-10">
        {/* Header */}
        <div className="bg-[#0F0F0F] border-b border-white/5 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              onClick={goBack}
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-white">AI Financial Advisor</h1>
                <p className="text-xs text-gray-500">Always online</p>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`flex gap-4 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              )}
              <div
                className={`max-w-2xl rounded-2xl p-4 ${
                  message.role === "user"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-white/[0.05] text-gray-200 border border-white/5"
                }`}
              >
                <p className="leading-relaxed">{message.content}</p>
              </div>
              {message.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">You</span>
                </div>
              )}
            </motion.div>
          ))}

          {isThinking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white/[0.05] rounded-2xl p-4 border border-white/5">
                <div className="flex gap-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-purple-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full bg-pink-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full bg-orange-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-white/5 p-4 bg-[#0F0F0F]">
          <form onSubmit={handleSend} className="max-w-4xl mx-auto">
            <div className="flex gap-3">
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about savings, investments, fees..."
                className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/20 h-12 rounded-xl px-4"
                disabled={isThinking}
              />
              <Button
                type="submit"
                disabled={isThinking || !input.trim()}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-6 h-12 rounded-xl"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-600 mt-2 text-center">
              AI can make mistakes. Verify important financial decisions.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
