"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import LoadingSpinner from "../utils/LoadingSpinner";

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

const Main: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json"
        );

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }

        const jsonData: Data = await response.json();

        setData(jsonData);
      } catch (error) {
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // O array vazio garante que o efeito só é executado uma vez, sem dependências

  return (
    <div className="my-[-192px] flex items-center justify-center">
      <div className="flex w-2/3 max-w-[648px] flex-col justify-start gap-6">
        <h1 className="text-2xl font-semibold text-light-white md:text-3xl lg:text-4xl">
          Pesquisa de Satisfação
        </h1>
        <div className="">
          {loading ? <LoadingSpinner /> : data && <Card surveyData={data} />}
        </div>
      </div>
    </div>
  );
};

export default Main;
