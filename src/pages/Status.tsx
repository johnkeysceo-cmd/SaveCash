import React from "react";
import { motion } from "motion/react";
import { Activity, ArrowLeft, ExternalLink, CheckCircle, AlertTriangle, Clock, Zap } from "lucide-react";
import { FloatingBlobs } from "../components/FloatingBlobs";

export default function Status() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Floating Blobs Background */}
      <FloatingBlobs />
      
      {/* Header */}
      <div className="relative z-10 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <a 
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="relative">
                <Activity className="w-12 h-12 text-green-400" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-green-400/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white">Status</h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6"
            >
              Transparency is strength.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              SaveCash's live status page provides full visibility into system uptime, service health, and performance.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-green-400 font-semibold"
            >
              Reliability you can verify.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* Current Status */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">System Status</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor SaveCash system uptime and operational health in real time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                service: "API Services",
                status: "Operational",
                uptime: "99.99%",
                responseTime: "45ms",
                color: "from-green-500 to-emerald-500",
                icon: CheckCircle
              },
              {
                service: "Web Application",
                status: "Operational",
                uptime: "99.98%",
                responseTime: "120ms",
                color: "from-green-500 to-emerald-500",
                icon: CheckCircle
              },
              {
                service: "Database",
                status: "Operational",
                uptime: "99.99%",
                responseTime: "12ms",
                color: "from-green-500 to-emerald-500",
                icon: CheckCircle
              },
              {
                service: "AI Engine",
                status: "Operational",
                uptime: "99.97%",
                responseTime: "180ms",
                color: "from-green-500 to-emerald-500",
                icon: CheckCircle
              }
            ].map((service, index) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-400 font-semibold">{service.status}</div>
                      <div className="text-xs text-gray-500">All systems normal</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{service.service}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Uptime (30d)</span>
                      <span className="text-white font-semibold">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Response Time</span>
                      <span className="text-white font-semibold">{service.responseTime}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Performance Metrics */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Performance Metrics</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We maintain 99.99% uptime with real-time monitoring and instant public updates for full accountability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl p-8 border border-green-800/50">
                <h3 className="text-2xl font-bold text-white mb-6">Uptime Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Last 24 hours</span>
                    <span className="text-green-400 font-semibold">100%</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Last 7 days</span>
                    <span className="text-green-400 font-semibold">99.99%</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Last 30 days</span>
                    <span className="text-green-400 font-semibold">99.99%</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Last 90 days</span>
                    <span className="text-green-400 font-semibold">99.98%</span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg px-4">
                    <span className="text-white font-bold text-lg">All-time average</span>
                    <span className="text-green-400 font-bold text-xl">99.99%</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Response Times</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">API Endpoints</span>
                    <span className="text-blue-400 font-semibold">45ms avg</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Web Application</span>
                    <span className="text-blue-400 font-semibold">120ms avg</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Database Queries</span>
                    <span className="text-blue-400 font-semibold">12ms avg</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">AI Processing</span>
                    <span className="text-blue-400 font-semibold">180ms avg</span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg px-4">
                    <span className="text-white font-bold text-lg">Global average</span>
                    <span className="text-blue-400 font-bold text-xl">89ms</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Recent Incidents */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Recent Incidents</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Full transparency on any service disruptions and their resolution.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                date: "January 15, 2025",
                status: "Resolved",
                service: "API Services",
                description: "Brief performance degradation due to increased load",
                duration: "12 minutes",
                impact: "Minor",
                color: "from-yellow-500 to-orange-500"
              },
              {
                date: "January 8, 2025",
                status: "Resolved",
                service: "Database",
                description: "Scheduled maintenance window for performance optimization",
                duration: "45 minutes",
                impact: "Planned",
                color: "from-blue-500 to-cyan-500"
              },
              {
                date: "December 28, 2024",
                status: "Resolved",
                service: "AI Engine",
                description: "Model update causing temporary processing delays",
                duration: "8 minutes",
                impact: "Minor",
                color: "from-purple-500 to-pink-500"
              }
            ].map((incident, index) => (
              <motion.div
                key={incident.date}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${incident.color} flex items-center justify-center flex-shrink-0`}>
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">{incident.service}</h3>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          incident.status === 'Resolved' ? 'bg-green-500/20 text-green-400' :
                          incident.status === 'Investigating' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {incident.status}
                        </span>
                        <span className="text-sm text-gray-400">{incident.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-3">{incident.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{incident.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        <span>{incident.impact} impact</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Monitoring & Alerts */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Monitoring & Alerts</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proactive monitoring ensures issues are detected and resolved before they impact users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-Time Monitoring",
                description: "24/7 automated monitoring of all system components",
                features: ["CPU usage", "Memory utilization", "Network latency", "Error rates"],
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Automated Alerts",
                description: "Instant notifications when thresholds are exceeded",
                features: ["Email notifications", "Slack integration", "PagerDuty alerts", "SMS alerts"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Predictive Analytics",
                description: "AI-powered analysis to predict and prevent issues",
                features: ["Anomaly detection", "Capacity planning", "Performance forecasting", "Risk assessment"],
                color: "from-purple-500 to-pink-500"
              }
            ].map((monitoring, index) => (
              <motion.div
                key={monitoring.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${monitoring.color} flex items-center justify-center mb-6`}>
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{monitoring.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{monitoring.description}</p>
                <div className="space-y-2">
                  {monitoring.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-gray-700">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Stay Informed</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Subscribe to status updates and get notified immediately when there are any service disruptions or maintenance windows.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-6 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 80px -15px rgba(168,85,247,0.8)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Live Status
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              <motion.button
                className="border-2 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe to Updates
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Questions about system status? Contact us at status@savecash.com
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
