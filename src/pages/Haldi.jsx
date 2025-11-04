import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Haldi() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-center text-white"
      style={{
        backgroundImage: "url('/haldi-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-black/50 p-10 rounded-3xl">
        <h1 className="text-5xl font-bold mb-4">🌼 Haldi Ceremony 🌼</h1>
        <p className="text-lg mb-8">A day of laughter, turmeric, and golden memories ✨</p>
        <Link
          to="/"
          className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
}
