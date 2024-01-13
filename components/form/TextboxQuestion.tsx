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
}

const TextboxQuestion = ({
  marginTop,
  placeholder,
  label,
  answerValue,
  mandatory,
  content,
}: TextboxQuestionProps) => {
  return (
    <div className={`${marginTop} grid w-full gap-1.5`}>
      <Label htmlFor="message" className="text-[16px]">
        {label}
      </Label>
      <Textarea
        placeholder={placeholder}
        id="message"
        className="border-2 dark:bg-black/10 dark:text-white"
        defaultValue={answerValue} // Utilize defaultValue para exibir o valor inicial
      />
    </div>
  );
};

export default TextboxQuestion;
