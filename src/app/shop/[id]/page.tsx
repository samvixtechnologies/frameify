"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, Truck, ShieldCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getProductById } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";

// Mock alternate images since our products only have 1 image
const getAlternateImages = (baseImg: string) => [
  baseImg,
  "/images/hero.png",
  "/images/anime.png"
];

const SIZES = [
  { id: "A4", name: "A4 (21 x 29.7 cm)", priceMultiplier: 1 },
  { id: "A3", name: "A3 (29.7 x 42 cm)", priceMultiplier: 1.5 },
  { id: "A2", name: "A2 (42 x 59.4 cm)", priceMultiplier: 2.2 },
];

const FRAMES = [
  { id: "none", name: "No Frame (Print Only)", priceAdd: 0 },
  { id: "black", name: "Premium Black Frame", priceAdd: 500 },
  { id: "wood", name: "Natural Wood Frame", priceAdd: 700 },
];

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(SIZES[0]);
  const [selectedFrame, setSelectedFrame] = useState(FRAMES[0]);

  const images = getAlternateImages(product.image);
  
  const finalPrice = Math.round((product.price * selectedSize.priceMultiplier) + selectedFrame.priceAdd);

  return (
    <div className="min-h-screen bg-white dark:bg-background pt-24 md:pt-32 pb-20">
      <div className="container px-4 md:px-6">
        
        <Link href="/shop" className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white font-bold mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-2xl">
              <Image 
                src={images[selectedImageIndex]}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={cn(
                    "relative aspect-[3/4] rounded-2xl overflow-hidden border-2 transition-all",
                    selectedImageIndex === idx 
                      ? "border-primary shadow-[0_0_15px_rgba(147,51,234,0.3)]" 
                      : "border-transparent hover:border-black/20 dark:hover:border-white/20"
                  )}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover opacity-80 hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Details & Selection */}
          <div className="flex flex-col pt-4 lg:pt-10">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-black/5 dark:bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-primary dark:text-accent">
                  {product.category}
                </span>
                <span className="px-3 py-1 bg-black/5 dark:bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
                  {product.vibe}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white mb-4">
                {product.title}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-yellow-500 font-bold">
                  <Star className="h-5 w-5 fill-current mr-1" />
                  {product.rating}
                </div>
                <span className="text-zinc-400 dark:text-zinc-600">|</span>
                <span className="text-zinc-600 dark:text-zinc-400 font-medium">124 Reviews</span>
              </div>
              <p className="text-4xl font-black text-primary dark:text-accent tracking-tighter">
                ₹{finalPrice.toLocaleString('en-IN')}
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mt-4 text-lg">
                {product.description}
              </p>
            </div>

            <div className="space-y-8 mb-10">
              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900 dark:text-white mb-3">Select Size</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SIZES.map(size => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "p-4 rounded-2xl border-2 text-left transition-all",
                        selectedSize.id === size.id
                          ? "border-primary bg-primary/5 shadow-md"
                          : "border-black/10 dark:border-white/10 bg-transparent hover:border-black/30 dark:hover:border-white/30"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-zinc-900 dark:text-white">{size.name.split(' ')[0]}</span>
                        {selectedSize.id === size.id && <Check className="h-4 w-4 text-primary" />}
                      </div>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 block mt-1">
                        {size.name.substring(size.name.indexOf('('))}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Frame Selection */}
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900 dark:text-white mb-3">Frame Options</h3>
                <div className="grid grid-cols-1 gap-3">
                  {FRAMES.map(frame => (
                    <button
                      key={frame.id}
                      onClick={() => setSelectedFrame(frame)}
                      className={cn(
                        "p-4 rounded-2xl border-2 flex items-center justify-between transition-all",
                        selectedFrame.id === frame.id
                          ? "border-primary bg-primary/5 shadow-md"
                          : "border-black/10 dark:border-white/10 bg-transparent hover:border-black/30 dark:hover:border-white/30"
                      )}
                    >
                      <span className="font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                        {selectedFrame.id === frame.id && <Check className="h-4 w-4 text-primary" />}
                        {frame.name}
                      </span>
                      <span className="text-sm font-bold text-zinc-500 dark:text-zinc-400">
                        {frame.priceAdd > 0 ? `+₹${frame.priceAdd}` : 'Included'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button className="w-full h-16 rounded-full text-lg font-black uppercase tracking-widest shadow-[0_10px_40px_rgba(147,51,234,0.3)] hover:shadow-[0_10px_40px_rgba(147,51,234,0.6)] transition-all hover:scale-[1.02]">
              Add to Cart - ₹{finalPrice.toLocaleString('en-IN')}
            </Button>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-black/10 dark:border-white/10">
              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold">Free Shipping over ₹1499</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold">100% Quality Guarantee</span>
              </div>
            </div>

            <div className="mt-10">
              <Accordion className="w-full">
                <AccordionItem value="details" className="border-black/10 dark:border-white/10">
                  <AccordionTrigger className="font-bold text-lg hover:no-underline">Product Details</AccordionTrigger>
                  <AccordionContent className="text-zinc-600 dark:text-zinc-400">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Printed on 300 GSM premium matte paper.</li>
                      <li>Fade-resistant archival inks for vibrant colors.</li>
                      <li>Frames are made of high-quality synthetic wood with acrylic glass.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping" className="border-black/10 dark:border-white/10">
                  <AccordionTrigger className="font-bold text-lg hover:no-underline">Shipping & Returns</AccordionTrigger>
                  <AccordionContent className="text-zinc-600 dark:text-zinc-400">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Dispatched within 48 hours.</li>
                      <li>Delivery takes 3-5 business days across India.</li>
                      <li>7-day return policy for damaged or defective items.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
