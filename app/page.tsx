"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube, FaDiscord } from "react-icons/fa"
import { FiExternalLink, FiCalendar, FiVideo, FiBookOpen } from "react-icons/fi"
import { cn } from "@/lib/utils"

export default function LinktreePage() {
  const [activeTab, setActiveTab] = useState<"cs" | "soc">("cs")
  const [isMobile, setIsMobile] = useState(false)

  // Handle responsive design
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  const socialLinks = {
    cs: [
      {
        name:"Join IEEE CS",
        icon: <FiExternalLink className="w-5 h-5" />,
        url: "https://bmsit-ieee.github.io/sps/Membership_Drive/front.html",
        description: "Join IEEE CS BMSIT Chapter and be part of our community",
        bgColor: "from-green-600 to-green-700",
      },
      { 
        name: "LinkedIn", 
        icon: <FaLinkedin className="w-5 h-5" />, 
        url: "https://www.linkedin.com/company/ieee-cs-bmsit/about/?viewAsMember=true",
        description: "Professional updates and networking",
        bgColor: "from-blue-600 to-blue-700",
      },
      { 
        name: "Instagram", 
        icon: <FaInstagram className="w-5 h-5" />, 
        url: "https://www.instagram.com/ieeecs.bmsit/",
        description: "Event photos and community highlights",
        bgColor: "from-purple-600 to-pink-600", 
      },
  
      { 
        name: "GitHub", 
        icon: <FaGithub className="w-5 h-5" />, 
        url: "https://github.com/ieee-cs-bmsit",
        description: "Open-source projects and code",
        bgColor: "from-gray-700 to-gray-800",
      },
  
      { 
        name: "POTM March", 
        icon: <FiBookOpen className="w-5 h-5" />, 
        url: "https://github.com/ieee-cs-bmsit/PoTM-M",
        description: "Discover exciting projects from our project of the Month March edition",
        bgColor: "from-amber-600 to-amber-700",
      },
      { 
        name: "Infoboards", 
        icon: <FaWhatsapp className="w-5 h-5" />, 
        url: "https://chat.whatsapp.com/JmWZJSNpQLW06Dd6UwLUK6",
        description: "Updates and student community",
        bgColor: "from-indigo-600 to-indigo-700",
      },
    ],
    soc: [
      {
        name: "Register for SoC",
        icon: <FiExternalLink className="w-5 h-5" />,
        url: "https://www.ieeesoc.xyz",
        description: "Register for IEEE Summer of Code 2024",
        bgColor: "from-green-600 to-green-700",
      },
      { 
        name: "LinkedIn", 
        icon: <FaLinkedin className="w-5 h-5" />, 
        url: "https://www.linkedin.com/company/ieeesoc/about/?viewAsMember=true",
        description: "Professional updates and networking",
        bgColor: "from-blue-600 to-blue-700",
      },
      { 
        name: "Instagram", 
        icon: <FaInstagram className="w-5 h-5" />, 
        url: "https://instagram.com/ieeesoc",
        description: "Event photos and community highlights",
        bgColor: "from-purple-600 to-pink-600",
      },
      
      {
        name: "Discord",
        icon: <FaDiscord className="w-5 h-5" />,
        url: "https://discord.gg/ZDPf8ByBUy",
        description: "Join our Discord server for discussions and events",
        bgColor: "from-blue-800 to-blue-900",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900 relative overflow-hidden font-sans">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className={cn(
        "container mx-auto px-4 py-12 relative z-10",
        isMobile ? "max-w-md" : "max-w-6xl"
      )}>
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.div 
  className="w-40 h-40 rounded-full bg-white flex items-center justify-center mb-6 shadow-lg border-4 border-amber-400"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
>
  <AnimatePresence mode="wait">
    <motion.img 
      key={activeTab}
      src={activeTab === "cs" ? "/ieeecs.jpg?height=140&width=140" : "/isoc.png?height=140&width=140"} 
      alt={`IEEE ${activeTab === "cs" ? "CS" : "SoC"} Logo`} 
      className="w-25 h-25 rounded-full object-cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    />
  </AnimatePresence>
</motion.div>
 

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-2 font-serif tracking-tight">
              IEEE {activeTab === "cs" ? "Computer Society" : "SoC"}
            </h1>
            <AnimatePresence mode="wait"></AnimatePresence>
              <motion.h2 
                key={activeTab}
                className="text-xl text-amber-400 font-semibold text-center mb-8 font-sans tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === "cs" ? "IEEE CS BMSIT CHAPTER" : "IEEE Summer of Code"} 
              </motion.h2>
            
          </motion.div>

          {/* Toggle */}
          <motion.div 
            className="bg-blue-800/50 p-1 rounded-md mb-8 backdrop-blur-sm border border-blue-700/50 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex relative">
              <button
                onClick={() => setActiveTab("cs")}
                className={cn(
                  "relative z-10 px-8 py-3 text-sm font-medium transition-colors",
                  activeTab === "cs" ? "text-blue-950" : "text-white/70 hover:text-white",
                )}
              >
                IEEE CS
              </button>
              <button
                onClick={() => setActiveTab("soc")}
                className={cn(
                  "relative z-10 px-8 py-3 text-sm font-medium transition-colors",
                  activeTab === "soc" ? "text-blue-950" : "text-white/70 hover:text-white",
                )}
              >
                IEEE SoC
              </button>
              <motion.div
                className="absolute inset-0 z-0 bg-white rounded-sm"
                initial={false}
                animate={{
                  x: activeTab === "cs" ? 0 : "100%",
                  width: "50%",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
          </motion.div>

          {/* Links */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {isMobile ? (
                // Mobile: List view
                <div className="space-y-4">
                  {socialLinks[activeTab].map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-5 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-amber-400 transition-all duration-300 rounded-xl px-6 py-4 w-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_4px_20px_rgba(255,191,0,0.2)] group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.1 },
                      }}
                    >
                      <div className={cn(
                        `bg-gradient-to-br ${link.bgColor} p-3 rounded-lg shadow-inner group-hover:scale-105 transition-transform duration-300`
                      )}>
                        {link.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-white text-lg">{link.name}</span>
                        <span className="text-xs text-white/70">{link.description}</span>
                      </div>
                      <FiExternalLink className="w-4 h-4 text-white/40 ml-auto group-hover:text-amber-400 transition-colors" />
                    </motion.a>
                  ))}
                </div>
              ) : (
                // Desktop: Grid view
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {socialLinks[activeTab].map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-center bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-amber-400 transition-all duration-300 rounded-xl p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_4px_20px_rgba(255,191,0,0.2)] group"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: index * 0.05 },
                      }}
                      whileHover={{ 
                        y: -5,
                        transition: { 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 10 
                        }
                      }}
                    >
                      <div className={cn(
                        `bg-gradient-to-br ${link.bgColor} p-4 rounded-lg shadow-inner mb-4 group-hover:scale-110 transition-transform duration-300`
                      )}>
                        <motion.div whileHover={{ rotate: 12 }}>
                          {link.icon}
                        </motion.div>
                      </div>
                      <h3 className="font-bold text-white text-lg mb-1">{link.name}</h3>
                      <p className="text-xs text-white/70 mb-3">{link.description}</p>
                      <div className="mt-auto">
                        <span className="inline-flex items-center text-amber-400 text-xs font-semibold hover:underline">
                          Visit <FiExternalLink className="w-3 h-3 ml-1" />
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Footer */}
          <motion.div 
            className="mt-12 text-center text-white/50 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p>© {new Date().getFullYear()} IEEE CS BMSIT CHAPTER</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}