import { Outlet } from "react-router-dom";
import { BottomNav } from "./BottomNav";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-white flex justify-center">
      <div className="w-full max-w-md relative min-h-screen pb-24 overflow-x-hidden">
        <Outlet />
        <BottomNav />
      </div>
    </div>
  );
}
