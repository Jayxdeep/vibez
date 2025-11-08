import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);

  // ⚡ Flash 2.0 AI Text Generation Function
  const generateResponse = async (prompt) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/flash-2.0:generateContent",
        {
          contents: [{ parts: [{ text: prompt }] }],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            key: import.meta.env.VITE_FLASH_API_KEY, // ✅ pulled securely from .env
          },
        }
      );

      const output =
        res.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ No response from Flash 2.0";

      setResponse(output);
      return output;
    } catch (err) {
      console.error("❌ Flash 2.0 API Error:", err);
      setError("Something went wrong while generating the response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        generateResponse,
        response,
        loading,
        error,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

// 🪄 Custom hook for consuming the context
export const useApi = () => useContext(ApiContext);
