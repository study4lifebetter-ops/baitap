
import React, { useState } from 'react';
// Added Check to the imported icons
import { Send, Phone, MapPin, Mail, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl font-bold mb-8 italic uppercase tracking-tighter">Sẵn sàng <br /> <span className="text-orange-500">Ra sân?</span></h2>
            <p className="text-zinc-500 text-xl mb-12 font-light italic leading-relaxed">
              Đừng để tài năng của bạn bị lãng phí. Hãy để chúng tôi đồng hành cùng bạn trên con đường trở thành một baller thực thụ.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:border-orange-500 transition-colors">
                  <Phone size={24} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Hotline</p>
                  <p className="text-xl font-bold italic uppercase">0987.654.321</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:border-orange-500 transition-colors">
                  <MapPin size={24} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Cơ sở chính</p>
                  <p className="text-xl font-bold italic uppercase">Số 1 Đại Cồ Việt, Hà Nội</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 p-12 rounded-[3rem] border border-zinc-800">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-2">Họ và tên</label>
                  <input required type="text" placeholder="Nhập tên của bạn" className="w-full bg-black border border-zinc-800 p-5 rounded-2xl focus:border-orange-500 focus:outline-none transition" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-2">Số điện thoại</label>
                  <input required type="tel" placeholder="Nhập số điện thoại" className="w-full bg-black border border-zinc-800 p-5 rounded-2xl focus:border-orange-500 focus:outline-none transition" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-2">Lời nhắn (Tùy chọn)</label>
                  <textarea rows={4} placeholder="Bạn cần tư vấn về khóa học nào?" className="w-full bg-black border border-zinc-800 p-5 rounded-2xl focus:border-orange-500 focus:outline-none transition resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-500 text-black py-5 rounded-2xl font-black hover:bg-orange-600 transition flex items-center justify-center gap-3 uppercase tracking-widest shadow-xl shadow-orange-500/10">
                  Gửi yêu cầu <Send size={20} />
                </button>
              </form>
            ) : (
              <div className="text-center py-20 animate-in zoom-in fade-in">
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                  {/* Fixed missing Check icon import on line 67 */}
                  <Check size={40} />
                </div>
                <h3 className="text-3xl font-bold italic uppercase mb-4">Gửi thành công!</h3>
                <p className="text-zinc-500 italic">Cảm ơn bạn đã quan tâm. Ban huấn luyện sẽ liên hệ với bạn trong vòng 24 giờ tới.</p>
                <button onClick={() => setSubmitted(false)} className="mt-10 text-orange-500 uppercase font-bold text-xs tracking-widest hover:underline">Gửi lại yêu cầu khác</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
