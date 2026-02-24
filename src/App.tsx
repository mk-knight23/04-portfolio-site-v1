import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Code2,
  Globe,
  MessageSquare,
  Mail,
  Github,
  Linkedin,
  Phone,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
  Shield,
  Building2,
  Award,
} from "lucide-react";

// VIBE Ecosystem Products
const vibeProducts = [
  {
    name: "AI-VIBE-Automation",
    tagline: "Workflow orchestration engine",
    description:
      "Handling background tasks and cross-platform agent sync with high-performance services.",
    icon: Zap,
    status: "In Development",
  },
  {
    name: "AI-VIBE-CLI",
    tagline: "Multi-agent AI coding interface",
    description:
      "Single-command TUI, multi-LLM router, and security-first command execution.",
    icon: Terminal,
    status: "In Development",
  },
  {
    name: "AI-VIBE-ChatWeb",
    tagline: "Conversational interface API",
    description:
      "High-availability backend for human-agent collaboration and documentation.",
    icon: MessageSquare,
    status: "Live",
  },
  {
    name: "AI-VIBE-WebBuilder",
    tagline: "Generative site architect",
    description:
      "AI-driven web application builder backend that understands design systems.",
    icon: Globe,
    status: "Planned",
  },
  {
    name: "AI-VIBE-VSCode",
    tagline: "State-machine IDE assistant",
    description:
      "Unified agent toolsets and IDE-to-cloud synchronization services.",
    icon: Code2,
    status: "Planned",
  },
];

// Selected Projects
const selectedProjects = [
  {
    name: "API Gateway",
    category: "Backend",
    tech: "Node.js",
    description:
      "Centralized authentication serving 10K+ requests daily with 99.9% uptime",
  },
  {
    name: "Ecommerce Platform",
    category: "Full Stack",
    tech: "Java / React",
    description:
      "Handling 50K+ SKUs with distributed caching and payment integrations",
  },
  {
    name: "Student Portal API",
    category: "Backend",
    tech: "Python",
    description:
      "Serving 100K+ students across 5+ institutions with sub-100ms response times",
  },
  {
    name: "Real-time Chat Engine",
    category: "Backend",
    tech: "Socket.io",
    description:
      "Supporting 10K+ concurrent connections with message persistence",
  },
];

