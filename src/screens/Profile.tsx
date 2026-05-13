import { ChevronLeft, Target, Pencil, Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface Goal {
  id: string;
  title: string;
  type: "savings" | "debt";
  targetAmount: number;
  currentAmount: number;
}

export function ProfileScreen() {
  const navigate = useNavigate();

  const [goals, setGoals] = useState<Goal[]>([
    {
      id: "1",
      title: "Mua điện thoại mới",
      type: "savings",
      targetAmount: 25000000,
      currentAmount: 10000000,
    },
    {
      id: "2",
      title: "Trả nợ FE Credit",
      type: "debt",
      targetAmount: 25000000,
      currentAmount: 15000000,
    },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editTarget, setEditTarget] = useState("");
  const [editType, setEditType] = useState<"savings" | "debt">("savings");

  const handleEdit = (goal: Goal) => {
    setEditingId(goal.id);
    setEditTitle(goal.title);
    setEditTarget(goal.targetAmount.toString());
    setEditType(goal.type);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleAdd = () => {
    const newId = `new_${Date.now()}`;
    const newGoal: Goal = {
      id: newId,
      title: "",
      type: "savings",
      targetAmount: 0,
      currentAmount: 0,
    };
    setGoals([newGoal, ...goals]);
    setEditingId(newId);
    setEditTitle("");
    setEditTarget("");
    setEditType("savings");
  };

  const handleSave = (id: string) => {
    setGoals((prev) =>
      prev.map((g) => {
        if (g.id === id) {
          return {
            ...g,
            title: editTitle || "Mục tiêu mới",
            targetAmount: Number(editTarget) || 0,
            type: editType,
          };
        }
        return g;
      }).filter(g => g.title) // Remove if empty title but keep defaults
    );
    setEditingId(null);
  };

  return (
    <div className="flex flex-col min-h-screen px-6 pt-12 pb-24">
      {/* Header */}
      <header className="flex items-center gap-3 mb-8">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/5 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold flex-1">Tài khoản</h1>
      </header>

      {/* User Info */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full bg-surface border-4 border-white/10 overflow-hidden mb-4">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-2xl font-bold">Tuấn</h2>
        <p className="text-text-gray">Tài xế công nghệ</p>
      </div>

      {/* Financial Goals Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Target className="text-primary" size={20} />
            Mục tiêu tài chính
          </h2>
          <button onClick={handleAdd} className="text-primary text-sm font-medium hover:underline">Thêm</button>
        </div>
        
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {goals.map((goal) => {
              const isEditing = editingId === goal.id;
              const isSavings = goal.type === "savings" || (isEditing && editType === "savings");
              const progress = Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100)) || 0;

              return (
                <motion.div
                  key={goal.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-surface border border-white/5 p-4 box-border relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4 ${isSavings ? 'bg-success/10' : 'bg-danger/10'}`}></div>
                    
                    {isEditing ? (
                      <div className="relative z-10 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-white/50">{goal.title ? 'Chỉnh sửa mục tiêu' : 'Thêm mục tiêu mới'}</div>
                           <div className="flex gap-2">
                            <button onClick={handleCancel} className="p-1.5 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                              <X size={16} className="text-text-gray" />
                            </button>
                            <button onClick={() => handleSave(goal.id)} className="p-1.5 bg-primary/20 hover:bg-primary/30 rounded-lg transition-colors">
                              <Check size={16} className="text-primary" />
                            </button>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex gap-2 mb-2">
                             <button
                               onClick={() => setEditType('savings')}
                               className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${editType === 'savings' ? 'bg-success text-white' : 'bg-white/5 text-text-gray'}`}
                             >
                               Tiết kiệm
                             </button>
                             <button
                               onClick={() => setEditType('debt')}
                               className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${editType === 'debt' ? 'bg-danger text-white' : 'bg-white/5 text-text-gray'}`}
                             >
                               Trả nợ
                             </button>
                          </div>
                          <div>
                            <label className="text-xs text-text-gray mb-1 block">Tên {editType === 'savings' ? 'mục tiêu' : 'khoản nợ'}</label>
                            <input 
                              type="text" 
                              value={editTitle}
                              onChange={(e) => setEditTitle(e.target.value)}
                              placeholder={editType === 'savings' ? 'Ví dụ: Mua xe máy' : 'Ví dụ: Thẻ tín dụng'}
                              className="w-full bg-background border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/50"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-text-gray mb-1 block">Số tiền (đ)</label>
                            <input 
                              type="number" 
                              value={editTarget}
                              onChange={(e) => setEditTarget(e.target.value)}
                              placeholder="0"
                              className="w-full bg-background border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/50"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                          <div className="pr-4">
                            <div className="font-semibold text-base mb-1">{goal.title}</div>
                            <div className={`text-sm font-medium ${isSavings ? 'text-success' : 'text-danger'}`}>
                              {isSavings ? 'Tiết kiệm' : 'Trả nợ'}
                            </div>
                          </div>
                          <div className="text-right flex flex-col items-end">
                            <div className="flex items-center gap-2">
                               <div className="font-bold">{goal.targetAmount.toLocaleString('vi-VN')}đ</div>
                               <button onClick={() => handleEdit(goal)} className="p-1 rounded-md text-text-gray hover:text-white hover:bg-white/10 focus:outline-none transition-colors">
                                 <Pencil size={14} />
                               </button>
                            </div>
                            <div className="text-xs text-text-gray mt-0.5">{isSavings ? 'Mục tiêu' : 'Tổng nợ'}</div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="font-medium">{goal.currentAmount.toLocaleString('vi-VN')}đ</span>
                            {isSavings ? (
                               <span className="text-text-gray">{progress}%</span>
                            ) : (
                               <span className="text-text-gray pl-2 whitespace-nowrap">Còn {(goal.targetAmount - goal.currentAmount).toLocaleString('vi-VN')}đ</span>
                            )}
                          </div>
                          <div className="w-full h-2 bg-background rounded-full overflow-hidden flex">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${progress}%` }}
                              transition={{ duration: 1, delay: 0.1 }}
                              className={`h-full rounded-full ${isSavings ? 'bg-success' : 'bg-danger'}`}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}
