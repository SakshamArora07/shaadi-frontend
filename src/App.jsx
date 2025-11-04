import { useState, useEffect } from "react";
import InviteForm from "./components/InviteForm";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Haldi from "./pages/Haldi";
import Mehendi from "./pages/Mehendi";
import Engagement from "./pages/Engagement";
import Shaadi from "./pages/Shaadi";

function App() {
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("weddingGuest");
    if (saved) setShowForm(false);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="backdrop-brightness-90 min-h-screen flex flex-col items-center justify-center">
        {showForm && <InviteForm onComplete={() => setShowForm(false)} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/haldi" element={<Haldi />} />
          <Route path="/mehendi" element={<Mehendi />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/shaadi" element={<Shaadi />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
