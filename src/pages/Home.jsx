import EventCard from "../components/EventCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
        💍 Isha & Aakash's Wedding Celebration 💍
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        <EventCard title="Engagement" date="4 Dec" link="/engagement" emoji="💍" />
        <EventCard title="Haldi" date="5 Dec" link="/haldi" emoji="🌼" />
        <EventCard title="Mehendi" date="5 Dec" link="/mehendi" emoji="💚" />
        <EventCard title="Shaadi" date="6 Dec" link="/shaadi" emoji="❤️" />
      </div>
    </div>
  );
}
