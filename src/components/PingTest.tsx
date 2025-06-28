import { useEffect, useState } from "react";
import api from "../api/axios"; // uses import.meta.env.VITE_API_BASE_URL

export const PingTest = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    api.get("/ping")
      .then(res => setResponse(res.data))
      .catch(() => setResponse("Failed to fetch /ping"));
  }, []);

  return <div>/ping response: {response}</div>;
};