import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ChevronLeft } from "lucide-react";
import { useState } from "react";

const DRIVER_APPS = [
  { id: 'grab', name: 'Grab', bg: 'bg-[#00B14F]', fg: 'text-white', letter: 'G' },
  { id: 'be', name: 'Be', bg: 'bg-[#F3C40F]', fg: 'text-black', letter: 'Be' },
  { id: 'shopee', name: 'ShopeeFood', bg: 'bg-[#ee4d2d]', fg: 'text-white', letter: 'S' },
  { id: 'ahamove', name: 'Ahamove', bg: 'bg-[#E36B2C]', fg: 'text-white', letter: 'A' },
];

const BANKS = [
  { id: 'mb', name: 'MB Bank', color: 'text-[#1B3280]', icon: 'MB' },
  { id: 'vcb', name: 'Vietcombank', color: 'text-[#63A538]', icon: 'VC' },
  { id: 'tcb', name: 'Techcombank', color: 'text-[#D02027]', icon: 'TC' },
];

export function ConnectScreen() {
  const navigate = useNavigate();
  const [connected, setConnected] = useState<Record<string, boolean>>({});

  const handleConnect = (id: string) => {
    setConnected(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="flex flex-col min-h-screen px-6 pt-12 pb-10">
      <div className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center -ml-2">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-semibold flex-1 text-center pr-8">Kết nối tài khoản</h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Ứng dụng tài xế</h2>
          <Card className="p-0 overflow-hidden divide-y divide-white/5 bg-surface border border-white/5">
            {DRIVER_APPS.map(app => (
              <div key={app.id} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${app.bg} ${app.fg}`}>
                    {app.letter}
                  </div>
                  <div>
                    <div className="font-medium">{app.name}</div>
                    <div className="text-xs text-text-gray">
                      {connected[app.id] ? "Đã kết nối" : "Chưa kết nối"}
                    </div>
                  </div>
                </div>
                {connected[app.id] ? (
                  <CheckCircle2 className="text-success" size={24} />
                ) : (
                  <Button variant="outline" size="sm" onClick={() => handleConnect(app.id)}>
                    Kết nối
                  </Button>
                )}
              </div>
            ))}
          </Card>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Tài khoản ngân hàng</h2>
          <Card className="p-0 overflow-hidden divide-y divide-white/5 bg-surface border border-white/5">
            {BANKS.map(bank => (
              <div key={bank.id} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-bold text-sm">
                    <span className={bank.color}>{bank.icon}</span>
                  </div>
                  <div>
                    <div className="font-medium">{bank.name}</div>
                    <div className="text-xs text-text-gray">
                      {connected[bank.id] ? "Đã kết nối" : "Chưa kết nối"}
                    </div>
                  </div>
                </div>
                {connected[bank.id] ? (
                  <CheckCircle2 className="text-success" size={24} />
                ) : (
                  <Button variant="outline" size="sm" onClick={() => handleConnect(bank.id)}>
                    Kết nối
                  </Button>
                )}
              </div>
            ))}
          </Card>
        </div>
        
        <p className="text-center text-xs text-text-gray mt-6">
          Kết nối tài khoản giúp tự động ghi nhận giao dịch và thu nhập của bạn.
        </p>
      </div>

      <div className="pt-4 fixed bottom-0 left-0 right-0 p-6 bg-background/80 backdrop-blur-md">
        <Button className="w-full text-lg h-14" onClick={() => navigate('/home')}>
          Hoàn thành
        </Button>
      </div>
    </div>
  );
}
