"use client";

import { useToast } from "@/components/ui/use-toast";

import axios from "axios";

import React, { Suspense, useState } from "react";
import WaitSkeleton from "@/utils/WaitSkeleton";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

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
  const { toast } = useToast();
  const { itens } = surveyData;

  const [errorModalData, setErrorModalData] = useState();

  const enviarErro = async () => {
    const response = await fetch(
      "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-error.json"
    );
    const data = await response.json();

    setErrorModalData(data.error);
  };

  const enviarSuccess = async () => {
    try {
      const response = await fetch(
        "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-success.json"
      );

      const data = await response.json();

      setErrorModalData(data.error);
    } catch (error) {
      console.error("Erro ao enviar solicitação:", error);
    }
  };

  const enviarFakePost = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts/"
      );

      if (response.status === 201) {
        toast({
          title: "Parabens!",
          description: "Formulário enviado com sucesso!",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Ops!",
          description: "Erro ao enviar o formulário. Tente novamente.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ops!",
        description: "Erro ao enviar o formulário. Tente novamente.",
      });
    }
  };

  return (
    <div className="flex flex-col rounded-2xl bg-light-white px-8 dark:bg-light-blue dark:text-white">
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
              rows={7}
            />
          ))}

          <div className="my-10 flex w-full flex-col justify-center gap-2 md:flex-row">
            <Dialog>
              <DialogTrigger
                onClick={enviarSuccess}
                className="btn flex items-center justify-center rounded-full bg-emerald-600 py-3 font-bold text-white shadow-custom dark:shadow-md dark:shadow-yellow-300/20 md:flex md:w-1/3"
              >
                Enviar Sucesso
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Status</DialogTitle>
                  <DialogDescription>
                    <div className="grid flex-1 gap-2">
                      <h1>Enviado com sucesso! </h1>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger
                onClick={enviarErro}
                className="btn flex items-center justify-center rounded-full bg-light-yellow py-3 font-bold text-white shadow-custom dark:shadow-md dark:shadow-yellow-300/20 md:flex md:w-1/3"
              >
                Enviar Erro
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Status</DialogTitle>
                  <DialogDescription>
                    <div className="grid flex-1 gap-2">
                      <pre>{JSON.stringify(errorModalData, null, 2)}</pre>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Button
              onClick={enviarFakePost}
              className="btn bg-rose-500 py-6 font-bold text-white shadow-custom dark:shadow-md dark:shadow-yellow-300/20 md:flex md:w-1/3"
            >
              Enviar Fake Post
            </Button>
          </div>
        </form>
      </Suspense>
    </div>
  );
};

export default Card;
