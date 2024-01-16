"use client";
import React, { useEffect, useState } from "react";
const Card = React.lazy(() => import("./Card"));
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
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-[-192px] flex items-center justify-center">
      <div className="flex w-2/3 max-w-[648px] flex-col justify-start gap-6">
        <h1 className="text-2xl font-semibold text-light-white md:text-4xl lg:text-4xl">
          Pesquisa de Satisfação
        </h1>
        {data && <Card surveyData={data} />}
      </div>
    </div>
  );
};

export default Main;
