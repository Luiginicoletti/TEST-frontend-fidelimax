import React from "react";

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

// Função para buscar os dados
async function fetchData(): Promise<Data> {
  const response = await fetch(
    "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json"
  );
  const data: Data = await response.json();
  return data;
}

// Componente que usará os dados
const MyComponent: React.FC<{ data: Data }> = ({ data }) => {
  // Aqui você pode usar os dados como quiser
  return <div>{/* Seu código aqui */}</div>;
};

// Buscar os dados no lado do servidor durante a renderização
export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } };
}

export default MyComponent;
