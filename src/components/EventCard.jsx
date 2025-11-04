import { Link } from "react-router-dom";

function EventCard({ title, date, link, emoji }) {
  return (
    <Link
      to={link}
      className="bg-white/80 hover:bg-white/90 transition-all duration-200 shadow-xl rounded-2xl p-6 w-64 text-center backdrop-blur-md border border-white/40"
    >
      <div className="text-4xl mb-2">{emoji}</div>
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-1">{date}</p>
    </Link>
  );
}

export default EventCard;
