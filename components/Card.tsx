"use client";

import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import WaitSkeleton from "@/utils/WaitSkeleton";

// Importe StarsRating, RadioRating e outros componentes aqui usando React.lazy
const StarsRating = React.lazy(() => import("./form/StarsRating"));
const RadioRating = React.lazy(() => import("./form/RadioRating"));
const SingleQuestionRadio = React.lazy(
  () => import("./form/SingleQuestionRadio")
);
const MultipleChoiceButtonQuestion = React.lazy(
  () => import("./form/MultipleChoiceButtonQuestion")
);
const MultipleChoiceCheckQuestion = React.lazy(
  () => import("./form/MultipleChoiceCheckQuestion")
);
const TextboxQuestion = React.lazy(() => import("./form/TextboxQuestion"));
const PopoverQuestion = React.lazy(() => import("./form/PopoverQuestion"));
const FormSection = React.lazy(() => import("@/components/FormSection"));

type Item = {
  typeQuestion: number;
  answerValue?: number;
  mandatory: boolean;
  content: string;
  itens?: { value: number; description: string }[];
  horizontal?: boolean;
};

type Data = {
  itens: Item[];
  error: string;
  warning: string;
};

type CardProps = {
  surveyData: Data;
};

const Card: React.FC<CardProps> = ({ surveyData }) => {
  console.log("Dados recebidos no Card:", surveyData);

  const { itens } = surveyData;

  console.log(itens);

  return (
    <div className="flex flex-col rounded-2xl bg-light-white  p-8 dark:bg-light-blue dark:text-white">
      <Suspense fallback={<WaitSkeleton />}>
        <form>
          {surveyData.itens.map((item, index) => {
            switch (item.typeQuestion) {
              case 1:
                return (
                  <FormSection
                    key={index}
                    marginTop="mt-10"
                    title="Título da pergunta deve ficar aqui"
                    description={item.content}
                  >
                    <StarsRating
                      marginTop="mt-10"
                      answerValue={item.answerValue}
                    />
                  </FormSection>
                );

              case 2:
                return (
                  <FormSection
                    key={index}
                    marginTop="mt-10"
                    title="Título da pergunta deve ficar aqui"
                    description={item.content}
                  >
                    <RadioRating marginTop="mt-10" />
                  </FormSection>
                );

              case 3:
                return (
                  <TextboxQuestion
                    key={index}
                    marginTop="mt-10"
                    placeholder="Digite aqui..."
                    label={`${item.content} (opcional)`}
                  />
                );

              case 4:
                return (
                  <PopoverQuestion
                    key={index}
                    marginTop="mt-10"
                    lojas={item.itens || []}
                  />
                );

              case 5:
                return (
                  <SingleQuestionRadio
                    key={index}
                    marginTop="mt-10"
                    questionData={item}
                  />
                );

              case 6:
                return (
                  <MultipleChoiceButtonQuestion
                    key={index}
                    marginTop="mt-10"
                    questionData={item}
                  />
                );

              default:
                return "";
            }
          })}
          <MultipleChoiceCheckQuestion marginTop="mt-10" />

          {itens.slice(-2).map((item, index) => (
            <TextboxQuestion
              key={`additionalTextboxQuestion${index + 1}`}
              marginTop="mt-10"
              placeholder="Digite aqui..."
              label={item.content}
              answerValue={String(item.answerValue || "")}
              mandatory={item.mandatory}
              content={item.content}
            />
          ))}
          <Button className="mt-10 w-full py-6 font-bold text-black shadow-custom dark:shadow-md dark:shadow-yellow-300/20 md:flex md:w-1/3">
            Enviar
          </Button>
          <div className="mt-10 flex w-full flex-col justify-center gap-2 md:flex-row">
            <Button className="bg-emerald-600 py-6 font-bold text-white shadow-custom dark:shadow-md dark:shadow-yellow-300/20 md:flex md:w-1/3">
              Enviar Sucesso
            </Button>
            <Button className="bg-orange-400 py-6 font-bold text-white shadow-custom dark:shadow-md dark:shadow-yellow-300/20 md:flex md:w-1/3">
              Enviar Erro
            </Button>
            <Button className="bg-rose-500 py-6 font-bold text-white shadow-custom dark:shadow-md dark:shadow-yellow-300/20 md:flex md:w-1/3">
              Enviar Fake Post
            </Button>
          </div>
        </form>
      </Suspense>
    </div>
  );
};

export default Card;
