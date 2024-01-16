import React from "react";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";

interface TextboxQuestionProps {
  marginTop?: string;
  placeholder: string;
  label: string;
  answerValue?: string;
  mandatory?: boolean;
  content?: string;
  rows?: number;
}

const TextboxQuestion = ({
  marginTop,
  placeholder,
  label,
  answerValue,
  mandatory,
  content,
  rows,
}: TextboxQuestionProps) => {
  return (
    <div className={`${marginTop} grid w-full gap-1.5`}>
      <Label htmlFor="message" className="text-[16px]">
        {label}
      </Label>
      <Textarea
        placeholder={placeholder}
        id="message"
        className="resize-none border-2 dark:bg-black/10 dark:text-white"
        defaultValue={answerValue}
        rows={rows}
      />
    </div>
  );
};

export default TextboxQuestion;