const skillsByCategory = {
  "Backend Engineering": [
    "Node.js",
    "Python",
    "Java",
    "PostgreSQL",
    "Redis",
    "Microservices",
  ],
  "Cloud & Infrastructure": [
    "RESTful APIs",
    "GraphQL",
    "AWS / GCP",
    "Docker",
    "Kubernetes",
  ],
  "Security & Compliance": [
    "OAuth2",
    "JWT",
    "Encryption",
    "RBAC",
    "Audit Systems",
  ],
  "System Architecture": [
    "System Design",
    "Scalability",
    "Event-Driven",
    "CI/CD",
    "Monitoring",
  ],
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = [
        "about",
        "vibe",
        "work",
        "skills",
        "api-docs",
        "architecture",
        "resume",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">MK</span>
            </div>
            <span className="text-sm font-semibold tracking-wide text-slate-900">
              KAZI MUSHARRAF
            </span>
          </div>
          <div className="flex items-center gap-10">
            {[
              "about",
              "vibe",
              "work",
              "skills",
              "api-docs",
              "architecture",
              "resume",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`text-sm capitalize font-medium transition-colors relative ${
                  activeSection === section
                    ? "text-amber-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {section}
                {activeSection === section && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-8 py-20 relative z-10"
        >
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
              Backend Engineer & System Architect
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
            Building
            <br />
            <span className="text-amber-400">Scalable Systems</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl">
            Senior Backend Engineer architecting the{" "}
            <span className="text-amber-400 font-bold">
              AI-VIBE-ECOSYSTEM v2.0
            </span>
            . Specializing in distributed agents, high-performance APIs, and
            multi-product orchestration.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button
              onClick={() => scrollTo("vibe")}
              className="px-8 py-4 bg-amber-500 text-slate-900 rounded font-semibold hover:bg-amber-400 transition-colors flex items-center gap-2"
            >
              View VIBE Platform <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo("work")}
              className="px-8 py-4 bg-transparent border border-slate-600 text-white rounded font-semibold hover:bg-slate-800 transition-colors"
            >
              View Projects
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-slate-500" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-amber-500" />
            <span className="text-sm font-semibold text-amber-600 tracking-wider uppercase">
              Professional Background
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-8 text-slate-900">About Me</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-6 leading-relaxed">
              Backend Engineer and System Architect specializing in{" "}
              <strong className="text-slate-900">Distributed Systems</strong>,
              <strong className="text-slate-900"> API Design</strong>,
              <strong className="text-slate-900"> Database Optimization</strong>
              , and
              <strong className="text-slate-900"> Cloud Infrastructure</strong>.
            </p>
            <p className="mb-6 leading-relaxed">
              Currently serving as a{" "}
              <span className="text-amber-600 font-semibold">
                Project Engineer (TURBO)
              </span>{" "}
              at <strong>Wipro</strong>, where I engineer scalable backend
              architectures and mission-critical services for enterprise
              clients.
            </p>
            <p className="leading-relaxed">
              Experienced in{" "}
              <strong className="text-slate-900">System Design</strong>,
              <strong className="text-slate-900"> Performance Tuning</strong>,
              <strong className="text-slate-900"> DevOps Automation</strong>,
              and
              <strong className="text-slate-900"> Security Compliance</strong>.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-slate-200">
            <div className="text-center">
              <div className="text-5xl font-bold text-slate-900">60+</div>
              <div className="text-sm text-slate-500 mt-2 font-medium">
                Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-slate-900">05</div>
              <div className="text-sm text-slate-500 mt-2 font-medium">
                Product Platforms
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-500">5+</div>
              <div className="text-sm text-slate-500 mt-2 font-medium">
                Years Experience
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* VIBE Ecosystem Section */}
      <section id="vibe" className="py-20 px-8 bg-slate-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="px-4 py-1 bg-amber-500 text-slate-900 rounded-full text-sm font-semibold">
              Flagship Initiative
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            AI-VIBE-ECOSYSTEM v2.0
          </h2>
          <p className="text-slate-600 mb-12 text-lg max-w-2xl">
            A multi-product AI developer platform designed to transform how
            engineers build, deploy, and scale software.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {vibeProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-900 rounded-lg">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {product.name}
                      </h3>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${
                          product.status === "Live"
                            ? "bg-emerald-100 text-emerald-700"
                            : product.status === "In Development"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {product.status}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm font-medium mb-2">
                      {product.tagline}
                    </p>
                    <p className="text-slate-400 text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technical Highlights */}
          <div className="p-8 bg-slate-900 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              Technical Capabilities
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "🏗️",
                  text: "Hierarchical RAG (H-RAG) + Decision Agents",
                },
                {
                  icon: "🔀",
                  text: "Multi-provider LLM routing with fallback",
                },
                { icon: "📋", text: "55-feature roadmap with 4-tier prompts" },
                { icon: "📊", text: "Competitive analysis across 60 tools" },
                {
                  icon: "📦",
                  text: "Monorepo strategy with ecosystem boundaries",
                },
                { icon: "🔒", text: "Security-first architecture design" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            Backend Portfolio
          </h2>
          <p className="text-slate-600 mb-12 text-lg">
            Architecture-driven projects and enterprise system implementations.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {selectedProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-50 rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-500/5 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-slate-900 text-white rounded text-xs font-semibold">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 bg-slate-200 text-slate-600 rounded text-xs font-medium">
                    {project.tech}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>

          <a
            href="https://www.mkazi.live"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-12 text-slate-900 hover:text-amber-600 font-semibold transition-colors group"
          >
            View All 60 Projects{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8 bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            Technical Expertise
          </h2>
          <p className="text-slate-600 mb-12 text-lg">
            Specializing in enterprise backend engineering and cloud
            infrastructure.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(skillsByCategory).map(
              ([category, skills], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white rounded-xl border border-slate-200"
                >
                  <div className="flex items-center gap-3 mb-6">
                    {category.includes("Backend") ? (
                      <Cpu className="w-6 h-6 text-amber-500" />
                    ) : category.includes("Cloud") ? (
                      <Layers className="w-6 h-6 text-amber-500" />
                    ) : category.includes("Security") ? (
                      <Shield className="w-6 h-6 text-amber-500" />
                    ) : (
                      <Zap className="w-6 h-6 text-amber-500" />
                    )}
                    <h3 className="text-lg font-semibold text-slate-900">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-slate-100 text-slate-700 rounded text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </section>

      {/* vNext: API Documentation Section */}
      <section id="api-docs" className="py-20 px-8 bg-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-amber-400" />
            <h2 className="text-3xl font-bold text-white">API Documentation</h2>
          </div>
          <p className="text-slate-400 mb-10 text-lg">
            Sample endpoints from backend services I've built
          </p>

          <div className="space-y-6">
            {/* GET endpoint */}
            <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700">
              <div className="flex items-center gap-3 px-6 py-4 bg-slate-800 border-b border-slate-700">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded text-sm font-bold">
                  GET
                </span>
                <code className="text-slate-300 font-mono text-sm">
                  /api/v1/users/:id
                </code>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Description
                  </p>
                  <p className="text-slate-400 text-sm">
                    Fetch user profile with associated permissions and
                    preferences
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Response
                  </p>
                  <pre className="bg-slate-900 rounded-lg p-4 text-xs text-slate-300 overflow-x-auto">
                    {`{
  "id": "usr_123",
  "name": "Kazi Musharraf",
  "email": "kazi@example.com",
  "role": "admin",
  "permissions": ["read", "write", "delete"]
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* POST endpoint */}
            <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700">
              <div className="flex items-center gap-3 px-6 py-4 bg-slate-800 border-b border-slate-700">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm font-bold">
                  POST
                </span>
                <code className="text-slate-300 font-mono text-sm">
                  /api/v1/auth/login
                </code>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Description
                  </p>
                  <p className="text-slate-400 text-sm">
                    Authenticate user and return JWT access token
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Request Body
                  </p>
                  <pre className="bg-slate-900 rounded-lg p-4 text-xs text-slate-300 overflow-x-auto">
                    {`{
  "email": "user@example.com",
  "password": "hashed_password_here"
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* vNext: Architecture Diagram Section */}
      <section id="architecture" className="py-20 px-8 bg-slate-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-6 h-6 text-amber-600" />
            <h2 className="text-3xl font-bold text-slate-900">
              System Architecture
            </h2>
          </div>
          <p className="text-slate-600 mb-10 text-lg">
            Typical microservices architecture I design and implement
          </p>

          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              {/* Client */}
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-xl flex items-center justify-center mb-3 mx-auto border-2 border-slate-300">
                  <Globe className="w-8 h-8 text-slate-600" />
                </div>
                <p className="text-sm font-semibold text-slate-700">
                  Client Apps
                </p>
              </div>

              <ArrowRight className="w-6 h-6 text-slate-400 rotate-90 lg:rotate-0" />

              {/* API Gateway */}
              <div className="text-center">
                <div className="w-24 h-20 bg-amber-100 rounded-xl flex items-center justify-center mb-3 mx-auto border-2 border-amber-400">
                  <Shield className="w-8 h-8 text-amber-600" />
                </div>
                <p className="text-sm font-semibold text-slate-700">
                  API Gateway
                </p>
                <p className="text-xs text-slate-500">Auth + Rate Limit</p>
              </div>

              <ArrowRight className="w-6 h-6 text-slate-400 rotate-90 lg:rotate-0" />

              {/* Services */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-12 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-300">
                    <Cpu className="w-5 h-5 text-slate-600" />
                  </div>
                  <div className="w-16 h-12 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-300">
                    <Zap className="w-5 h-5 text-slate-600" />
                  </div>
                  <div className="w-16 h-12 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-300">
                    <MessageSquare className="w-5 h-5 text-slate-600" />
                  </div>
                </div>
                <p className="text-xs text-slate-500 text-center">
                  Microservices
                </p>
              </div>

              <ArrowRight className="w-6 h-6 text-slate-400 rotate-90 lg:rotate-0" />

              {/* Database */}
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-xl flex items-center justify-center mb-3 mx-auto border-2 border-slate-300">
                  <Layers className="w-8 h-8 text-slate-600" />
                </div>
                <p className="text-sm font-semibold text-slate-700">
                  Data Layer
                </p>
                <p className="text-xs text-slate-500">PostgreSQL + Redis</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Resume</h2>
          <p className="text-slate-600 mb-12 text-lg">
            Backend Engineer & System Architect
          </p>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Experience */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                  Experience
                </h3>
                <div className="space-y-6">
                  <div className="pl-6 border-l-2 border-amber-400">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-slate-900">
                        Project Engineer (TURBO)
                      </h4>
                      <span className="text-sm text-slate-500 font-medium">
                        Jul 2022 – Present
                      </span>
                    </div>
                    <p className="text-amber-600 font-medium mb-2">Wipro</p>
                    <p className="text-slate-600 leading-relaxed">
                      Architecting scalable backend systems, REST APIs, and
                      microservices. Building enterprise-grade infrastructure
                      with Node.js, Python, and Java. Delivering
                      high-performance solutions for 99.9%+ uptime and handling
                      100K+ daily requests.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                  Education
                </h3>
                <div className="pl-6 border-l-2 border-slate-300">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-slate-900">
                      B.Tech Computer Science & Engineering
                    </h4>
                    <span className="text-sm text-slate-500 font-medium">
                      2022
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                  Tech Stack
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Languages
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Python", "Java", "TypeScript", "Go"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Infrastructure
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "PostgreSQL",
                        "MongoDB",
                        "Redis",
                        "Docker",
                        "Kubernetes",
                        "AWS",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connect */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                  Connect
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/mk-knight23"
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">github.com/mk-knight23</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kazi-musharraf-0674871a4"
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">
                      linkedin.com/in/kazi-musharraf
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* What I'll Build Section */}
      <section id="what-ill-build" className="py-20 px-8 bg-slate-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="px-4 py-1 bg-amber-500 text-slate-900 rounded-full text-sm font-semibold">
              If You Hire Me
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            What I’ll Work On
          </h2>
          <p className="text-slate-600 mb-12 text-lg max-w-2xl">
            First 3–6 months as your Backend Engineer
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-white rounded-xl border border-slate-200">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-amber-600 font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Infrastructure Audit
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Analyze existing backend systems, database schemas, and API
                architecture. Identify bottlenecks, security vulnerabilities,
                and scalability limits. Create a prioritized roadmap for
                improvements.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-slate-200">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-amber-600 font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                API & Data Layer
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Design RESTful/GraphQL APIs with proper error handling,
                authentication, and rate limiting. Optimize database queries,
                implement caching strategies, and ensure data consistency.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-slate-200">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-amber-600 font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Scalability & Reliability
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Implement microservices architecture, message queues for async
                processing, and circuit breakers. Set up monitoring, alerting,
                and disaster recovery procedures.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-slate-200">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-amber-600 font-bold">04</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                DevOps & Deployment
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Build CI/CD pipelines, container orchestration with
                Docker/Kubernetes, and automated testing. Ensure zero-downtime
                deployments with quick rollback capabilities.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Let's Connect</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Open to senior backend engineering, distributed systems
            architecture, and technical leadership opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <span className="px-5 py-3 bg-slate-800 rounded-lg text-sm">
              <span className="text-slate-500">Location:</span>{" "}
              <span className="text-white font-medium">Hyderabad, India</span>
            </span>
            <span className="px-5 py-3 bg-slate-800 rounded-lg text-sm">
              <span className="text-slate-500">Availability:</span>{" "}
              <span className="text-emerald-400 font-semibold">
                Remote & Hybrid
              </span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:mk.knight970@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-slate-900 rounded-xl font-semibold hover:bg-amber-400 transition-colors"
            >
              <Mail className="w-5 h-5" /> Email Me
            </a>
            <a
              href="tel:+919765490536"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-slate-600 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-5 h-5" /> Call
            </a>
            <a
              href="https://github.com/mk-knight23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-slate-600 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kazi-musharraf-0674871a4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-slate-600 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-slate-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <p>&copy; 2025 Kazi Musharraf. All rights reserved.</p>
          <p>Backend Developer — Hyderabad, India</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
