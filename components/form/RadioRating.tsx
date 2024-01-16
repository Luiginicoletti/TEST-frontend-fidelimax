import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import React from "react";

interface RadioRatingProps {
  marginTop?: string;
}

const RadioRating = ({ marginTop }: RadioRatingProps) => {
  const numItems = 10;
  return (
    <div className={`${marginTop}`}>
      <RadioGroup defaultValue="option-one">
        <div className="flex flex-wrap gap-11">
          {Array.from({ length: numItems }, (_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <RadioGroupItem
                value={`option-${index + 1}`}
                id={`option-${index + 1}`}
                className="border-2 dark:border-light-gray"
              />
              <label
                htmlFor={`option-${index + 1}`}
                className="text-sm font-medium text-gray-700"
              >
                {index + 1}
              </label>
            </div>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default RadioRating;
