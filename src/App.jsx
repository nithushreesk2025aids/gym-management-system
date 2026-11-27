import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Members from "./pages/members";
import Attendance from "./pages/attendance";
import Membership from "./pages/membership";
import Payments from "./pages/payments";
import Trainers from "./pages/trainers";
import Notifications from "./pages/notifications";
import Memberform from "./pages/memberform";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/members" element={<Members />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/memberform" element={<Memberform />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;