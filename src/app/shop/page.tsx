"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Filter, Star, SlidersHorizontal, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categories, products } from "@/lib/mock-data";

const allVibes = Array.from(new Set(products.map(p => p.vibe)));

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedVibes, setSelectedVibes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("trending");
  const [visibleCount, setVisibleCount] = useState(12);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
    setVisibleCount(12); // Reset pagination on filter change
  };

  const toggleVibe = (vibe: string) => {
    setSelectedVibes(prev => 
      prev.includes(vibe) ? prev.filter(v => v !== vibe) : [...prev, vibe]
    );
    setVisibleCount(12); // Reset pagination on filter change
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }
    
    if (selectedVibes.length > 0) {
      result = result.filter(p => selectedVibes.includes(p.vibe));
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "trending":
      default:
        result.sort((a, b) => (b.isTrending === a.isTrending ? 0 : b.isTrending ? 1 : -1));
        break;
    }

    return result;
  }, [selectedCategories, selectedVibes, sortBy]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const SidebarFilters = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-black text-lg mb-4 text-zinc-900 dark:text-white uppercase tracking-tight">Filters</h3>
        <Accordion className="w-full">
          <AccordionItem value="categories" className="border-black/5 dark:border-white/10">
            <AccordionTrigger className="hover:no-underline font-bold text-zinc-800 dark:text-zinc-200">Categories</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                {categories.map((cat) => (
                  <div key={cat.name} className="flex items-center space-x-3">
                    <Checkbox 
                      id={`cat-${cat.name}`} 
                      checked={selectedCategories.includes(cat.name)}
                      onCheckedChange={() => toggleCategory(cat.name)}
                      className="border-zinc-300 dark:border-zinc-700 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <label 
                      htmlFor={`cat-${cat.name}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-600 dark:text-zinc-400 cursor-pointer"
                    >
                      {cat.name} <span className="text-zinc-400 dark:text-zinc-500 text-xs ml-1">({cat.count})</span>
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="vibes" className="border-black/5 dark:border-white/10">
            <AccordionTrigger className="hover:no-underline font-bold text-zinc-800 dark:text-zinc-200">Vibes</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                {allVibes.map((vibe) => (
                  <div key={vibe} className="flex items-center space-x-3">
                    <Checkbox 
                      id={`vibe-${vibe}`} 
                      checked={selectedVibes.includes(vibe)}
                      onCheckedChange={() => toggleVibe(vibe)}
                      className="border-zinc-300 dark:border-zinc-700 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <label 
                      htmlFor={`vibe-${vibe}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-600 dark:text-zinc-400 cursor-pointer"
                    >
                      {vibe}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-background pt-24 md:pt-32 pb-20">
      <div className="container px-4 md:px-6">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white drop-shadow-sm">
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-md">Drops</span>
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 font-medium mt-2">
              Showing {filteredProducts.length} posters
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 md:flex md:items-center md:gap-4 w-full md:w-auto">
            {/* Mobile Filters Trigger */}
            <Sheet>
              <SheetTrigger 
                render={
                  <Button variant="outline" className="md:hidden w-full border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900 font-bold" />
                }
              >
                <Filter className="mr-2 h-4 w-4" /> Filters
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-white dark:bg-zinc-950 border-r border-black/10 dark:border-white/10 pt-16 overflow-y-auto">
                <SheetTitle className="sr-only">Filters</SheetTitle>
                <SidebarFilters />
              </SheetContent>
            </Sheet>

            {/* Sort Dropdown */}
            <Select value={sortBy} onValueChange={(v) => { if (v) { setSortBy(v); setVisibleCount(12); } }}>
              <SelectTrigger className="w-full md:w-[180px] bg-zinc-50 dark:bg-zinc-900 border-black/10 dark:border-white/10 font-bold">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="trending">Trending</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 shrink-0">
            <div className="sticky top-32">
              <SidebarFilters />
            </div>
          </aside>

          {/* Main Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-black/5 dark:border-white/5">
                <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-2">No drops found.</h3>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium">Try adjusting your filters to find what you&apos;re looking for.</p>
                <Button 
                  onClick={() => { setSelectedCategories([]); setSelectedVibes([]); }}
                  className="mt-6 font-bold"
                >
                  Clear all filters
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
                  {visibleProducts.map((product) => (
                    <Card key={product.id} className="group overflow-hidden border border-black/5 dark:border-white/5 bg-white dark:bg-black/40 backdrop-blur-xl hover:border-primary/30 dark:hover:border-accent/40 transition-all duration-500 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] -translate-y-1 hover:-translate-y-2">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
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
                  ))}
                </div>

                {visibleCount < filteredProducts.length && (
                  <div className="mt-12 flex justify-center">
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={() => setVisibleCount(prev => prev + 12)}
                      className="rounded-full border-black/20 dark:border-white/20 bg-zinc-50 dark:bg-white/5 font-bold px-10 h-12 hover:bg-zinc-100 dark:hover:bg-white/10"
                    >
                      Load More Drops
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
