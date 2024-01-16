import { itemsCheck } from "@/utils/checkbox";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@radix-ui/react-label";
import React from "react";

interface MultipleChoiceCheckQuestionProps {
  marginTop?: string;
}

const MultipleChoiceCheckQuestion = ({
  marginTop,
}: MultipleChoiceCheckQuestionProps) => {
  return (
    <div className={`${marginTop}`}>
      <Label className="text-[16px]">Pergunta de múltipla escolha?</Label>

      {itemsCheck.map((item) => (
        <div key={item.id} className="mb-4 flex items-center space-x-4">
          <Checkbox id={`checkbox-${item.id}`} />
          <div className="">
            <label
              htmlFor={`checkbox-${item.id}`}
              className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item.label}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoiceCheckQuestion;
