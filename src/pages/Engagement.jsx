import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Engagement() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-center text-white"
      style={{
        backgroundImage: "url('/engagement-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-black/50 p-10 rounded-3xl">
        <h1 className="text-5xl font-bold mb-4">💍 Engagement 💍</h1>
        <p className="text-lg mb-8">Two souls, one promise of forever 💫</p>
        <Link
          to="/"
          className="bg-pink-400 text-gray-900 px-6 py-2 rounded-full shadow-lg hover:bg-pink-300 transition"
        >
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
}
