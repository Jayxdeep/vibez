import React, { useState } from "react";
import { useApi } from "../context/ApiContext";

const Ai = () => {
  const { generateResponse, response, loading, error } = useApi();
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await generateResponse(input);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-semibold text-[#c2995a] mb-4">
        ⚡ Flash 2.0 AI Assistant
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="w-full px-4 py-3 rounded-lg bg-[#111] border border-[#c2995a]/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c2995a]"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[#c2995a] px-6 py-3 rounded-lg hover:bg-[#d4a962] text-black font-semibold transition-all"
        >
          {loading ? "Thinking..." : "Ask Flash"}
        </button>
      </form>

      {error && <p className="text-red-400 mt-4">{error}</p>}
      {response && (
        <div className="mt-6 bg-[#111]/70 border border-[#c2995a]/40 p-4 rounded-xl max-w-2xl">
          <p className="text-gray-200 whitespace-pre-line">{response}</p>
        </div>
      )}
    </div>
  );
};

export default Ai;
