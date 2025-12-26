'use client'

import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaGithub, FaEnvelope, FaExternalLinkAlt, FaRocket } from 'react-icons/fa'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrambledText, setScrambledText] = useState("Full Stack Developer")
  const [currentEmoji, setCurrentEmoji] = useState(0)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const emojis = ["🚀", "💡", "⚡", "🎨", "🔥", "✨"]
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
      setCurrentEmoji((prev) => (prev + 1) % emojis.length)
    }, 2000)
    return () => clearInterval(interval)
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
    { title: "TryHackMe CTF 2025", detail: "Ranked 77th globally (top 3%) out of 3,200 teams" },
    { title: "NMIMS Hackathon 2025", detail: "4th place • Honorable Mention" },
    { title: "AWS Cloud Architect", detail: "Certified" },
    { title: "AWS GenAI", detail: "Certified" },
    { title: "KakushIN by Nomura", detail: "Finalist" },
    { title: "Ambiora Tech Fest", detail: "Convener of college's annual tech fest" },
    { title: "MMGEIS Program 2024", detail: "Master Mentors Geo-Enabling Indian Scholars" },
    { title: "Accenture iAspire 2022", detail: "Gold Level certification" },
    { title: "Professional Writing 2025", detail: "Certified by Saylor Academy" },
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

      {/* Rainbow Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 origin-left z-50 shadow-lg shadow-purple-500/50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating Navigation with Glassmorphism */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40 px-8 py-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl shadow-purple-500/10"
      >
        <div className="flex items-center gap-8">
          <motion.div 
            className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            UC
          </motion.div>
          <div className="flex gap-6">
            <a 
              href="https://github.com/BLANK0104" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-purple-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="mailto:utsav.chandra@example.com" 
              className="hover:text-purple-400 transition-colors"
              aria-label="Email Contact"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </motion.nav>

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
              <div className="relative w-32 h-32 mx-auto">
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

            <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">
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
              className="text-3xl md:text-5xl font-bold mb-8 h-16 flex items-center justify-center"
              onHoverStart={scrambleText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent cursor-pointer">
                {scrambledText}
              </span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
            >
              B.Tech Student passionate about Full Stack Development, Cloud Computing, and Cybersecurity.
              Building projects and learning cutting-edge technologies ✨
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
              <MagneticButton href="mailto:utsav.chandra@example.com" variant="outline">
                Say Hello 👋
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
          💻
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-10 text-6xl"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          ⚡
        </motion.div>
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
            <h2 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-gray-400 text-xl">Hover for a surprise</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 auto-rows-[300px]">
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
      <section className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black mb-20 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Experience & Internships
          </motion.h2>
          
          <div className="space-y-12 relative">
            {/* Animated Line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"
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
                  className="absolute left-8 md:left-1/2 w-6 h-6 -ml-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full z-10 shadow-lg shadow-purple-500/50"
                  whileHover={{ scale: 1.5, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                {/* Card */}
                <motion.div
                  className="flex-1 ml-20 md:ml-0"
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all shadow-xl">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <img 
                          src={exp.logo} 
                          alt={exp.company}
                          className="w-12 h-12 object-contain rounded-lg bg-white/10 p-2"
                        />
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                          <p className="text-purple-400 font-medium">{exp.role}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm font-medium">
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
            className="text-6xl md:text-8xl font-black mb-20 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Skills & Learning
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Development</h3>
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
            className="text-6xl md:text-8xl font-black mb-20 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Achievements & Certifications
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: 90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateX: 5 }}
                style={{ transformStyle: "preserve-3d" }}
                className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {achievement.title}
                </h3>
                <p className="text-gray-400">{achievement.detail}</p>
              </motion.div>
            ))}
          </div>
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
              className="text-7xl md:text-9xl font-black mb-12 leading-tight"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
              <br />
              <span className="text-white">& Collaborate</span>
            </motion.h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <MagneticButton href="mailto:utsav.chandra@example.com" size="large">
                <FaRocket className="mr-2" />
                Get in Touch
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
            © 2025 Utsav Chandra • B.Tech Student at NMIMS • Built with 💜 and ✨
          </p>
        </div>
      </footer>
    </div>
  )
}

// Magnetic Button Component
function MagneticButton({ 
  children, 
  href, 
  variant = "solid",
  size = "default"
}: { 
  children: React.ReactNode
  href: string
  variant?: "solid" | "outline"
  size?: "default" | "large"
}) {
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
    ? "px-12 py-6 text-xl font-bold" 
    : "px-8 py-4 text-lg font-semibold"

  const variantClasses = variant === "solid"
    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
    : "border-2 border-white/20 hover:border-purple-500/50"

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      className={`relative overflow-hidden rounded-full transition-all ${baseClasses} ${variantClasses} flex items-center justify-center`}
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

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
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
        <div className="relative h-full p-8 flex flex-col justify-end" style={{ transform: "translateZ(50px)" }}>
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
          
          <h3 className="text-3xl font-black mb-3 text-white">
            {project.name}
          </h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-white/80 mb-4"
          >
            {project.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            {project.tech.map((tech: string, i: number) => (
              <span key={i} className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs">
                {tech}
              </span>
            ))}
          </motion.div>
          
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all"
            animate={{ opacity: isHovered ? 1 : 0 }}
            whileHover={{ x: 5 }}
          >
            View Project <FaExternalLinkAlt size={14} />
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
