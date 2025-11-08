import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // ✅ Importing your Navbar component

const ShlokaDetails = () => {
  const { chapterId, verseId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const currentVerse = Number(verseId) || 1;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://vedicscriptures.github.io/slok/${chapterId}/${currentVerse}/`);
        const json = await res.json();
        console.clear();
        console.log("🕉️ Verse Data:", json);
        setData(json);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [chapterId, currentVerse]);

  const handleNext = () => navigate(`/chapter/${chapterId}/shlokas/${currentVerse + 1}`);
  const handlePrev = () => currentVerse > 1 && navigate(`/chapter/${chapterId}/shlokas/${currentVerse - 1}`);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-[#c2995a] text-xl">
        Loading Chapter {chapterId}, Verse {currentVerse}...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-red-400">
        ❌ No data found.
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center p-6">
      {/* ✅ Navbar at top */}
      <Navbar />

      <div className="max-w-4xl w-full mt-24">
        {/* 🕉️ Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-[#c2995a]">
            Chapter {data.chapter} · Verse {data.verse}
          </h1>
          <p className="text-sm text-gray-400 mt-1">{data._id}</p>
        </div>

        {/* 📜 Sanskrit Verse */}
        <div className="text-center mb-6">
          <p
            className="text-2xl leading-relaxed font-semibold"
            style={{
              background: "linear-gradient(135deg, #f9f6f0, #c2995a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {data.slok}
          </p>
        </div>

        {/* 🪷 Transliteration */}
        <p className="text-center text-gray-400 italic mb-8">{data.transliteration}</p>

        {/* 🌸 Swami Tejomayananda (Hindi) */}
        {data.tej && (
          <div className="bg-[#0d0d0d] p-5 mb-6 rounded-xl border border-[#c2995a]/30">
            <h2 className="text-[#c2995a] text-lg font-semibold mb-2">
              Swami Tejomayananda — हिन्दी अनुवाद
            </h2>
            <p className="text-gray-200 whitespace-pre-line">{data.tej.ht}</p>
          </div>
        )}

        {/* 🌸 Swami Sivananda (English) */}
        {data.siva && (
          <div className="bg-[#0d0d0d] p-5 mb-6 rounded-xl border border-[#c2995a]/30">
            <h2 className="text-[#c2995a] text-lg font-semibold mb-2">
              Swami Sivananda — English Translation
            </h2>
            <p className="text-gray-200 mb-2 whitespace-pre-line">{data.siva.et}</p>
            {data.siva.ec && (
              <p className="text-gray-400 text-sm whitespace-pre-line">{data.siva.ec}</p>
            )}
          </div>
        )}

        {/* 🌸 Prabhupada */}
        {data.prabhu && (
          <div className="bg-[#0d0d0d] p-5 mb-6 rounded-xl border border-[#c2995a]/30">
            <h2 className="text-[#c2995a] text-lg font-semibold mb-2">
              A.C. Bhaktivedanta Swami Prabhupada — English Translation
            </h2>
            <p className="text-gray-200 mb-2 whitespace-pre-line">{data.prabhu.et}</p>
            {data.prabhu.ec && (
              <p className="text-gray-400 text-sm whitespace-pre-line">{data.prabhu.ec}</p>
            )}
          </div>
        )}

        {/* 🌸 Chinmayananda (Hindi Commentary) */}
        {data.chinmay && (
          <div className="bg-[#0d0d0d] p-5 mb-6 rounded-xl border border-[#c2995a]/30">
            <h2 className="text-[#c2995a] text-lg font-semibold mb-2">
              Swami Chinmayananda — हिन्दी व्याख्या
            </h2>
            <p className="text-gray-200 whitespace-pre-line">{data.chinmay.hc}</p>
          </div>
        )}

        {/* 🌸 Ramsukhdas (Detailed Hindi Explanation) */}
        {data.rams && (
          <div className="bg-[#0d0d0d] p-5 mb-6 rounded-xl border border-[#c2995a]/30">
            <h2 className="text-[#c2995a] text-lg font-semibold mb-2">
              Swami Ramsukhdas — हिन्दी अर्थ और व्याख्या
            </h2>
            {data.rams.ht && <p className="text-gray-200 mb-3">{data.rams.ht}</p>}
            {data.rams.hc && (
              <p className="text-gray-400 text-sm whitespace-pre-line">{data.rams.hc}</p>
            )}
          </div>
        )}

        {/* 🌸 Other Commentaries */}
        {data.adi?.et && (
          <div className="bg-[#0d0d0d] p-5 mb-6 rounded-xl border border-[#c2995a]/30">
            <h2 className="text-[#c2995a] text-lg font-semibold mb-2">Swami Adidevananda</h2>
            <p className="text-gray-200 whitespace-pre-line">{data.adi.et}</p>
          </div>
        )}

        {data.gambir?.et && (
          <div className="bg-[#0d0d0d] p-5 mb-6 rounded-xl border border-[#c2995a]/30">
            <h2 className="text-[#c2995a] text-lg font-semibold mb-2">Swami Gambirananda</h2>
            <p className="text-gray-200 whitespace-pre-line">{data.gambir.et}</p>
          </div>
        )}

        {/* 🌸 Dr. S. Sankaranarayan */}
        {data.san?.et && (
          <div className="bg-[#0d0d0d] p-5 mb-6 rounded-xl border border-[#c2995a]/30">
            <h2 className="text-[#c2995a] text-lg font-semibold mb-2">
              Dr. S. Sankaranarayan — English Translation
            </h2>
            <p className="text-gray-200 whitespace-pre-line">{data.san.et}</p>
          </div>
        )}

        {/* 🔹 Navigation Buttons */}
        <div className="flex justify-between mt-10">
          <button
            onClick={handlePrev}
            disabled={currentVerse === 1}
            className={`px-6 py-3 rounded-full text-sm font-medium ${
              currentVerse === 1
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-[#c2995a] text-black hover:bg-[#d4a962]"
            }`}
          >
            ← Previous
          </button>

          <button
            onClick={handleNext}
            className="px-6 py-3 rounded-full text-sm font-medium bg-[#c2995a] text-black hover:bg-[#d4a962]"
          >
            Next →
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          Data Source: vedicscriptures.github.io
        </p>
      </div>
    </div>
  );
};


export default ShlokaDetails;
