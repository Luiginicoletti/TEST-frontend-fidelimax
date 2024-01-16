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
  optional: boolean;
}

const TextboxQuestion = ({
  marginTop,
  placeholder,
  label,
  answerValue,
  mandatory,
  content,
  rows,
  optional,
}: TextboxQuestionProps) => {
  return (
    <div className={`${marginTop} grid w-full gap-1.5`}>
      <Label htmlFor="message" className="text-[16px] font-medium">
        {label}{" "}
        {optional && (
          <span className="text-[14px] font-medium text-[#737A86]">
            (opcional)
          </span>
        )}
      </Label>
      <Textarea
        placeholder={placeholder}
        id="message"
        className="resize-none border-2 placeholder:font-medium dark:bg-black/10 dark:text-white"
        defaultValue={answerValue}
        rows={rows}
      />
    </div>
  );
};

export default TextboxQuestion;
