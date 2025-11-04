import { useState } from "react";
import axios from "axios";

export default function InviteForm({ onComplete }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    attending: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    console.log("Submitting form data:", form);
    // Use your computer's IP address
const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/guests`, {
  ...form,
  attending: form.attending === "yes",
}, {
  headers: {
    'Content-Type': 'application/json',
  }
});


    
    console.log("Server response:", res.data);
    localStorage.setItem("weddingGuest", JSON.stringify(res.data.guest));
    onComplete();
  } catch (err) {
    console.error("Full error object:", err);
    console.error("Response data:", err.response?.data);
    console.error("Error message:", err.message);
    alert(`Error submitting form: ${err.response?.data?.message || err.message}`);
  }
};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-8 shadow-xl w-80 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-pink-600">Wedding RSVP 💌</h2>

        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="w-full border p-2 rounded mb-2"
          required
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="w-full border p-2 rounded mb-2"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          className="w-full border p-2 rounded mb-3"
          required
        />

        <div className="mb-3">
          <label className="block mb-1 font-medium">Will you attend?</label>
          <div className="flex justify-center gap-4">
            <label>
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={form.attending === "yes"}
                onChange={handleChange}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="attending"
                value="no"
                checked={form.attending === "no"}
                onChange={handleChange}
              />{" "}
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-400 text-white px-5 py-2 rounded-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
