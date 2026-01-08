import React from "react";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  text: string;
  stars: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, text, stars }) => {
  return (
    <div className="bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl w-[350px] flex-shrink-0 backdrop-blur-sm">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < stars ? "#FFDB25" : "transparent"}
            stroke={i < stars ? "#FFDB25" : "#555"}
          />
        ))}
      </div>
      <p className="text-white/80 italic mb-4 text-sm">"{text}"</p>
      <p className="text-[#FFDB25] font-bold text-sm uppercase tracking-wider">
        — {name}
      </p>
    </div>
  );
};

export default ReviewCard;
