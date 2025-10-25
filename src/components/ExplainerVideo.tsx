import { motion } from "motion/react";
import { useState } from "react";
import { Play, Pause } from "lucide-react";

export function ExplainerVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Connect Your Accounts",
      icon: "🔗",
      description: "Securely link your bank and subscriptions"
    },
    {
      title: "AI Analyzes Everything",
      icon: "🤖",
      description: "Our AI scans for hidden fees and waste"
    },
    {
      title: "Automatic Savings",
      icon: "💰",
      description: "Watch your money grow effortlessly"
    }
  ];

  const handlePlay = () => {
    setIsPlaying(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= steps.length) {
        step = 0;
      }
      setCurrentStep(step);
    }, 2500);

    setTimeout(() => {
      clearInterval(interval);
      setIsPlaying(false);
      setCurrentStep(0);
    }, 7500);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative aspect-video bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm"
        style={{
          boxShadow: "0 30px 80px -20px rgba(168, 85, 247, 0.4)",
        }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-12">
          {!isPlaying ? (
            <motion.button
              onClick={handlePlay}
              className="group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Play button */}
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                <Play className="w-10 h-10 text-white ml-1" fill="white" />
                
                {/* Pulsing rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-purple-400"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-pink-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
              </div>
              
              <p className="mt-6 text-white text-lg">Watch how it works</p>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              {/* Animated step indicator */}
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                className="mb-6"
              >
                <motion.div
                  className="text-8xl mb-6"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  {steps[currentStep].icon}
                </motion.div>
                <h3 className="text-4xl text-white mb-4">{steps[currentStep].title}</h3>
                <p className="text-xl text-gray-400">{steps[currentStep].description}</p>
              </motion.div>

              {/* Progress bar */}
              <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 7.5, ease: "linear" }}
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent" />
      </motion.div>

      {/* Video caption */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-6 text-gray-400"
      >
        See how SaveCash works in under 30 seconds
      </motion.p>
    </div>
  );
}
