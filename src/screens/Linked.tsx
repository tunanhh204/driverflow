import { useState } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ChevronRight, Link2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function LinkedScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Tất cả', 'Ứng dụng', 'Ngân hàng'];

  return (
    <div className="flex flex-col min-h-screen px-6 pt-12 pb-24">
      <h1 className="text-xl font-semibold text-center mb-6">Tài khoản liên kết</h1>

      <div className="flex bg-surface rounded-full p-1 border border-white/5 mb-8">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActiveTab(i)} className={`flex-1 py-1.5 text-sm font-medium rounded-full transition-colors ${i === activeTab ? 'bg-primary text-white shadow' : 'text-text-gray hover:text-white'}`}>
            {tab}
          </button>
        ))}
      </div>

      {(activeTab === 0 || activeTab === 1) && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
             <h2 className="text-lg font-semibold">Ứng dụng tài xế</h2>
             <span className="text-xs font-semibold bg-primary/20 text-primary px-2 py-0.5 rounded-full">3</span>
          </div>
          <Card className="p-0 overflow-hidden divide-y divide-white/5 bg-surface border border-white/5">
             <div className="flex items-center justify-between p-4 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-[#00B14F] rounded-xl flex items-center justify-center font-bold text-white shadow-lg">G</div>
                   <div className="font-medium">Grab</div>
                </div>
                <div className="flex items-center gap-2">
                   <span className="text-sm font-medium text-success">Đã kết nối</span>
                   <ChevronRight size={18} className="text-text-gray cursor-pointer" onClick={() => navigate('/connect')} />
                </div>
             </div>
             <div className="flex items-center justify-between p-4 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-[#F3C40F] rounded-xl flex items-center justify-center font-bold text-black shadow-lg">Be</div>
                   <div className="font-medium">Be</div>
                </div>
                <div className="flex items-center gap-2">
                   <span className="text-sm font-medium text-success">Đã kết nối</span>
                   <ChevronRight size={18} className="text-text-gray cursor-pointer" onClick={() => navigate('/connect')} />
                </div>
             </div>
             <div className="flex items-center justify-between p-4 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-[#ee4d2d] rounded-xl flex items-center justify-center font-bold text-white shadow-lg">S</div>
                   <div className="font-medium">ShopeeFood</div>
                </div>
                <div className="flex items-center gap-2">
                   <span className="text-sm font-medium text-success">Đã kết nối</span>
                   <ChevronRight size={18} className="text-text-gray cursor-pointer" onClick={() => navigate('/connect')} />
                </div>
             </div>
             <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-[#E36B2C] rounded-xl flex items-center justify-center font-bold text-white shadow-lg grayscale opacity-50">A</div>
                   <div className="font-medium text-white/50">Ahamove</div>
                </div>
                <div className="flex items-center gap-3">
                   <span className="text-sm font-medium text-text-gray">Chưa kết nối</span>
                   <button onClick={() => navigate('/connect')} className="px-3 py-1 bg-surface border border-white/10 rounded-lg text-sm hover:bg-white/5 transition-colors">Kết nối</button>
                </div>
             </div>
          </Card>
        </div>
      )}

      {(activeTab === 0 || activeTab === 2) && (
        <div>
          <div className="flex items-center gap-2 mb-4">
             <h2 className="text-lg font-semibold">Ngân hàng</h2>
             <span className="text-xs font-semibold bg-primary/20 text-primary px-2 py-0.5 rounded-full">2</span>
          </div>
          <Card className="p-0 overflow-hidden divide-y divide-white/5 bg-surface border border-white/5">
             <div className="flex items-center justify-between p-4 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-bold text-[#1B3280] shadow-lg">MB</div>
                   <div className="font-medium">MB Bank</div>
                </div>
                <div className="flex items-center gap-2">
                   <span className="text-sm font-medium text-success">Đã kết nối</span>
                   <ChevronRight size={18} className="text-text-gray cursor-pointer" onClick={() => navigate('/connect')} />
                </div>
             </div>
             <div className="flex items-center justify-between p-4 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-bold text-[#63A538] shadow-lg">VC</div>
                   <div className="font-medium">Vietcombank</div>
                </div>
                <div className="flex items-center gap-2">
                   <span className="text-sm font-medium text-success">Đã kết nối</span>
                   <ChevronRight size={18} className="text-text-gray cursor-pointer" onClick={() => navigate('/connect')} />
                </div>
             </div>
             <div className="p-4 border-t border-white/5 flex justify-center">
                <button onClick={() => navigate('/connect')} className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                   <Link2 size={16} /> Liên kết thêm tài khoản
                </button>
             </div>
          </Card>
        </div>
      )}
    </div>
  );
}
