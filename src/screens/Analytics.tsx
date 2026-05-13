import { useState } from "react";
import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronLeft, ChevronRight } from "lucide-react";

const DATA = [
  { name: '1', value: 400000 },
  { name: '4', value: 550000 },
  { name: '8', value: 850000 },
  { name: '12', value: 650000 },
  { name: '16', value: 950000 },
  { name: '20', value: 750000 },
  { name: '24', value: 1100000 },
  { name: '28', value: 1050000 },
];

export function AnalyticsScreen() {
  const [activeTab, setActiveTab] = useState(2);
  const tabs = ['Ngày', 'Tuần', 'Tháng', 'Năm'];

  const [monthOffset, setMonthOffset] = useState(0);
  const displayDate = new Date(2024, 4 + monthOffset, 1);
  const displayLabel = `Tháng ${displayDate.getMonth() + 1}/${displayDate.getFullYear()}`;

  return (
    <div className="flex flex-col min-h-screen px-6 pt-12 pb-24">
      <h1 className="text-xl font-semibold text-center mb-6">Thống kê</h1>

      <div className="flex bg-surface rounded-full p-1 border border-white/5 mb-8">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActiveTab(i)} className={`flex-1 py-1.5 text-sm font-medium rounded-full transition-colors ${i === activeTab ? 'bg-primary text-white shadow' : 'text-text-gray hover:text-white'}`}>
            {tab}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mb-6">
        <button onClick={() => setMonthOffset(prev => prev - 1)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors">
          <ChevronLeft size={20} />
        </button>
        <div className="font-medium">{displayLabel}</div>
        <button onClick={() => setMonthOffset(prev => prev + 1)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>

      <Card className="bg-surface border border-white/5 p-6 mb-4">
        <div className="text-sm text-text-gray mb-1">Tổng thu nhập</div>
        <div className="text-3xl font-bold mb-2">23.850.000đ</div>
        <div className="text-sm text-success font-medium mb-6">↑ 12% so với tháng trước</div>
        
        <div className="h-[200px] -mx-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={DATA}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--color-card)', border: 'none', borderRadius: '12px' }}
                itemStyle={{ color: 'white' }}
              />
              <Area type="monotone" dataKey="value" stroke="var(--color-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4">
         <Card className="bg-surface border border-white/5 p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
               <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success text-sm">↓</div>
               <span className="text-sm text-text-gray font-medium">Thu nhập</span>
            </div>
            <div className="text-lg font-bold">23.850.000đ</div>
         </Card>
         <Card className="bg-surface border border-white/5 p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
               <div className="w-6 h-6 rounded-full bg-danger/20 flex items-center justify-center text-danger text-sm">↑</div>
               <span className="text-sm text-text-gray font-medium">Chi phí</span>
            </div>
            <div className="text-lg font-bold">8.750.000đ</div>
         </Card>
         <Card className="bg-surface border border-white/5 p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
               <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">≈</div>
               <span className="text-sm text-text-gray font-medium">Lãi</span>
            </div>
            <div className="text-lg font-bold text-success">15.100.000đ</div>
         </Card>
         <Card className="bg-surface border border-white/5 p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
               <div className="w-6 h-6 rounded-full bg-warning/20 flex items-center justify-center text-warning text-sm">🚗</div>
               <span className="text-sm text-text-gray font-medium">Số chuyến</span>
            </div>
            <div className="text-lg font-bold">628</div>
         </Card>
      </div>
    </div>
  );
}
