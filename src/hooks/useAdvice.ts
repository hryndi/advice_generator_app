import { useEffect, useState } from "react";
import { TAdvice } from "../types";

export const useAdvice = () => {
  const [advice, setAdvice] = useState<TAdvice | null>(null);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data: TAdvice = await response.json();
      setAdvice(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return { advice, fetchAdvice };
};
