import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Wallet, AlertCircle } from "lucide-react";

export function DebtScreen() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Tổng quan', 'Kế hoạch trả nợ'];

  return (
    <div className="flex flex-col min-h-screen px-6 pt-12 pb-24">
      <h1 className="text-xl font-semibold text-center mb-6">Quản lý nợ</h1>

      <div className="flex bg-surface rounded-full p-1 border border-white/5 mb-8">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActiveTab(i)} className={`flex-1 py-1.5 text-sm font-medium rounded-full transition-colors ${i === activeTab ? 'bg-primary text-white shadow' : 'text-text-gray hover:text-white'}`}>
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 0 && (
        <>
          <Card className="relative bg-gradient-to-br from-[#E13B35] to-[#B02824] border-none overflow-hidden p-6 mb-8 shadow-lg shadow-danger/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
            <div className="relative z-10 flex justify-between items-start">
              <div>
                 <div className="text-white/80 font-medium mb-1">Tổng nợ cần trả</div>
                 <div className="text-4xl font-bold mb-2 tracking-tight">78.500.000đ</div>
                 <div className="text-sm text-white/90">4 khoản nợ</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                 <Wallet size={24} className="text-white" />
              </div>
            </div>
          </Card>

          <div className="flex justify-between items-end mb-4">
            <div>
                <h2 className="text-lg font-semibold">Nợ gấp (cần trả sớm)</h2>
            </div>
            <div className="text-right">
                <div className="font-bold text-lg text-danger">45.500.000đ</div>
            </div>
          </div>

          <div className="space-y-3">
            <Card className="bg-surface border-l-4 border-l-danger p-4 flex justify-between items-center hover:bg-white/[0.02] transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-danger/10 flex items-center justify-center">
                      <span className="text-danger font-bold text-sm">FE</span>
                  </div>
                  <div>
                      <div className="font-semibold text-base mb-0.5">FE Credit</div>
                      <div className="text-xs text-text-gray flex items-center gap-1">
                        <AlertCircle size={12} className="text-danger" /> Ngày đến hạn: 20/05/2024
                      </div>
                  </div>
                </div>
                <div className="font-bold text-lg">25.000.000đ</div>
            </Card>
            <Card className="bg-surface border-l-4 border-l-warning p-4 flex justify-between items-center hover:bg-white/[0.02] transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center text-xl">
                      🏠
                  </div>
                  <div>
                      <div className="font-semibold text-base mb-0.5">Tiền nhà</div>
                      <div className="text-xs text-text-gray">Ngày đến hạn: 05/06/2024</div>
                  </div>
                </div>
                <div className="font-bold text-lg">12.000.000đ</div>
            </Card>
            <Card className="bg-surface border-l-4 border-l-warning p-4 flex justify-between items-center hover:bg-white/[0.02] transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-xl">
                      🏍️
                  </div>
                  <div>
                      <div className="font-semibold text-base mb-0.5">Trả góp xe</div>
                      <div className="text-xs text-text-gray">Ngày đến hạn: 15/05/2024</div>
                  </div>
                </div>
                <div className="font-bold text-lg">8.500.000đ</div>
            </Card>
            <button onClick={() => setActiveTab(1)} className="w-full py-3 bg-surface border border-white/10 text-white rounded-xl font-medium hover:bg-white/5 transition-colors mt-2">
                Xem chi tiết kế hoạch trả nợ
            </button>
          </div>
        </>
      )}

      {activeTab === 1 && (
        <div className="space-y-6">
          <Card className="bg-surface border border-white/5 p-4 box-border relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
             <div className="relative z-10 flex justify-between items-start mb-4">
                <div>
                  <div className="font-semibold text-base mb-1">Tiến độ tổng kế hoạch</div>
                  <div className="text-primary text-sm font-medium">Đang trả nợ</div>
                </div>
             </div>
             
             <div className="relative z-10">
               <div className="flex justify-between text-sm mb-2">
                 <span className="font-medium">25%</span>
                 <span className="text-text-gray">Hoàn thành</span>
               </div>
               <div className="w-full h-2 bg-background rounded-full overflow-hidden flex">
                 <div className="h-full w-1/4 bg-primary rounded-full" />
               </div>
             </div>
          </Card>
          <Card className="bg-surface border border-white/5 p-4 box-border">
             <h3 className="font-semibold mb-2">Kế hoạch đề xuất của AI</h3>
             <p className="text-sm text-text-gray mb-4">Nếu bạn để ra 500.000đ mỗi ngày, bạn sẽ trả xong nợ trong 106 ngày.</p>
             <div className="flex flex-col gap-3">
               <button className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors">
                 Áp dụng kế hoạch
               </button>
               <button className="w-full py-3 bg-transparent border border-white/10 text-white rounded-xl font-medium hover:bg-white/5 transition-colors">
                 Xem chi tiết kế hoạch
               </button>
             </div>
          </Card>
        </div>
      )}

    </div>
  );
}
