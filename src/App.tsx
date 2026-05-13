/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { SplashScreen } from "./screens/Splash";
import { OnboardingScreen } from "./screens/Onboarding";
import { ConnectScreen } from "./screens/Connect";
import { HomeScreen } from "./screens/Home";
import { AnalyticsScreen } from "./screens/Analytics";
import { DebtScreen } from "./screens/Debt";
import { LinkedScreen } from "./screens/Linked";
import { AIScreen } from "./screens/AI";
import { ProfileScreen } from "./screens/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<SplashScreen />} />
          <Route path="onboarding" element={<OnboardingScreen />} />
          <Route path="connect" element={<ConnectScreen />} />
          <Route path="home" element={<HomeScreen />} />
          <Route path="analytics" element={<AnalyticsScreen />} />
          <Route path="debt" element={<DebtScreen />} />
          <Route path="linked" element={<LinkedScreen />} />
          <Route path="ai" element={<AIScreen />} />
          <Route path="profile" element={<ProfileScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
