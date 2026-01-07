
import React from 'react';
import { Users, Trophy, MapPin, Target, Zap, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const items = [
    { icon: <Users size={32} />, title: "HLV Chuyên Nghiệp", desc: "Đội ngũ cựu cầu thủ VBA và các chuyên gia FIBA trực tiếp huấn luyện." },
    { icon: <Trophy size={32} />, title: "Giải Đấu Thường Niên", desc: "Môi trường cọ xát thực tế, nâng cao bản lĩnh thi đấu đỉnh cao." },
    { icon: <Zap size={32} />, title: "Phân Tích AI", desc: "Học viên được phân tích động tác qua video AI hàng tháng." },
    { icon: <MapPin size={32} />, title: "Sân Tập Chuẩn NBA", desc: "Hệ thống sân sàn gỗ, điều hòa và trang thiết bị hỗ trợ hiện đại." },
    { icon: <Target size={32} />, title: "Lộ Trình Cá Nhân", desc: "Mỗi học viên có một giáo án riêng phù hợp với thể trạng." },
    { icon: <Shield size={32} />, title: "Bảo Hiểm Chấn Thương", desc: "Gói hỗ trợ y tế chuyên biệt dành riêng cho học viên Hoop Master." },
  ];

  return (
    <section id="features" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 italic uppercase tracking-tighter">Hệ Thống <br /> Huấn Luyện Toàn Diện</h2>
            <div className="h-2 w-40 bg-orange-500 rounded-full"></div>
          </div>
          <p className="text-zinc-500 text-lg md:text-xl max-w-sm italic">
            "Chúng tôi không chỉ dạy bóng rổ, chúng tôi xây dựng tinh thần nhà vô địch."
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group bg-zinc-900 border border-zinc-800 p-10 rounded-[2rem] hover:border-orange-500 transition-all duration-500 hover:-translate-y-2">
              <div className="text-orange-500 mb-8 p-4 bg-orange-500/5 inline-block rounded-2xl group-hover:bg-orange-500 group-hover:text-black transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase italic">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
