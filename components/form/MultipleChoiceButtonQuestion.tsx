import { useState } from "react";

interface MultipleChoiceButtonQuestionProps {
  marginTop?: string;
  questionData: {
    typeQuestion: number;
    horizontal?: boolean;
    content: string;
    mandatory: boolean;
    itens?: { value: number; description: string }[];
  };
}

const MultipleChoiceButtonQuestion = ({
  marginTop,
  questionData,
}: MultipleChoiceButtonQuestionProps) => {
  const { horizontal, content, itens } = questionData || [];
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleItemClick = (item: number) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className={`${marginTop}`}>
      <label className={`mb-2 mt-10 text-[16px] `}>{content}</label>
      <div className={`flex-wrap ${horizontal ? "flex-wrap" : ""}`}>
        {itens?.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => handleItemClick(item.value)}
            className={`mb-2 mr-2 rounded-full border p-1 px-4 font-normal hover:bg-gray-100 ${
              selectedItems.includes(item.value) ? "bg-light-yellow" : ""
            }`}
          >
            {item.description}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoiceButtonQuestion;
