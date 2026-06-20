"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/theme-toggle';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 ${
        isScrolled 
          ? "bg-white/70 dark:bg-black/60 backdrop-blur-2xl border border-black/10 dark:border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-3" 
          : "bg-transparent border border-transparent py-4"
      } rounded-full`}
    >
      <div className="flex items-center justify-between px-4 md:px-6">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="font-black text-2xl tracking-tighter text-black dark:text-white drop-shadow-sm dark:drop-shadow-md transition-colors">
            FRAMEIFY<span className="text-primary dark:text-accent group-hover:text-accent dark:group-hover:text-primary transition-colors animate-pulse">.</span>
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-black/5 dark:bg-white/5 px-2 py-1.5 rounded-full border border-black/5 dark:border-white/10 backdrop-blur-md shadow-inner">
          {[
            { name: "Shop", href: "/shop" },
            { name: "Categories", href: "/categories" },
            { name: "Custom", href: "/custom" },
          ].map((item, i) => (
            <Link 
              key={i} 
              href={item.href}
              className={`relative px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                item.name === "Custom" 
                  ? "text-primary dark:text-accent hover:bg-primary dark:hover:bg-accent hover:text-white dark:hover:text-black shadow-[0_0_15px_rgba(0,0,0,0)] hover:shadow-[0_0_15px_rgba(147,51,234,0.4)] dark:hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]" 
                  : "text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="hidden lg:block relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 dark:text-zinc-400 group-focus-within:text-primary transition-colors" />
            <input
              type="search"
              placeholder="Search posters..."
              className="h-11 w-[220px] rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-2 pl-11 text-sm text-black dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-white/10 focus:w-[260px] transition-all duration-300 shadow-inner"
            />
          </div>
          
          <ThemeToggle />
          
          <Button variant="ghost" size="icon" className="rounded-full h-11 w-11 text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all border border-transparent hover:border-black/10 dark:hover:border-white/10 hidden sm:flex">
            <User className="h-5 w-5" />
          </Button>
          
          <div className="relative">
            <Button variant="ghost" size="icon" className="rounded-full h-11 w-11 text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all border border-transparent hover:border-black/10 dark:hover:border-white/10">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-white flex items-center justify-center border-2 border-white dark:border-black">
              2
            </span>
          </div>

          <Sheet>
            <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-full h-11 w-11 text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 border border-transparent hover:border-black/10 dark:hover:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-all">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 dark:bg-black/95 backdrop-blur-3xl border-l border-black/10 dark:border-white/10">
              <SheetTitle className="text-left font-black tracking-tighter text-2xl text-black dark:text-white">
                FRAMEIFY<span className="text-primary dark:text-accent">.</span>
              </SheetTitle>
              <div className="flex flex-col space-y-6 pt-16">
                <Link href="/shop" className="text-4xl font-black text-zinc-600 dark:text-zinc-300 hover:text-primary transition-colors hover:translate-x-2 transform duration-300">Shop.</Link>
                <Link href="/categories" className="text-4xl font-black text-zinc-600 dark:text-zinc-300 hover:text-primary transition-colors hover:translate-x-2 transform duration-300">Categories.</Link>
                <Link href="/custom" className="text-4xl font-black text-primary dark:text-accent hover:text-black dark:hover:text-white transition-colors hover:translate-x-2 transform duration-300">Custom.</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
