'use client';

import React from 'react';
import { ArrowRight, Award, Microscope } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#a855f7]"></div>
            <div className="font-semibold text-2xl tracking-tighter">Lumina</div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#research" className="hover:text-[#00f0ff] transition-colors">Research</a>
            <a href="#publications" className="hover:text-[#00f0ff] transition-colors">Publications</a>
            <a href="#benchmarks" className="hover:text-[#00f0ff] transition-colors">Benchmarks</a>
            <a href="#about" className="hover:text-[#00f0ff] transition-colors">About</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="px-6 py-2.5 text-sm font-medium border border-white/30 rounded-full hover:bg-white/5 transition-all">Contact</a>
            <a href="https://github.com/achyutunitarun-coder/lumina-ai-research-lab" target="_blank" className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-all flex items-center gap-2">
              GitHub <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-32 relative flex items-center min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(#00f0ff_0.8px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 px-4 py-1 text-sm">
            <span className="text-emerald-400">●</span> &nbsp; Open Research Lab
          </div>
          
          <h1 className="text-7xl md:text-[5.5rem] leading-none font-semibold tracking-tighter mb-8">
            Illuminating the<br />Future of<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] via-[#a855f7] to-[#00f0ff]">Intelligence</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-12">
            Lumina AI Research Lab advances artificial intelligence through rigorous research, 
            transparent benchmarking, agentic systems, and open collaboration.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#research" className="group px-10 py-4 bg-white text-black rounded-2xl font-medium flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all duration-200">
              Explore Our Research
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </a>
            <a href="#publications" className="px-10 py-4 border border-white/30 rounded-2xl font-medium hover:bg-white/5 transition-all">Latest Publications</a>
          </div>
        </div>
      </section>

      {/* More sections... */}
      <footer className="border-t border-white/10 py-20 text-center text-sm text-gray-500">
        © 2026 Lumina AI Research Lab. All rights reserved.
      </footer>
    </div>
  );
}
