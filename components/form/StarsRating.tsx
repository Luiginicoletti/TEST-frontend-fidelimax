import React, { useState, useEffect } from "react";
import Image from "next/image";

interface StarsRatingProps {
  marginTop?: string;
  answerValue?: number;
  onChange?: (value: number) => void;
}

const StarsRating = ({
  marginTop,
  answerValue,
  onChange = () => {},
}: StarsRatingProps) => {
  const [filledStars, setFilledStars] = useState<number>(0);

  useEffect(() => {
    setFilledStars(answerValue || 0);
  }, [answerValue]);

  const handleStarClick = (index: number) => {
    const newFilledStars = index + 1;
    setFilledStars(newFilledStars);
    onChange(newFilledStars);
  };

  return (
    <div className={`${marginTop} mt-4 flex flex-wrap gap-2 sm:justify-start`}>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <Image
            key={index}
            alt={`Estrela ${index + 1}`}
            src={index < filledStars ? "/star-full.svg" : "/star-empty.svg"}
            width={64}
            height={64}
            className="cursor-pointer"
            onClick={() => handleStarClick(index)}
          />
        ))}
    </div>
  );
};

export default StarsRating;
