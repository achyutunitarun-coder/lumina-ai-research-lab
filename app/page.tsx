'use client';

import React from 'react';
import { ArrowRight, Award, Microscope, Users, Zap, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#00f0ff] to-[#a855f7] flex items-center justify-center">
              <span className="text-black font-bold text-xl">L</span>
            </div>
            <div className="font-semibold text-3xl tracking-[-2px]">Lumina</div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#research" className="hover:text-[#00f0ff] transition-colors duration-200">Research</a>
            <a href="#benchmarks" className="hover:text-[#00f0ff] transition-colors duration-200">Benchmarks</a>
            <a href="#publications" className="hover:text-[#00f0ff] transition-colors duration-200">Publications</a>
            <a href="#about" className="hover:text-[#00f0ff] transition-colors duration-200">About</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 text-sm font-medium border border-white/30 rounded-2xl hover:bg-white/5 transition-all">Join Us</button>
            <a href="https://github.com/achyutunitarun-coder/lumina-ai-research-lab" target="_blank" className="px-8 py-2.5 bg-white text-black rounded-2xl text-sm font-medium hover:bg-white/90 transition-all flex items-center gap-2">
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero - Stunning */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,240,255,0.08),transparent_70%)]"></div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8 inline-flex items-center gap-3 px-6 py-2 rounded-3xl border border-white/10 bg-white/5 text-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
            Frontier AI Research • July 2026
          </div>

          <h1 className="text-[92px] md:text-[120px] leading-none font-semibold tracking-[-6px] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            The Future<br />Is Luminous
          </h1>

          <p className="max-w-2xl mx-auto text-2xl text-gray-400 mb-16">
            Lumina AI Research Lab — where rigorous science meets bold exploration of intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#research" className="group flex items-center justify-center gap-4 px-12 py-6 bg-white hover:bg-white/95 text-black rounded-3xl text-xl font-medium transition-all hover:scale-[1.03]">
              Begin Exploration
              <ArrowRight className="group-hover:translate-x-2 transition" />
            </a>
            <a href="#benchmarks" className="px-10 py-6 border-2 border-white/40 hover:border-white rounded-3xl text-xl transition-all hover:bg-white/5">View Benchmarks</a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 flex flex-col items-center text-xs tracking-widest opacity-60">
          SCROLL
          <div className="mt-2 w-px h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </section>

      {/* Featured Work - Your Report */}
      <section id="benchmarks" className="py-32 border-t border-white/10 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="uppercase text-xs tracking-[4px] text-[#00f0ff] mb-6">LATEST BENCHMARK</div>
              <h2 className="text-6xl font-semibold tracking-tight mb-8">Agentic Performance 2026</h2>
              <p className="text-2xl text-gray-400 max-w-md">Head-to-Head evaluation of frontier open and closed models in real-world agentic workflows.</p>
              <a href="#" className="mt-12 inline-flex items-center gap-3 text-lg group">
                Read Full Report <ArrowRight className="group-hover:translate-x-1 transition" />
              </a>
            </div>
            <div className="flex-1 glass p-12 rounded-3xl">
              <Award className="text-amber-400 mb-8" size={64} />
              <div className="text-5xl font-mono mb-2">LUMINA-RP-2026-002</div>
              <div className="text-3xl font-semibold mb-8">Frontier Model Agentic Benchmark</div>
              <div className="space-y-6 text-gray-300">
                <div>Claude leads agentic coding • Open models close gap on cost</div>
                <div>Comprehensive analysis across 12 categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 text-center text-sm text-gray-500">
        © 2026 Lumina AI Research Lab • Advancing open science in AI
      </footer>
    </div>
  );
}
