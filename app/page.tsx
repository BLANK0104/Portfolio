'use client'

import { motion, useScroll, AnimatePresence, type HTMLMotionProps } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaGithub, FaEnvelope, FaExternalLinkAlt, FaRocket, FaLinkedin, FaDownload, FaPaperPlane, FaPython, FaJava, FaAws, FaDocker, FaNode, FaGitAlt, FaDatabase, FaUnity, FaUser, FaBriefcase, FaSuitcase, FaLaptopCode, FaBolt, FaBullseye, FaBookOpen, FaLightbulb } from 'react-icons/fa'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiMicrosoftazure, SiMongodb, SiPostgresql, SiKubernetes, SiMysql, SiKotlin, SiGodotengine, SiBlender, SiVisualstudio } from 'react-icons/si'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrambledText, setScrambledText] = useState("Full Stack Developer")
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [emailCopied, setEmailCopied] = useState(false)
  const roles = ["Full Stack Developer", "Cloud Architect", "Cybersecurity Enthusiast"]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => {
        const nextIndex = (prev + 1) % roles.length
        scrambleToText(roles[nextIndex])
        return nextIndex
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrambleToText = (targetText: string) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let iterations = 0
    
    const interval = setInterval(() => {
      setScrambledText(targetText.split("").map((char, index) => {
        if (char === " ") return " "
        if (index < iterations) return targetText[index]
        return chars[Math.floor(Math.random() * chars.length)]
      }).join(""))
      
      if (iterations >= targetText.length) clearInterval(interval)
      iterations += 1/3
    }, 30)
  }

  const scrambleText = () => {
    scrambleToText(roles[currentRoleIndex])
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('utsav.chandra508@nmims.in')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const projects = [
    {
      name: "Event Management Portal",
      description: "Comprehensive event management system with role-based access control and real-time notifications",
      year: "2024",
      tech: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/BLANK0104/EMP",
      color: "#3B82F6",
      image: "/emp.png"
    },
    {
      name: "Lost & Found System",
      description: "Full-stack platform for managing lost items with authentication and tracking",
      year: "2024",
      tech: ["JavaScript", "Node.js", "MongoDB"],
      github: "https://github.com/BLANK0104/lost_and_found_frontend",
      color: "#8B5CF6",
      image: "/lostandfound.png"
    },
    {
      name: "Treasure Hunt Platform",
      description: "Interactive gaming platform with real-time leaderboard and team collaboration",
      year: "2024",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/BLANK0104/Treasure_Hunt_Frontend",
      color: "#F59E0B",
      image: "/treasurehunt.png"
    },
    {
      name: "Leave Management System",
      description: "Enterprise leave management with mobile support and approval workflows",
      year: "2023",
      tech: ["Kotlin", "Java", "Node.js"],
      github: "https://github.com/BLANK0104/LeaveRequest",
      color: "#10B981",
      image: "/leavemanagement.png"
    },
    {
      name: "YouTube Music Desktop",
      description: "Custom desktop application for YouTube Music with enhanced features and offline support",
      year: "2023",
      tech: ["Electron", "JavaScript", "YouTube API"],
      github: "https://github.com/BLANK0104/YT-music",
      color: "#EF4444",
      image: "/yt music.png"
    },
    {
      name: "Malware Detection System",
      description: "ML-based malware detection with automated file scanning",
      year: "2023",
      tech: ["Python", "Machine Learning"],
      github: "https://github.com/BLANK0104/Malware-detection-and-ftp",
      color: "#6366F1",
      image: "/malwarescanadmin.png"
    }
  ]

  const achievements = [
    {
      title: "TryHackMe CTF 2025",
      detail: "Ranked 77th globally (top 3%) out of 3,200 teams",
      certificate: "/certificates/THM-TEOWFQSOLF.pdf",
    },
    { title: "NMIMS Hackathon 2025", detail: "4th place • Honorable Mention" },
    {
      title: "AWS Cloud Architect",
      detail: "Certified",
      certificate: "/certificates/AWS_Academy_Graduate___Cloud_Architecting.pdf",
    },
    {
      title: "AWS GenAI",
      detail: "Certified",
      certificate: "/certificates/AWSAcademy__GeAi.pdf",
    },
    { title: "KakushIN by Nomura", detail: "Finalist" },
    { title: "Ambiora Tech Fest", detail: "Convener of college's annual tech fest" },
    {
      title: "MMGEIS Program 2024",
      detail: "Master Mentors Geo-Enabling Indian Scholars",
      certificate: "/certificates/mmgeis.png",
    },
    {
      title: "Accenture iAspire 2022",
      detail: "Gold Level certification",
      certificate: "/certificates/Utsav%20Chandra%20Go%20for%20Gold-iAspire%20certificate.pdf",
    },
    {
      title: "Professional Writing 2025",
      detail: "Certified by Saylor Academy",
      certificate: "/certificates/professional%20writing.pdf",
    },
  ]

  const experience = [
    {
      company: "MemoTag",
      role: "AI/ML Developer",
      duration: "3 Months",
      year: "2024",
      logo: "/memotag logo.png"
    },
    {
      company: "Hindustan Aeronautics Limited",
      role: "Intern",
      duration: "1 Month",
      year: "2024",
      logo: "/hal logo.png"
    },
    {
      company: "Punjab National Bank",
      role: "Banking Operations Intern",
      duration: "3 Weeks",
      year: "2023",
      logo: "/pnb logo.png"
    }
  ]

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 text-white overflow-hidden">
      
      {/* Floating Cursor Trail */}
      <motion.div
        className="pointer-events-none fixed w-8 h-8 rounded-full border-2 border-purple-500/50 z-50 mix-blend-screen hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      />
      
      {/* Animated Grid Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px]"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Ultra-Modern Floating Header with Integrated Progress */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="relative w-full max-w-6xl">
          {/* Animated Background Glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-2xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Main Navigation Container */}
          <div className="relative backdrop-blur-3xl bg-gradient-to-r from-slate-950/90 via-purple-950/60 to-slate-950/90 rounded-3xl border border-white/20 shadow-2xl overflow-hidden ring-1 ring-white/10">
            
            {/* Top Progress Bar - Integrated into header */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 overflow-hidden rounded-t-3xl">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 origin-left"
                style={{
                  scaleX: scrollYProgress,
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)'
                }}
              />
            </div>

            <div className="px-4 py-3 sm:px-6 sm:py-4">
              <div className="flex items-center justify-between">
                
                {/* Left: Animated Logo */}
                <motion.a
                  href="#"
                  className="flex items-center gap-3 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative w-12 h-12">
                    {/* Animated Glow Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: 'conic-gradient(from 0deg, #a855f7, #ec4899, #8b5cf6, #a855f7)',
                      }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {/* Logo Container */}
                    <div className="absolute inset-[2px] bg-slate-950 rounded-2xl flex items-center justify-center overflow-hidden">
                      {/* Hexagonal Pattern */}
                      <svg className="w-full h-full" viewBox="0 0 48 48">
                        {/* Background hexagon */}
                        <motion.path
                          d="M24 4 L38 12 L38 28 L24 36 L10 28 L10 12 Z"
                          fill="url(#logoGradient)"
                          stroke="url(#logoStroke)"
                          strokeWidth="1"
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        {/* Inner design - stylized "UC" */}
                        <text
                          x="24"
                          y="28"
                          textAnchor="middle"
                          className="font-black text-[16px]"
                          fill="white"
                        >
                          UC
                        </text>
                        {/* Accent lines */}
                        <motion.line
                          x1="14" y1="24" x2="34" y2="24"
                          stroke="url(#logoStroke)"
                          strokeWidth="0.5"
                          animate={{
                            pathLength: [0, 1, 0],
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        
                        <defs>
                          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#d946ef" stopOpacity="0.3" />
                          </linearGradient>
                          <linearGradient id="logoStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-base font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Utsav Chandra
                    </div>
                  </div>
                </motion.a>

                {/* Mobile: Compact Icon Nav */}
                <div className="flex md:hidden items-center gap-1">
                  {[
                    { name: 'About', href: '#about', icon: <FaUser size={16} /> },
                    { name: 'Projects', href: '#projects', icon: <FaBriefcase size={16} /> },
                    { name: 'Experience', href: '#experience', icon: <FaSuitcase size={16} /> },
                    { name: 'Contact', href: '#contact', icon: <FaEnvelope size={16} /> },
                  ].map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      aria-label={item.name}
                      className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                      whileHover={{ y: -1, scale: 1.06 }}
                      whileTap={{ scale: 0.94 }}
                    >
                      <span className="text-gray-200">{item.icon}</span>
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.a>
                  ))}
                </div>

                {/* Center: Floating Nav Pills */}
                <div className="hidden md:flex items-center gap-2">
                  {[
                    { name: 'About', href: '#about', icon: <FaUser size={16} /> },
                    { name: 'Projects', href: '#projects', icon: <FaBriefcase size={16} /> },
                    { name: 'Experience', href: '#experience', icon: <FaSuitcase size={16} /> },
                    { name: 'Contact', href: '#contact', icon: <FaEnvelope size={16} /> },
                  ].map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="relative px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all group"
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white flex items-center gap-2">
                        <span className="text-gray-200">{item.icon}</span>
                        {item.name}
                      </span>
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.a>
                  ))}
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2">
                  {/* Circular Progress Indicator */}
                  <motion.div
                    className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/5 relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="3"
                        fill="none"
                      />
                      <motion.circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        style={{
                          pathLength: scrollYProgress,
                        }}
                        strokeDasharray="126"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="absolute text-[10px] font-bold text-purple-400">
                      {Math.round(scrollYProgress.get() * 100)}%
                    </span>
                  </motion.div>

                  {/* Social Icons */}
                  <div className="flex items-center gap-1">
                    {/* Mobile: Resume Icon */}
                    <motion.a
                      href="/Utsav_Chandra_Resume.pdf"
                      download
                      aria-label="Download Resume"
                      className="sm:hidden p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10"
                      whileHover={{ scale: 1.15, rotate: -8 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaDownload size={18} className="text-gray-300 hover:text-white" />
                    </motion.a>
                    <motion.a
                      href="https://github.com/BLANK0104"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub size={18} className="text-gray-300 hover:text-white" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/utsav-chandra/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10"
                      whileHover={{ scale: 1.15, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin size={18} className="text-gray-300 hover:text-white" />
                    </motion.a>
                    <motion.button
                      onClick={copyEmail}
                      className="relative p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaEnvelope size={18} className="text-gray-300 hover:text-white" />
                      <AnimatePresence>
                        {emailCopied && (
                          <motion.span
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: -40, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute left-1/2 -translate-x-1/2 text-xs bg-purple-500 px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg"
                          >
                            ✓ Copied!
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>

                  {/* Resume Button */}
                  <motion.a
                    href="/Utsav_Chandra_Resume.pdf"
                    download
                    className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-purple-500/30 border border-purple-400/30"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
                      borderColor: "rgba(168, 85, 247, 0.8)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload size={14} />
                    <span>Resume</span>
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Bottom Glow Line */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.header>

      {/* Hero with Text Scramble Effect */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative">
        <div className="max-w-7xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Profile Image */}
            <motion.div 
              className="mb-8 relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <img 
                  src="/utsav.JPG" 
                  alt="Utsav Chandra"
                  className="relative w-full h-full rounded-full object-cover border-4 border-purple-500/50 shadow-2xl"
                />
              </div>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black mb-6 tracking-tight">
              <motion.span
                className="inline-block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Utsav Chandra
              </motion.span>
            </h1>
            
            <motion.div
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 min-h-[4rem] md:min-h-[5rem] flex items-center justify-center px-4"
              onHoverStart={scrambleText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent cursor-pointer text-center">
                {scrambledText}
              </span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 px-4"
            >
              B.Tech Student passionate about Full Stack Development, Cloud Computing, and Cybersecurity.
              Building projects and learning cutting-edge technologies.
            </motion.p>
            
            {/* Magnetic Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MagneticButton href="#projects">
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
              </MagneticButton>
              <MagneticButton href="/Utsav_Chandra_Resume.pdf" variant="outline" download>
                <FaDownload className="inline mr-2" />
                Download Resume
              </MagneticButton>
              <MagneticButton href="#contact" variant="outline">
                <FaPaperPlane className="inline mr-2" />
                Say Hello
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 text-6xl"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <FaLaptopCode className="text-purple-300/70" size={56} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-10 text-6xl"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <FaBolt className="text-pink-300/70" size={56} />
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl border border-white/10">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I'm a B.Tech student at <span className="text-purple-400 font-semibold">NMIMS University</span> with a passion for building innovative solutions that solve real-world problems. My journey in tech started with curiosity about how things work, and has evolved into a deep love for creating scalable applications.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I specialize in <span className="text-purple-400 font-semibold">Full Stack Development</span>, with hands-on experience in cloud architecture and cybersecurity. I've had the privilege to intern at organizations like <span className="text-purple-400">Memotag Technologies</span>, where I developed enterprise-level applications, and <span className="text-purple-400">HAL & PNB</span>, gaining industry exposure.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or learning about cloud infrastructure. I'm actively seeking <span className="text-pink-400 font-semibold">internship opportunities</span> where I can contribute, learn, and grow as a developer.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-3 text-purple-400 flex items-center gap-2">
                    <FaBullseye size={18} />
                    <span>Current Focus</span>
                  </h3>
                  <p className="text-gray-300">Building cloud-native applications and mastering Azure/AWS services for scalable solutions</p>
                </div>
                
                <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-3 text-pink-400 flex items-center gap-2">
                    <FaBookOpen size={18} />
                    <span>Learning</span>
                  </h3>
                  <p className="text-gray-300">Kubernetes, microservices architecture, and advanced cybersecurity practices</p>
                </div>
                
                <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-3 text-purple-400 flex items-center gap-2">
                    <FaLightbulb size={18} />
                    <span>Interests</span>
                  </h3>
                  <p className="text-gray-300">DevOps, system design, AI/ML integration, and building developer tools</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl font-black mb-20 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Tech Stack
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { icon: <FaPython size={48} />, name: "Python", color: "#3776AB" },
              { icon: <FaJava size={48} />, name: "Java", color: "#007396" },
              { icon: <SiKotlin size={48} />, name: "Kotlin", color: "#7F52FF" },
              { icon: <SiReact size={48} />, name: "React", color: "#61DAFB" },
              { icon: <SiNextdotjs size={48} />, name: "Next.js", color: "#FFFFFF" },
              { icon: <SiTypescript size={48} />, name: "TypeScript", color: "#3178C6" },
              { icon: <FaNode size={48} />, name: "Node.js", color: "#339933" },
              { icon: <FaUnity size={48} />, name: "Unity", color: "#FFFFFF" },
              { icon: <SiGodotengine size={48} />, name: "Godot", color: "#478CBF" },
              { icon: <SiBlender size={48} />, name: "Blender", color: "#F5792A" },
              { icon: <SiVisualstudio size={48} />, name: "Visual Studio", color: "#5C2D91" },
              { icon: <SiMicrosoftazure size={48} />, name: "Azure", color: "#0078D4" },
              { icon: <FaAws size={48} />, name: "AWS", color: "#FF9900" },
              { icon: <FaDocker size={48} />, name: "Docker", color: "#2496ED" },
              { icon: <SiKubernetes size={48} />, name: "Kubernetes", color: "#326CE5" },
              { icon: <SiMongodb size={48} />, name: "MongoDB", color: "#47A248" },
              { icon: <SiMysql size={48} />, name: "MySQL", color: "#4479A1" },
              { icon: <SiPostgresql size={48} />, name: "PostgreSQL", color: "#4169E1" },
              { icon: <SiTailwindcss size={48} />, name: "Tailwind", color: "#06B6D4" },
              { icon: <FaGitAlt size={48} />, name: "Git", color: "#F05032" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all flex flex-col items-center justify-center gap-3 cursor-pointer group"
              >
                <div style={{ color: tech.color }} className="group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Projects */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Projects
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {projects.map((project, index) => (
              <TiltCard
                key={index}
                project={project}
                className={index === 0 ? "md:col-span-2 md:row-span-2" : index === 3 ? "md:col-span-2" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section id="experience" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl font-black mb-12 md:mb-20 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Experience & Internships
          </motion.h2>
          
          <div className="space-y-8 md:space-y-12 relative">
            {/* Animated Line */}
            <motion.div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                {/* Dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 w-4 h-4 md:w-6 md:h-6 -ml-2 md:-ml-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full z-10 shadow-lg shadow-purple-500/50"
                  whileHover={{ scale: 1.5, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                {/* Card */}
                <motion.div
                  className="flex-1 ml-12 md:ml-20 lg:ml-0"
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-6 md:p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all shadow-xl">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                      <div className="flex items-center gap-3 md:gap-4">
                        <img 
                          src={exp.logo} 
                          alt={exp.company}
                          className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-lg bg-white/10 p-2"
                        />
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{exp.company}</h3>
                          <p className="text-purple-400 font-medium text-sm md:text-base">{exp.role}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs md:text-sm font-medium">
                        {exp.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl font-black mb-12 md:mb-20 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Skills & Learning
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 md:p-8 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-purple-400">Development</h3>
              <div className="flex flex-wrap gap-2">
                {["Full Stack Web Dev", "Mobile Development", "REST APIs", "Database Management"].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS Cloud", "DevOps", "CI/CD", "Docker", "VPS Management"].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-red-500/5 to-orange-500/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-red-500/30 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-red-400">Security & AI</h3>
              <div className="flex flex-wrap gap-2">
                {["Cybersecurity", "Penetration Testing", "Machine Learning", "AI/ML"].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 bg-gradient-to-br from-green-500/5 to-emerald-500/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-green-500/30 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-400">Tools & Version Control</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "VS Code", "Linux", "Agile"].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-yellow-500/30 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "Python", "Java", "Kotlin", "TypeScript"].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-8 bg-gradient-to-br from-pink-500/5 to-purple-500/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-pink-500/30 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Problem-Solving", "Leadership", "Communication", "Teamwork", "Innovation"].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements with Reveal Animation */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl font-black mb-12 md:mb-20 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Achievements & Certifications
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: 90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateX: 5 }}
                style={{ transformStyle: "preserve-3d" }}
                className="p-6 md:p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer"
              >
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">{achievement.detail}</p>

                {achievement.certificate && (
                  <div className="mt-4 md:mt-5">
                    <motion.a
                      href={achievement.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-gray-200 transition-all"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <FaExternalLinkAlt size={14} className="text-purple-300" />
                      <span>View Certificate</span>
                    </motion.a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-center text-gray-400 text-lg mb-12">
              Have a project in mind or want to collaborate? Drop me a message!
            </p>

            <motion.form
              className="space-y-6 p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              action="https://formspree.io/f/mjgvveeg"
              method="POST"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </motion.form>

            <div className="mt-12 flex justify-center gap-6">
              <motion.button
                onClick={copyEmail}
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <FaEnvelope size={20} />
                <span>{emailCopied ? "Email Copied!" : "utsav.chandra508@nmims.in"}</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA with Animated Background */}
      <section className="py-40 px-6 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "linear-gradient(45deg, #8b5cf6 25%, transparent 25%, transparent 75%, #8b5cf6 75%, #8b5cf6), linear-gradient(45deg, #8b5cf6 25%, transparent 25%, transparent 75%, #8b5cf6 75%, #8b5cf6)",
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 30px 30px"
          }}
        />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-5xl sm:text-7xl md:text-9xl font-black mb-8 md:mb-12 leading-tight"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
              <br />
              <span className="text-white">& Collaborate</span>
            </motion.h2>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
              <MagneticButton href="#contact" size="large">
                <FaRocket className="mr-2" />
                Get in Touch
              </MagneticButton>
              <MagneticButton href="/Utsav_Chandra_Resume.pdf" variant="outline" size="large" download>
                <FaDownload className="mr-2" />
                Download Resume
              </MagneticButton>
              <MagneticButton href="https://github.com/BLANK0104" variant="outline" size="large">
                <FaGithub className="mr-2" />
                View GitHub
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">
            © 2025 Utsav Chandra • B.Tech Student at NMIMS • Built with Next.js, Tailwind, and Framer Motion
          </p>
        </div>
      </footer>
    </div>
  )
}

// Magnetic Button Component
type MagneticButtonProps = {
  children: React.ReactNode
  href: string
  variant?: "solid" | "outline"
  size?: "default" | "large"
} & Omit<HTMLMotionProps<"a">, "href" | "children" | "ref" | "onMouseMove" | "onMouseLeave">;

function MagneticButton({ 
  children, 
  href, 
  variant = "solid",
  size = "default",
  className,
  ...anchorProps
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const baseClasses = size === "large" 
    ? "px-8 py-4 sm:px-12 sm:py-6 text-lg sm:text-xl font-bold w-full sm:w-auto" 
    : "px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"

  const variantClasses = variant === "solid"
    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
    : "border-2 border-white/20 hover:border-purple-500/50"

  return (
    <motion.a
      {...anchorProps}
      ref={buttonRef}
      href={href}
      className={`relative overflow-hidden rounded-full transition-all ${baseClasses} ${variantClasses} flex items-center justify-center ${className ?? ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  )
}

// 3D Tilt Card Component
function TiltCard({ project, className }: { project: any, className?: string }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setRotateY((x - centerX) / 10)
    setRotateX((centerY - y) / 10)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  const handleTouchStart = () => {
    setIsHovered(true)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onTouchStart={handleTouchStart}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div 
        className="h-full rounded-3xl overflow-hidden relative"
        style={{ 
          backgroundColor: project.color,
          transform: "translateZ(0px)"
        }}
      >
        {/* Project Image */}
        <img 
          src={project.image} 
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/30" />
        
        {/* Content */}
        <div className="relative h-full p-6 md:p-8 flex flex-col justify-end" style={{ transform: "translateZ(50px)" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
              {project.year}
            </span>
          </motion.div>
          
          <h3 className="text-2xl md:text-3xl font-black mb-2 md:mb-3 text-white">
            {project.name}
          </h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-white/80 mb-3 md:mb-4 text-sm md:text-base">
            {project.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4"
          >
            {project.tech.map((tech: string, i: number) => (
              <span key={i} className="px-2 py-0.5 md:px-2 md:py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs">
                {tech}
              </span>
            ))}
          </motion.div>
          
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 text-white font-medium transition-all group"
            animate={{ opacity: isHovered ? 1 : 0 }}
            whileHover={{ scale: 1.05 }}
            title="View source code on GitHub"
          >
            <FaGithub size={16} className="group-hover:rotate-12 transition-transform" />
            <span>View on GitHub</span>
            <FaExternalLinkAlt size={12} className="opacity-70" />
          </motion.a>
        </div>
        
        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </motion.div>
  )
}
