
import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  CalendarRange, 
  LineChart, 
  Bot, 
  BrainCircuit, 
  Users, 
  Trophy, 
  MapPin, 
  Check, 
  X, 
  Loader2,
  Menu,
  Printer,
  ChevronRight,
  Target,
  Zap
} from 'lucide-react';
import { TrainingPlanParams, StatsParams, AIResponseState } from './types';
import { generateTrainingPlan, analyzeStats } from './services/geminiService';

// Reusable Components
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiState, setAiState] = useState<AIResponseState>({ type: null, content: '', loading: false });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGeneratePlan = async (params: TrainingPlanParams) => {
    setAiState({ ...aiState, loading: true, type: 'plan' });
    try {
      const result = await generateTrainingPlan(params);
      setAiState({ type: 'plan', content: result, loading: false });
      setTimeout(() => {
        document.getElementById('ai-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (err) {
      setAiState({ type: 'plan', content: "Coach đang bận đột xuất, vui lòng thử lại sau.", loading: false });
    }
  };

  const handleAnalyzeStats = async (params: StatsParams) => {
    setAiState({ ...aiState, loading: true, type: 'stats' });
    try {
      const result = await analyzeStats(params);
      setAiState({ type: 'stats', content: result, loading: false });
      setTimeout(() => {
        document.getElementById('ai-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (err) {
      setAiState({ type: 'stats', content: "Có lỗi khi phân tích dữ liệu, vui lòng thử lại.", loading: false });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 w-full z-[100] transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold flex items-center gap-2 tracking-tighter italic font-oswald">
            <span className="bg-[#FF6B00] text-black px-2 py-1 rounded">HOOP</span> MASTER
          </div>
          
          <nav className="hidden md:flex gap-8 font-semibold uppercase text-[10px] tracking-[0.2em]">
            <a href="#home" className="hover:text-[#FF6B00] transition">Trang chủ</a>
            <a href="#features" className="hover:text-[#FF6B00] transition">Khóa học</a>
            <a href="#ai-coach" className="hover:text-[#FF6B00] transition text-[#FF6B00] flex items-center gap-1">AI Coach <Sparkles size={12} /></a>
            <a href="#pricing" className="hover:text-[#FF6B00] transition">Bảng giá</a>
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={() => setLoginModalOpen(true)} className="hidden sm:block hover:text-[#FF6B00] font-bold transition text-[10px] text-gray-400 uppercase tracking-widest">Đăng nhập</button>
            <button className="bg-[#FF6B00] text-black px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition text-[10px] uppercase tracking-widest shadow-lg shadow-orange-500/20">Tham gia</button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white"><Menu /></button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        
        <section id="ai-coach" className="py-32 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                 Gemini AI Coaching Master <Sparkles size={12} />
              </div>
              <h2 className="text-5xl md:text-7xl font-oswald font-bold italic mb-6 uppercase tracking-tighter">Trợ Lý Huấn Luyện AI</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto font-light text-lg">Cá nhân hóa mọi bài tập và phân tích chuyên môn dựa trên công nghệ trí tuệ nhân tạo hàng đầu.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <ToolCard 
                icon={<CalendarRange size={28} />}
                title="Lập Kế Hoạch"
                subtitle="Cá nhân hóa giáo trình"
                color="orange"
                params={aiState}
                onAction={(params) => handleGeneratePlan(params as TrainingPlanParams)}
              />
              <StatsCard 
                onAction={handleAnalyzeStats}
                loading={aiState.loading && aiState.type === 'stats'}
              />
            </div>

            {/* AI Result Area with Stephen Curry Avatar */}
            {aiState.content && (
              <div id="ai-result" className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="bg-zinc-900 border border-orange-500/30 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden ai-glow">
                  {/* Watermark Background */}
                  <div className="absolute -bottom-20 -right-20 opacity-[0.05] pointer-events-none">
                    <Bot size={400} className="text-orange-500" />
                  </div>
                  
                  {/* Avatar & Header */}
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 pb-8 border-b border-zinc-800">
                    <div className="relative shrink-0">
                      <div className="absolute -inset-2 bg-gradient-to-tr from-orange-600 to-yellow-400 rounded-full blur-md opacity-50"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1519861531473-920036214a13?auto=format&fit=crop&q=80&w=200&h=200" 
                        alt="Coach Curry Avatar" 
                        className="relative w-24 h-24 rounded-full object-cover border-4 border-black ring-2 ring-orange-500/50"
                      />
                      <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-zinc-900 rounded-full"></div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-3 text-orange-500 font-oswald font-bold italic uppercase tracking-tighter text-2xl">
                        <BrainCircuit className="w-8 h-8" /> 
                        <span>Phản hồi từ Coach Master</span>
                      </div>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-black">AI Specialist: Stephen Curry Mode ⚡</p>
                    </div>
                  </div>

                  {/* Markdown Content Area */}
                  <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed">
                     <div className="whitespace-pre-wrap font-light text-lg space-y-4">
                      {aiState.content}
                     </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-6">
                     <div className="flex items-center gap-3 text-[10px] text-zinc-500 uppercase font-black tracking-[0.2em]">
                       <Zap size={14} className="text-orange-500 animate-pulse" /> Kết quả tối ưu bởi Gemini 3 Flash
                     </div>
                     <button 
                       onClick={() => window.print()} 
                       className="flex items-center gap-2 text-[10px] uppercase font-bold border border-zinc-700 px-8 py-3 rounded-full hover:bg-white hover:text-black transition tracking-widest"
                     >
                       <Printer size={14} /> In giáo án luyện tập
                     </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <Features />
        <Pricing />
        <Contact />
      </main>

      <Footer />

      {/* Login Modal */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" onClick={() => setLoginModalOpen(false)}></div>
          <div className="relative bg-zinc-900 w-full max-w-md p-10 rounded-3xl border border-zinc-800 shadow-2xl animate-in zoom-in duration-300">
            <button onClick={() => setLoginModalOpen(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white"><X size={24} /></button>
            <div className="text-center mb-8">
              <div className="text-3xl font-oswald font-bold italic mb-2 tracking-tighter uppercase"><span className="text-orange-500">HOOP</span> MASTER</div>
              <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">Cổng thông tin học viên</p>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Tên đăng nhập" className="w-full bg-black border border-zinc-800 p-5 rounded-2xl focus:border-orange-500 focus:outline-none transition" />
              <input type="password" placeholder="Mật khẩu" className="w-full bg-black border border-zinc-800 p-5 rounded-2xl focus:border-orange-500 focus:outline-none transition" />
              <button className="w-full bg-orange-500 text-black py-5 rounded-2xl font-black hover:bg-orange-600 transition uppercase tracking-widest italic shadow-xl shadow-orange-500/10">Đăng nhập</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Sub-components
const ToolCard = ({ icon, title, subtitle, color, params, onAction }: any) => {
  const [goal, setGoal] = useState('');
  const [pos, setPos] = useState('Hậu vệ (Guard)');

  return (
    <div className="bg-zinc-900 p-10 rounded-[2.5rem] border border-zinc-800 shadow-xl hover:border-orange-500/30 transition-all duration-500 group">
      <div className="flex items-center gap-5 mb-10">
        <div className="w-16 h-16 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-black transition-all duration-500">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-oswald font-bold italic uppercase leading-none">{title}</h3>
          <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mt-1">{subtitle}</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-[10px] font-black text-zinc-600 mb-2 uppercase tracking-[0.2em]">Vị trí thi đấu</label>
          <select 
            value={pos}
            onChange={(e) => setPos(e.target.value)}
            className="w-full bg-black border border-zinc-800 p-5 rounded-2xl focus:border-orange-500 focus:outline-none transition cursor-pointer appearance-none"
          >
            <option>Hậu vệ (Guard)</option>
            <option>Tiền phong (Forward)</option>
            <option>Trung phong (Center)</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] font-black text-zinc-600 mb-2 uppercase tracking-[0.2em]">Mục tiêu ưu tiên</label>
          <input 
            type="text" 
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="VD: Cải thiện ném 3 điểm..." 
            className="w-full bg-black border border-zinc-800 p-5 rounded-2xl focus:border-orange-500 focus:outline-none transition placeholder:text-zinc-800" 
          />
        </div>
        <button 
          onClick={() => onAction({ position: pos, goal })}
          disabled={params.loading || !goal}
          className="w-full bg-orange-500 text-black font-black py-5 rounded-2xl hover:bg-orange-600 transition flex items-center justify-center gap-3 uppercase tracking-widest shadow-xl shadow-orange-500/10 disabled:opacity-50"
        >
          {params.loading && params.type === 'plan' ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
          Tạo lịch tập ngay
        </button>
      </div>
    </div>
  );
};

const StatsCard = ({ onAction, loading }: any) => {
  const [stats, setStats] = useState<StatsParams>({ points: 0, rebounds: 0, assists: 0 });

  return (
    <div className="bg-zinc-900 p-10 rounded-[2.5rem] border border-zinc-800 shadow-xl hover:border-blue-500/30 transition-all duration-500 group">
      <div className="flex items-center gap-5 mb-10">
        <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
          <LineChart size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-oswald font-bold italic uppercase leading-none">Phân Tích Chỉ Số</h3>
          <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mt-1">Đánh giá hiệu suất thi đấu</p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div>
          <label className="block text-[10px] font-black text-zinc-600 mb-2 uppercase tracking-widest text-center">Points</label>
          <input 
            type="number" 
            value={stats.points}
            onChange={(e) => setStats({ ...stats, points: parseInt(e.target.value) || 0 })}
            className="w-full bg-black border border-zinc-800 p-5 rounded-2xl focus:border-blue-500 focus:outline-none text-center transition" 
          />
        </div>
        <div>
          <label className="block text-[10px] font-black text-zinc-600 mb-2 uppercase tracking-widest text-center">Rebound</label>
          <input 
            type="number" 
            value={stats.rebounds}
            onChange={(e) => setStats({ ...stats, rebounds: parseInt(e.target.value) || 0 })}
            className="w-full bg-black border border-zinc-800 p-5 rounded-2xl focus:border-blue-500 focus:outline-none text-center transition" 
          />
        </div>
        <div>
          <label className="block text-[10px] font-black text-zinc-600 mb-2 uppercase tracking-widest text-center">Assists</label>
          <input 
            type="number" 
            value={stats.assists}
            onChange={(e) => setStats({ ...stats, assists: parseInt(e.target.value) || 0 })}
            className="w-full bg-black border border-zinc-800 p-5 rounded-2xl focus:border-blue-500 focus:outline-none text-center transition" 
          />
        </div>
      </div>
      <button 
        onClick={() => onAction(stats)}
        disabled={loading}
        className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition flex items-center justify-center gap-3 uppercase tracking-widest shadow-xl shadow-blue-500/10 disabled:opacity-50"
      >
        {loading ? <Loader2 className="animate-spin" /> : <BrainCircuit size={18} />}
        Phân tích chuyên môn
      </button>
      <p className="text-[10px] text-zinc-700 mt-6 text-center italic uppercase tracking-widest font-black">Dựa trên trận đấu gần nhất của bạn</p>
    </div>
  );
};

export default App;
