import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthPage from "./components/Authpage";
import HomeHuntLanding from "./components/HomeHuntLanding";
import OpenPage from "./components/OpenPage";

function App() {
  const [page, setPage] = useState("OpenPage");
  const [isLogin, setIsLogin] = useState(true);

  return (
 
      <Routes>
        <Route path="/auth" element={<AuthPage setPage={setPage} setIsLogin={setIsLogin} isLogin={isLogin} />} />
        <Route path="/landing" element={<HomeHuntLanding setPage={setPage} setIsLogin={setIsLogin} isLogin={isLogin} />} />
        <Route path="/" element={<OpenPage setPage={setPage} setIsLogin={setIsLogin} isLogin={isLogin} />} />
      </Routes>
    

  );
}

export default App;
