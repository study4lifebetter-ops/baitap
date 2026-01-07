
import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <div className="text-4xl font-bold italic mb-4 tracking-tighter uppercase leading-none">
             <span className="text-orange-500">Hoop</span> Master
          </div>
          <p className="text-zinc-600 text-sm max-w-xs font-medium">Hệ thống đào tạo bóng rổ chuyên nghiệp hàng đầu Việt Nam tích hợp công nghệ AI.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-500 hover:bg-orange-500 hover:text-black transition-all">
            <Facebook size={20} />
          </a>
          <a href="#" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-500 hover:bg-orange-500 hover:text-black transition-all">
            <Instagram size={20} />
          </a>
          <a href="#" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-500 hover:bg-orange-500 hover:text-black transition-all">
            <Youtube size={20} />
          </a>
          <a href="#" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-500 hover:bg-orange-500 hover:text-black transition-all">
            <Twitter size={20} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">
        <p>© 2026 Hoop Master Academy. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition">Chính sách bảo mật</a>
          <a href="#" className="hover:text-white transition">Điều khoản sử dụng</a>
        </div>
        <p>AI Powered by Google Gemini 3</p>
      </div>
    </footer>
  );
};

export default Footer;
