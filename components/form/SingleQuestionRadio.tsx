import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

interface SingleQuestionRadioProps {
  marginTop?: string;
  questionData: {
    typeQuestion: number;
    content: string;
    mandatory: boolean;
    answerValue?: number;
    itens?: { value: number; description: string }[];
  };
}

const SingleQuestionRadio = ({
  marginTop,
  questionData,
}: SingleQuestionRadioProps) => {
  return (
    <div className={`${marginTop}`}>
      <Label className="mt-10 text-[16px]">{questionData.content}</Label>
      <RadioGroup
        className="mt-3 flex gap-4"
        defaultValue={questionData.answerValue?.toString()}
      >
        {questionData.itens?.map((item) => (
          <div key={item.value} className="flex items-center space-x-3">
            <RadioGroupItem
              value={item.value.toString()}
              id={`r${item.value}`}
            />
            <Label htmlFor={`r${item.value}`}>{item.description}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default SingleQuestionRadio;
