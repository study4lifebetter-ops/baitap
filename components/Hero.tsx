
import React from 'react';
// Added Zap icon to the imports to fix the "Cannot find name 'Zap'" error on line 62
import { Sparkles, ArrowRight, Play, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[800px] flex items-center justify-start bg-zinc-950 overflow-hidden">
      {/* Background with advanced layers */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1920" 
          alt="Arena" 
          className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 px-8 md:px-24 max-w-6xl">
        <div className="inline-flex items-center gap-3 bg-orange-500 text-black px-6 py-2 text-[10px] font-black mb-8 rounded-full italic uppercase tracking-[0.3em] animate-in fade-in slide-in-from-left duration-700">
          <Sparkles size={14} /> New: Gemini 3 AI Coaching System
        </div>
        
        <h1 className="text-8xl md:text-[11rem] font-oswald font-bold mb-8 leading-[0.8] uppercase tracking-tighter italic animate-in fade-in slide-in-from-bottom duration-1000">
          Chạm Tới <br /> 
          <span className="text-orange-500 text-9xl md:text-[13rem] block drop-shadow-2xl">Đỉnh Cao</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-14 border-l-4 border-orange-500 pl-10 font-light leading-relaxed animate-in fade-in duration-1000 delay-500">
          Nâng cấp kỹ năng với trí tuệ nhân tạo <span className="text-white font-bold italic tracking-tighter underline decoration-orange-500">Gemini</span>. Lộ trình cá nhân hóa từ các chuyên gia NBA.
        </p>
        
        <div className="flex flex-wrap gap-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
          <a href="#ai-coach" className="bg-white text-black px-14 py-6 rounded-full font-black text-lg hover:bg-orange-500 hover:text-white transition-all flex items-center gap-4 group shadow-2xl shadow-white/5 uppercase tracking-widest">
            Gặp AI Coach <ArrowRight className="group-hover:translate-x-3 transition-transform duration-300" />
          </a>
          <button className="flex items-center gap-4 border-2 border-zinc-800 px-14 py-6 rounded-full font-black text-lg hover:border-white transition-all uppercase tracking-widest text-zinc-500 hover:text-white group">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <Play size={14} fill="currentColor" />
            </div>
            Khóa học
          </button>
        </div>

        <div className="mt-24 flex flex-wrap gap-12 items-center grayscale opacity-30">
           <span className="text-[10px] font-black tracking-[0.4em] uppercase">Partnering with Global Standards</span>
           <div className="h-[1px] w-24 bg-zinc-800"></div>
           <div className="flex gap-8 text-3xl font-oswald font-black italic text-zinc-500 tracking-tighter">
              <span>NBA</span>
              <span>FIBA</span>
              <span>VBA</span>
           </div>
        </div>
      </div>

      {/* Hero Visual Ornament */}
      <div className="absolute bottom-32 right-32 hidden lg:block">
         <div className="relative animate-pulse duration-[4000ms]">
            <div className="w-56 h-56 border border-orange-500/10 rounded-full flex items-center justify-center">
               <div className="w-44 h-44 border border-orange-500/30 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-orange-500/5 rounded-full flex items-center justify-center text-orange-500">
                    <Zap size={48} />
                  </div>
               </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-500 font-oswald font-bold italic uppercase text-[10px] tracking-[0.4em] text-center leading-tight">
               Master <br /> Your Game
            </div>
         </div>
      </div>
    </section>
  );
};

export default Hero;
