
import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold italic uppercase tracking-tighter mb-4">Gói Hội Viên</h2>
          <p className="text-zinc-500 font-light text-lg">Lựa chọn lộ trình phù hợp nhất với mục tiêu của bạn.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* ROOKIE */}
          <div className="flex flex-col bg-zinc-900 p-10 rounded-[2.5rem] border border-zinc-800">
            <h3 className="text-xl font-bold mb-2 italic uppercase text-zinc-400">Rookie</h3>
            <div className="text-4xl font-black mb-8 italic">1.200k <span className="text-sm text-zinc-600 font-normal">/tháng</span></div>
            <ul className="flex-1 space-y-5 mb-12 text-zinc-400 text-sm">
              <li className="flex items-center gap-3"><Check className="text-orange-500" size={18} /> 2 buổi tập tập trung / tuần</li>
              <li className="flex items-center gap-3"><Check className="text-orange-500" size={18} /> Giáo trình kỹ thuật cơ bản</li>
              <li className="flex items-center gap-3"><Check className="text-orange-500" size={18} /> Quyền truy cập AI Coach Basic</li>
              <li className="flex items-center gap-3"><Check className="text-orange-500" size={18} /> Áo tập Hoop Master</li>
            </ul>
            <button className="w-full border-2 border-zinc-700 py-4 rounded-full font-bold hover:bg-white hover:text-black transition uppercase text-sm tracking-widest">Đăng ký ngay</button>
          </div>
          
          {/* ALL-STAR */}
          <div className="flex flex-col bg-zinc-900 p-10 rounded-[2.5rem] border-2 border-orange-500 relative transform md:scale-110 z-10 shadow-2xl shadow-orange-500/10">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-500 text-black px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              <Star size={12} fill="currentColor" /> Phổ biến nhất
            </div>
            <h3 className="text-xl font-bold mb-2 italic uppercase text-orange-500">All-Star</h3>
            <div className="text-5xl font-black mb-8 italic">2.500k <span className="text-sm text-zinc-600 font-normal">/tháng</span></div>
            <ul className="flex-1 space-y-5 mb-12 text-zinc-300 text-sm">
              <li className="flex items-center gap-3 font-bold"><Check className="text-orange-500" size={18} /> 4 buổi tập tập trung / tuần</li>
              <li className="flex items-center gap-3"><Check className="text-orange-500" size={18} /> Phân tích Video AI nâng cao</li>
              <li className="flex items-center gap-3"><Check className="text-orange-500" size={18} /> Tham gia hệ thống giải nội bộ</li>
              <li className="flex items-center gap-3"><Check className="text-orange-500" size={18} /> Buổi workshop cùng HLV VBA</li>
              <li className="flex items-center gap-3"><Check className="text-orange-500" size={18} /> Gift set All-Star (Áo + Balo)</li>
            </ul>
            <button className="w-full bg-orange-500 text-black py-4 rounded-full font-black hover:bg-orange-600 transition uppercase text-sm tracking-widest shadow-xl shadow-orange-500/20">Tham gia ngay</button>
          </div>

          {/* MVP */}
          <div className="flex flex-col bg-zinc-900 p-10 rounded-[2.5rem] border border-zinc-800">
            <h3 className="text-xl font-bold mb-2 italic uppercase text-zinc-400">MVP (Pro)</h3>
            <div className="text-4xl font-black mb-8 italic">5.000k <span className="text-sm text-zinc-600 font-normal">/tháng</span></div>
            <ul className="flex-1 space-y-5 mb-12 text-zinc-400 text-sm">
              <li className="flex items-center gap-3"><Check className="text-orange-500" size={18} /> Tập luyện không giới hạn</li>
              <li className="flex items-center gap-3"><Check className="text-orange-500" size={18} /> 1-on-1 coaching hàng tuần</li>
              <li className="flex items-center gap-3"><Check className="text-orange-500" size={18} /> Chế độ dinh dưỡng AI cá nhân</li>
              <li className="flex items-center gap-3"><Check className="text-orange-500" size={18} /> Ưu tiên thi đấu tại các giải Pro</li>
            </ul>
            <button className="w-full border-2 border-zinc-700 py-4 rounded-full font-bold hover:bg-white hover:text-black transition uppercase text-sm tracking-widest">Liên hệ tư vấn</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
