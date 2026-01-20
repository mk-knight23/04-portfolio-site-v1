import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Search, Bookmark, Clock, MessageSquare, ArrowRight, User, Home } from 'lucide-react';

const posts = [
    {
        id: 1,
        title: "Why Every Developer Should Have A Blog",
        excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes...",
        date: "Published 2 days ago",
        readTime: "5 min read",
        comments: 8,
        image: "/assets/images/blog/blog-post-thumb-1.jpg"
    },
    {
        id: 2,
        title: "A Guide to Becoming a Full-Stack Developer",
        excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes...",
        date: "Published 3 months ago",
        readTime: "3 min read",
        comments: 26,
        image: "/assets/images/blog/blog-post-thumb-2.jpg"
    },
    {
        id: 3,
        title: "High Performance JavaScript",
        excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes...",
        date: "Published 1 month ago",
        readTime: "8 min read",
        comments: 12,
        image: "/assets/images/blog/blog-post-thumb-3.jpg"
    },
    {
        id: 4,
        title: "Top 5 JavaScript Frameworks",
        excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes...",
        date: "Published 2 months ago",
        readTime: "15 min read",
        comments: 3,
        image: "/assets/images/blog/blog-post-thumb-4.jpg"
    },
    {
        id: 5,
        title: "Learn React in 24 Hours",
        excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes...",
        date: "Published 2 months ago",
        readTime: "10 min read",
        comments: 23,
        image: "/assets/images/blog/blog-post-thumb-5.jpg"
    },
    {
        id: 6,
        title: "About Remote Working",
        excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes...",
        date: "Published 3 months ago",
        readTime: "2 min read",
        comments: 1,
        image: "/assets/images/blog/blog-post-thumb-6.jpg"
    }
];

function App() {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-full md:w-80 bg-slate-900 text-white p-8 md:fixed md:h-full flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    MK KNIGHT'S BLOG
                </h1>

                <div className="mb-8 text-center">
                    <img
                        src="/assets/images/bat.jpg"
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-white/10 mb-4 mx-auto object-cover"
                    />
                    <p className="text-slate-300 text-sm leading-relaxed px-4">
                        Hi, my name is MK Knight. Full-stack developer & technical blogger. Exploring the future of web tech.
                    </p>
                </div>

                <div className="flex gap-4 mb-8">
                    <SocialLink icon={<Twitter className="w-5 h-5" />} href="https://twitter.com/mk_knight_23" />
                    <SocialLink icon={<Linkedin className="w-5 h-5" />} href="https://www.linkedin.com/in/mk-knight-1373271b8" />
                    <SocialLink icon={<Github className="w-5 h-5" />} href="https://github.com/mk-knight23" />
                </div>

                <nav className="w-full space-y-2">
                    <NavLink icon={<Home className="w-5 h-5" />} label="Blog Home" active={activeTab === 'home'} onClick={() => setActiveTab('home')} />
                    <NavLink icon={<Bookmark className="w-5 h-5" />} label="Blog Post" active={activeTab === 'post'} onClick={() => setActiveTab('post')} />
                    <NavLink icon={<User className="w-5 h-5" />} label="About Me" active={activeTab === 'about'} onClick={() => setActiveTab('about')} />
                </nav>

                <button className="mt-auto w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20">
                    Get in Touch
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-80">
                <header className="bg-white border-b border-gray-200 py-16 px-8 text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">DevBlog - Developer Focused Template</h2>
                    <p className="text-gray-600 text-lg mb-8">Welcome to my blog. Subscribe and get my latest posts in your inbox.</p>
                    <div className="max-w-md mx-auto flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="flex-1 bg-gray-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
                            Subscribe
                        </button>
                    </div>
                </header>

                <div className="p-8 md:p-12 max-w-5xl mx-auto space-y-12">
                    {posts.map((post, idx) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col md:flex-row gap-8 items-start bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
                        >
                            <div className="w-full md:w-64 h-48 rounded-xl overflow-hidden flex-shrink-0 bg-gray-200">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><BookMarked className="w-3 h-3" /> {post.readTime}</span>
                                    <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {post.comments} comments</span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {post.excerpt}
                                </p>

                                <button className="flex items-center gap-2 text-blue-600 font-bold group/btn">
                                    Read more <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <footer className="py-12 px-8 text-center text-gray-500 border-t border-gray-200">
                    <p>Designed with <span className="text-red-500">❤</span> by MK KNIGHT for developers</p>
                </footer>
            </main>
        </div>
    );
}

function SocialLink({ icon, href }: { icon: React.ReactNode, href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-slate-400 hover:text-white"
        >
            {icon}
        </a>
    );
}

function NavLink({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-4 px-6 py-3 rounded-xl transition-all font-medium ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
        >
            {icon}
            {label}
        </button>
    );
}

import { BookMarked } from 'lucide-react'; // Fix missing import

export default App;
