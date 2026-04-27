"use client";

import { useState, useEffect } from "react";
import { Users } from "lucide-react";

export default function CountdownTimer() {
  const [seats, setSeats] = useState(50);

  useEffect(() => {
    // Initial random decrease to look "in progress"
    const initialDecrease = Math.floor(Math.random() * 8) + 5;
    setSeats(50 - initialDecrease);

    const interval = setInterval(() => {
      setSeats((prev) => {
        if (prev <= 3) return prev;
        // 10% chance to drop a seat every 10 seconds
        if (Math.random() > 0.9) {
          return prev - 1;
        }
        return prev;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center space-x-3 bg-red-50 border border-red-100 px-4 py-2 rounded-full mb-8 animate-pulse-slow">
      <Users className="w-4 h-4 text-red-600" />
      <span className="text-red-700 text-sm font-bold uppercase tracking-wider">
        Only {seats} Pioneer Program Seats Remaining
      </span>
    </div>
  );
}
