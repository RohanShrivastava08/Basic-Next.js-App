"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="p-8 shadow-lg bg-white rounded-lg max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
          Enter Your Name
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Type your name..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-gray-700"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Predict Data
          </button>
        </form>
        <div className="text-center text-sm text-gray-500">
          Your input will help us predict data instantly.
        </div>
      </div>
    </div>
  );
}
