import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPageUrl } from "@/utils";
import { PenSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogAPI } from "@/api/blogClient";
import { motion, AnimatePresence } from "framer-motion";


export default function Layout({ children, currentPageName }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [headerVisible, setHeaderVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [user, setUser] = React.useState(null);


  const isArticlePage = pathname.includes('/post');


  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
     
      setIsScrolled(currentScrollY > 20);
     
      if (isArticlePage) {
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setHeaderVisible(false);
        } else {
          setHeaderVisible(true);
        }
      } else {
        setHeaderVisible(true);
      }
     
      setLastScrollY(currentScrollY);
    };
   
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isArticlePage]);


  React.useEffect(() => {
    blogAPI.auth.me().then(setUser).catch(() => {});
  }, []);


  const navItems = [
    { name: "Home", path: createPageUrl("home") },
    { name: "Deep Dives", path: createPageUrl("deepdives") },
    { name: "Books", path: createPageUrl("books") },
    { name: "Archive", path: createPageUrl("archive") },
    { name: "About", path: createPageUrl("about") },
  ];


  return (
    <div className="min-h-screen bg-[#fefdfb]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');
       
        :root {
          --font-display: 'Playfair Display', 'Baskerville', 'Georgia', serif;
          --font-body: 'Spectral', 'Garamond', 'Georgia', serif;
          --font-sans: 'Crimson Pro', 'Georgia', serif;
          --font-accent: 'Cormorant', 'Baskerville', serif;
          --font-editorial: 'EB Garamond', 'Georgia', serif;
          --color-paper: #fefdfb;
          --color-cream: #faf8f4;
          --color-bone: #f5f3ee;
          --color-ink: #1a1614;
          --color-ink-medium: #2d2824;
          --color-ink-light: #4a4440;
          --color-ink-muted: #6b6560;
          --color-ink-pale: #8a847e;
          --color-border: #d4cfc7;
          --color-border-light: #e8e5df;
          --color-gold: #b8956a;
          --color-gold-dark: #8b7355;
          --color-gold-light: #d4b896;
        }
       
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "dlig" 1;
        }
       
        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }
       
        body {
          font-family: var(--font-body);
          color: var(--color-ink);
          background-color: var(--color-paper);
          font-size: 20px;
          line-height: 1.85;
          letter-spacing: 0.015em;
          font-weight: 400;
          overflow-x: hidden;
        }
       
        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-display);
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1.15;
          font-feature-settings: "kern" 1, "liga" 1, "dlig" 1, "swsh" 1;
        }
       
        h1 {
          font-size: 4.75rem;
          font-weight: 800;
          letter-spacing: -0.04em;
        }
        h2 {
          font-size: 3.25rem;
          font-weight: 700;
          letter-spacing: -0.035em;
        }
        h3 {
          font-size: 2.5rem;
          font-weight: 600;
          letter-spacing: -0.03em;
        }
       
        p {
          font-family: var(--font-body);
          font-size: 1.2rem;
          line-height: 1.9;
          letter-spacing: 0.012em;
          margin-bottom: 1.75rem;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          -webkit-hyphens: auto;
          -moz-hyphens: auto;
        }
       
        ::selection {
          background-color: var(--color-gold-dark);
          color: var(--color-paper);
        }
       
        /* Premium scrollbar */
        ::-webkit-scrollbar {
          width: 16px;
        }
       
        ::-webkit-scrollbar-track {
          background: var(--color-paper);
          border-left: 2px solid var(--color-border-light);
        }
       
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, var(--color-gold) 0%, var(--color-gold-dark) 100%);
          border-radius: 8px;
          border: 4px solid var(--color-paper);
          box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
        }
       
        ::-webkit-scrollbar-thumb:hover {
          background: var(--color-gold-dark);
          box-shadow: inset 0 0 15px rgba(0,0,0,0.15);
        }
       
        /* Ultra-smooth transitions */
        * {
          transition-property: background-color, border-color, color, fill, stroke, opacity, transform, box-shadow, filter, backdrop-filter;
          transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
          transition-duration: 600ms;
        }
       
        /* Letter spacing animation */
        a, button {
          transition: letter-spacing 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
       
        a:hover, button:hover {
          letter-spacing: 0.08em;
        }
       
        /* Drop cap */
        .article-content p:first-of-type::first-letter {
          font-family: var(--font-display);
          float: left;
          font-size: 6.5rem;
          line-height: 5rem;
          padding-right: 0.2em;
          margin-top: 0.15em;
          font-weight: 800;
          color: var(--color-gold-dark);
          text-shadow: 2px 2px 8px rgba(139, 115, 85, 0.15);
        }
       
        /* Pull quotes */
        .pull-quote {
          font-family: var(--font-accent);
          font-size: 2.25rem;
          line-height: 1.55;
          font-style: italic;
          font-weight: 500;
          color: var(--color-ink-light);
          border-left: 5px solid var(--color-gold);
          padding-left: 2.5rem;
          margin: 4rem 0;
          position: relative;
        }
       
        .pull-quote::before {
          content: '"';
          font-size: 4rem;
          position: absolute;
          left: -0.25rem;
          top: -1rem;
          color: var(--color-gold);
          opacity: 0.3;
        }
       
        /* Elegant link underlines */
        .elegant-link {
          text-decoration: none;
          background-image: linear-gradient(to right, var(--color-gold) 0%, var(--color-gold-dark) 100%);
          background-position: 0 100%;
          background-repeat: no-repeat;
          background-size: 0% 2px;
          transition: background-size 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
        }
       
        .elegant-link:hover {
          background-size: 100% 2px;
        }
       
        /* Image treatments */
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
       
        /* Focus states */
        *:focus-visible {
          outline: 2px solid var(--color-gold);
          outline-offset: 4px;
          border-radius: 2px;
        }
       
        /* Premium shadows */
        .shadow-premium {
          box-shadow:
            0 2px 8px rgba(26, 22, 20, 0.03),
            0 8px 24px rgba(26, 22, 20, 0.06),
            0 16px 48px rgba(26, 22, 20, 0.09);
        }
       
        .shadow-premium-hover:hover {
          box-shadow:
            0 4px 16px rgba(26, 22, 20, 0.04),
            0 12px 32px rgba(26, 22, 20, 0.08),
            0 24px 64px rgba(139, 115, 85, 0.12);
        }
       
        /* Gradient text */
        .gradient-text {
          background: linear-gradient(135deg, var(--color-ink) 0%, var(--color-gold-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
       
        /* Decorative dividers */
        .divider-ornamental {
          position: relative;
          text-align: center;
          margin: 4rem 0;
        }
       
        .divider-ornamental::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, transparent, var(--color-border), transparent);
        }
       
        .divider-ornamental::after {
          content: '❖';
          position: relative;
          background: var(--color-paper);
          padding: 0 2rem;
          color: var(--color-gold);
          font-size: 1.5rem;
        }
       
        /* Magazine-style bylines */
        .byline {
          font-family: var(--font-sans);
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-ink-muted);
          font-weight: 600;
        }
       
        /* Editorial numbers */
        .editorial-number {
          font-family: var(--font-display);
          font-size: 0.75rem;
          color: var(--color-gold-dark);
          letter-spacing: 0.15em;
          font-variant-numeric: oldstyle-nums;
        }
       
        /* Premium borders */
        .border-premium {
          border: 2px solid var(--color-border);
          position: relative;
        }
       
        .border-premium::before {
          content: '';
          position: absolute;
          inset: -6px;
          border: 1px solid var(--color-border-light);
          pointer-events: none;
        }
       
        /* Responsive images */
        @media (max-width: 768px) {
          h1 { font-size: 3rem; }
          h2 { font-size: 2.25rem; }
          h3 { font-size: 1.75rem; }
          p { font-size: 1.1rem; text-align: left; }
          .pull-quote { font-size: 1.75rem; }
        }
      `}</style>


      {/* Ultra-premium top border with shimmer effect */}
      <motion.div
        className="h-2 relative overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #b8956a 50%, transparent 100%)'
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)'
          }}
          animate={{
            x: ['-100%', '200%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>


      {/* Premium header with glass morphism */}
      <AnimatePresence>
        {headerVisible && (
          <motion.header
            className={`sticky top-0 z-50 transition-all duration-700 ${
              isScrolled
                ? 'bg-[#fefdfb]/98 backdrop-blur-2xl border-b-[3px] border-double border-[#d4cfc7]'
                : 'bg-[#fefdfb] border-b-2 border-[#e8e5df]'
            }`}
            style={{
              boxShadow: isScrolled ? '0 12px 48px rgba(26, 22, 20, 0.06), 0 4px 16px rgba(139, 115, 85, 0.04)' : 'none'
            }}
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="max-w-[1400px] mx-auto px-12">
              <div className="flex items-center justify-between py-8">
                {/* Logo with ornamental details */}
                <Link href={createPageUrl("home")}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="relative"
                  >
                    <motion.div
                      className="absolute -left-12 top-1/2 w-8 h-[2px] bg-gradient-to-r from-transparent to-[#b8956a]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <h1
                      className="text-6xl md:text-7xl font-display font-extrabold text-[#1a1614] tracking-tight"
                      style={{
                        fontFamily: 'Playfair Display, Georgia, serif',
                        letterSpacing: '-0.04em',
                        fontWeight: 900,
                        textShadow: '0 3px 24px rgba(184, 149, 106, 0.12)'
                      }}
                    >
                      The Journal
                    </h1>
                    <motion.div
                      className="h-[4px] bg-gradient-to-r from-[#b8956a] via-[#8b7355] to-transparent mt-2"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1.2, delay: 0.4 }}
                    />
                    <motion.p
                      className="text-[10px] uppercase tracking-[0.3em] text-[#8a847e] mt-2 font-sans"
                      style={{fontFamily: 'Crimson Pro, Georgia, serif', fontWeight: 500}}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      Est. 2024
                    </motion.p>
                  </motion.div>
                </Link>


                {/* Navigation with premium styling */}
                <nav className="hidden md:flex items-center gap-14">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: index * 0.15 }}
                    >
                      <Link
                        href={item.path}
                        className={`text-[13px] uppercase tracking-[0.28em] font-sans relative group ${
                          pathname === item.path
                            ? 'text-[#1a1614] font-bold'
                            : 'text-[#6b6560] hover:text-[#1a1614]'
                        }`}
                        style={{
                          fontFamily: 'Crimson Pro, Georgia, serif',
                          fontWeight: pathname === item.path ? 700 : 500,
                          transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
                        }}
                      >
                        <motion.span
                          className="inline-block relative"
                          whileHover={{ y: -4 }}
                          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        >
                          {item.name}
                          {pathname === item.path && (
                            <>
                              <motion.div
                                className="absolute -bottom-4 left-0 right-0 h-[3px] bg-gradient-to-r from-[#b8956a] to-[#8b7355]"
                                layoutId="navUnderline"
                                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                              />
                              <motion.div
                                className="absolute -bottom-[18px] left-1/2 transform -translate-x-1/2 w-[6px] h-[6px] bg-[#b8956a] rotate-45"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                              />
                            </>
                          )}
                        </motion.span>
                        <motion.div
                          className="absolute -bottom-4 left-0 right-0 h-[2px] bg-[#b8956a] opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.5 }}
                        />
                      </Link>
                    </motion.div>
                  ))}
                 
                  <AnimatePresence>
                    {user && (
                      <>
                        {/* New Profile Link */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                        >
                          <Link
                            href={createPageUrl("profile")}
                            className={`text-[13px] uppercase tracking-[0.28em] font-sans relative group ${
                              pathname === createPageUrl("profile")
                                ? 'text-[#1a1614] font-bold'
                                : 'text-[#6b6560] hover:text-[#1a1614]'
                            }`}
                            style={{
                              fontFamily: 'Crimson Pro, Georgia, serif',
                              fontWeight: pathname === createPageUrl("profile") ? 700 : 500,
                              transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
                            }}
                          >
                            <motion.span
                              className="inline-block"
                              whileHover={{ y: -4 }}
                              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                            >
                              Profile
                            </motion.span>
                          </Link>
                        </motion.div>
                       
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Link
                            href={createPageUrl("myposts")}
                            className={`text-[13px] uppercase tracking-[0.28em] font-sans relative group ${
                              pathname === createPageUrl("myposts")
                                ? 'text-[#1a1614] font-bold'
                                : 'text-[#6b6560] hover:text-[#1a1614]'
                            }`}
                            style={{
                              fontFamily: 'Crimson Pro',
                              fontWeight: pathname === createPageUrl("myposts") ? 700 : 500,
                              transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
                            }}
                          >
                            <motion.span
                              className="inline-block"
                              whileHover={{ y: -4 }}
                              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                            >
                              My Posts
                            </motion.span>
                          </Link>
                        </motion.div>
                       
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          whileHover={{
                            scale: 1.1,
                            y: -4,
                            boxShadow: '0 20px 56px rgba(139, 115, 85, 0.3)'
                          }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        >
                          <Link href={createPageUrl("write")}>
                            <Button
                              className="relative bg-gradient-to-br from-[#1a1614] via-[#2d2824] to-[#1a1614] hover:from-[#2d2824] hover:via-[#1a1614] hover:to-[#2d2824] text-[#fefdfb] font-sans text-[13px] uppercase tracking-[0.28em] rounded-none px-10 py-4 border-[3px] border-double border-[#b8956a] overflow-hidden group"
                              style={{
                                fontFamily: 'Crimson Pro',
                                fontWeight: 700,
                                boxShadow: '0 10px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
                              }}
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '200%' }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                              />
                              <PenSquare className="w-5 h-5 mr-3 relative z-10" />
                              <span className="relative z-10">Write</span>
                            </Button>
                          </Link>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </nav>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>


      {/* Main content with fade transition */}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>


      {/* Premium footer */}
      <motion.footer
        className="border-t-4 border-double border-[#d4cfc7] mt-56 relative overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #fefdfb 0%, #faf8f4 50%, #f5f3ee 100%)'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1614' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        />
       
        <div className="max-w-[1400px] mx-auto px-12 py-28 relative z-10">
          {/* Ornamental divider */}
          <motion.div
            className="w-40 h-[5px] bg-gradient-to-r from-[#b8956a] via-[#8b7355] to-transparent mx-auto mb-20 relative"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#b8956a] rotate-45" />
          </motion.div>
         
          <div className="text-center">
            {/* Logo */}
            <motion.h2
              className="text-7xl font-display font-extrabold mb-10 text-[#1a1614]"
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                letterSpacing: '-0.04em',
                fontWeight: 900,
                textShadow: '0 5px 28px rgba(184, 149, 106, 0.15)'
              }}
              whileHover={{ scale: 1.04, textShadow: '0 8px 36px rgba(184, 149, 106, 0.25)' }}
              transition={{ duration: 0.5 }}
            >
              The Journal
            </motion.h2>
           
            {/* Tagline */}
            <p className="text-[#6b6560] mb-20 font-body text-2xl max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Spectral, Georgia, serif'}}>
              A space for thoughtful writing and meaningful conversation.<br/>
              <span className="italic text-xl text-[#8a847e]">Where ideas find their voice and readers find their depth.</span>
            </p>
           
            {/* Navigation links */}
            <div className="flex flex-wrap justify-center gap-12 md:gap-20 text-sm uppercase tracking-[0.28em] font-sans mb-16" style={{fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '13px', fontWeight: 500}}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  whileHover={{ y: -5, scale: 1.1, color: '#8b7355' }}
                >
                  <Link href={item.path} className="text-[#6b6560] hover:text-[#1a1614] transition-all duration-600 relative group">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#b8956a] group-hover:w-full transition-all duration-600" />
                  </Link>
                </motion.div>
              ))}
            </div>
           
            {/* Ornamental divider */}
            <motion.div
              className="w-28 h-[3px] bg-gradient-to-r from-transparent via-[#d4cfc7] to-transparent mx-auto my-16"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
           
            {/* Copyright and quote */}
            <motion.div
              className="text-sm text-[#8a847e] font-sans"
              style={{fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '14px', fontWeight: 400}}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.6 }}
            >
              <div className="mb-6 tracking-[0.18em]">© 2024 The Journal. All rights reserved.</div>
              <div className="text-base italic max-w-2xl mx-auto leading-[1.9] mb-6" style={{fontFamily: 'Spectral, Georgia, serif', fontStyle: 'italic'}}>
                "The art of writing is the art of discovering what you believe."
              </div>
              <div className="text-[11px] tracking-[0.25em] uppercase not-italic opacity-50 font-sans">— Gustave Flaubert</div>
            </motion.div>
          </div>
        </div>
       
        {/* Bottom border with shimmer */}
        <motion.div
          className="h-2 relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #b8956a 50%, transparent 100%)'
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)'
            }}
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1
            }}
          />
        </motion.div>
      </motion.footer>
    </div>
  );
}
