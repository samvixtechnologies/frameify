"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Upload, Zap, Flame } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion, Variants } from "framer-motion";

import { categories, products } from "@/lib/mock-data";

const bestSellers = products.filter(p => p.isTrending);

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-background">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32 pb-24 md:pb-12 bg-white dark:bg-transparent">
        {/* Light Mode Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:hidden" />
        
        {/* Abstract Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-primary/10 dark:bg-primary/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-accent/10 dark:bg-accent/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '2s' }} />
        
        <Image
          src="/images/hero.png"
          alt="Trendy Gen Z room setup"
          fill
          className="object-cover object-center opacity-[0.03] dark:opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white dark:from-transparent dark:via-background/50 dark:to-background" />
        <div className="relative z-10 container px-4 md:px-6 text-center space-y-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md mb-6">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-bold tracking-wide text-zinc-700 dark:text-zinc-300">NEW DRIFT COLLECTION OUT NOW</span>
            </div>
            <h1 className="text-[2.5rem] leading-tight sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-zinc-900 dark:text-white drop-shadow-sm dark:drop-shadow-2xl mb-4 md:mb-6">
              TURN YOUR ROOM INTO YOUR <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-accent animate-gradient bg-300%">VIBE.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto font-medium"
          >
            Shop aesthetic posters, anime collections, gaming prints, and custom posters made exclusively for Gen Z.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Link href="/shop" className={cn(buttonVariants({ size: "lg" }), "h-14 px-10 text-lg font-bold rounded-full bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(147,51,234,0.3)] dark:shadow-[0_0_40px_rgba(147,51,234,0.5)] transition-all hover:scale-105")}>
              Shop Posters
            </Link>
            <Link href="/custom" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-14 px-10 text-lg font-bold rounded-full border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 backdrop-blur-md text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all hover:scale-105")}>
              Create Custom
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Infinite Marquee */}
      <div className="relative py-4 bg-primary overflow-hidden rotate-1 scale-105 shadow-2xl z-20 -my-4 border-y border-purple-400 dark:border-purple-600">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-2xl font-black text-white dark:text-black tracking-widest mx-6 uppercase flex items-center gap-6 drop-shadow-sm">
              Premium Quality <Star className="h-6 w-6 fill-white dark:fill-black" /> Fast Delivery <Zap className="h-6 w-6 fill-white dark:fill-black" /> Secure Payments <Star className="h-6 w-6 fill-white dark:fill-black" />
            </span>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-20 md:py-24 container px-4 md:px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex justify-between items-end mb-12"
        >
          <div className="space-y-2">
            <span className="text-primary font-mono text-sm font-bold tracking-[0.2em] uppercase">// THE COLLECTION</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-black dark:text-white">
              <span className="drop-shadow-sm">Shop by</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-md">Vibe</span>
            </h2>
            <p className="text-xl text-zinc-600 dark:text-muted-foreground font-medium pt-2">Find the aesthetic that speaks to you.</p>
          </div>
          <Link href="/categories" className="hidden sm:flex items-center text-primary dark:text-accent hover:text-primary/80 dark:hover:text-accent/80 font-bold text-lg transition-colors group">
            Explore All <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {categories.map((category) => (
                <CarouselItem key={category.name} className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Link href={`/shop/${category.name.toLowerCase()}`} className="group block">
                    <Card className="overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm relative h-[320px] rounded-3xl hover:border-primary/50 transition-all duration-500 shadow-md">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 dark:opacity-60 group-hover:opacity-100 grayscale-[20%] dark:grayscale-[30%] group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent dark:from-black dark:via-black/40" />
                      <CardContent className="absolute bottom-0 w-full p-8 text-white">
                        <h3 className="text-3xl font-black mb-2 flex items-center gap-3 drop-shadow-md tracking-tight">
                          {category.icon} {category.name}
                        </h3>
                        <p className="text-zinc-200 dark:text-zinc-300 font-bold bg-white/20 dark:bg-white/10 backdrop-blur-md inline-block px-3 py-1 rounded-full text-sm border border-white/20 dark:border-white/10">
                          {category.count} Drops
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="h-14 w-14 border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white" />
            <CarouselNext className="h-14 w-14 border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white" />
          </Carousel>
        </motion.div>
      </section>

      {/* Trending / Best Sellers */}
      <section className="py-20 md:py-24 bg-slate-50 dark:bg-zinc-950/50 border-y border-black/5 dark:border-white/5 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-between items-end mb-12"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-orange-500 animate-pulse" />
                <span className="text-orange-500 font-mono text-sm font-bold tracking-[0.2em] uppercase">// HIGH DEMAND</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-black dark:text-white">
                <span className="drop-shadow-sm">Trending</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 drop-shadow-md">Now</span>
              </h2>
              <p className="text-xl text-zinc-600 dark:text-muted-foreground font-medium pt-2">The most hyped prints this week.</p>
            </div>
            <Link href="/shop?sort=trending" className={cn(buttonVariants({ variant: "ghost" }), "hidden sm:flex text-primary hover:text-primary hover:bg-primary/10 font-bold")}>
              View Top 50 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {bestSellers.map((product) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <Card className="group overflow-hidden border border-black/5 dark:border-white/5 bg-white dark:bg-black/40 backdrop-blur-xl hover:border-primary/30 dark:hover:border-accent/40 transition-all duration-500 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] -translate-y-1 hover:-translate-y-2">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 dark:bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-black/5 dark:border-white/10 flex items-center text-yellow-500 text-[10px] font-bold shadow-sm">
                      <Star className="h-3 w-3 fill-current mr-1" />
                      {product.rating}
                    </div>
                    
                    <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent flex gap-2 translate-y-4 group-hover:translate-y-0">
                      <Button className="w-full bg-white text-black hover:bg-zinc-100 font-bold shadow-lg rounded-full h-8 text-xs" size="sm">Add to Cart</Button>
                    </div>
                  </div>
                  <CardContent className="p-3 md:p-4">
                    <h3 className="font-bold text-sm md:text-base mb-1 text-zinc-900 dark:text-white group-hover:text-primary transition-colors truncate">{product.title}</h3>
                    <p className="text-primary dark:text-accent font-black text-base md:text-lg">{product.formattedPrice}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Poster Builder CTA */}
      <section className="py-20 md:py-28 container px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 dark:bg-accent/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center p-8 md:p-12 lg:p-16">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-blue-600 dark:text-blue-400 font-mono text-sm font-bold tracking-[0.2em] uppercase">// CUSTOM BUILDER</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black dark:text-white uppercase drop-shadow-sm">
                  Make it <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-blue-600 dark:from-accent dark:via-cyan-400 dark:to-blue-500 drop-shadow-md">1 of 1.</span>
                </h2>
              </div>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium">
                Upload your photos. Add custom text. Choose your vibe. We&apos;ll print it on gallery-grade paper and ship it to your door.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Upload any image from your camera roll",
                  "Pick a style: Anime, Cyberpunk, Vintage...",
                  "Add a custom title & typography",
                ].map((step, i) => (
                  <li key={i} className="flex items-center text-zinc-700 dark:text-zinc-200 font-bold text-lg">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-white/10 border border-black/5 dark:border-white/20 text-zinc-900 dark:text-white flex items-center justify-center mr-4 text-sm font-black shadow-sm dark:shadow-inner">
                      {i + 1}
                    </div>
                    {step}
                  </li>
                ))}
              </ul>
              <Link href="/custom" className={cn(buttonVariants({ size: "lg" }), "h-14 px-10 text-lg font-bold rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-105 flex items-center w-max")}>
                <Upload className="mr-2 h-5 w-5" /> Launch Builder
              </Link>
            </div>
            
            <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/20 transform md:rotate-3 hover:rotate-0 transition-transform duration-500">
               <Image
                  src="/images/anime.png"
                  alt="Custom Poster Example"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="bg-white/90 dark:bg-black/40 backdrop-blur-xl p-4 rounded-2xl border border-black/10 dark:border-white/10 shadow-lg">
                      <p className="text-xs text-primary dark:text-accent font-bold mb-1 uppercase tracking-wider">Custom Print</p>
                      <p className="text-black dark:text-white font-bold text-lg">Tokyo Drift Edition</p>
                   </div>
                </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 8s ease infinite;
        }
      `}} />
    </div>
  );
}
