// components/form/FormSection.js
import React from "react";

interface FormSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  marginTop: string;
}

const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  children,
  marginTop,
}) => {
  return (
    <div className={`${marginTop}`}>
      <h1 className="mb-2 text-xl font-semibold text-light-blue md:text-2xl">
        {title}
      </h1>
      <h2 className="text-[12px] font-medium leading-6 text-light-gray md:text-[14px]">
        {description}
      </h2>
      {children}
    </div>
  );
};

export default FormSection;
