"use client";

import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import Card from "./Card";

const Messages = ({ fetchMessage }: { fetchMessage: Promise<{title: string, body: string}[]> }) => {
  const [cards, setCards] = useState<{ title: string; body: string }[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  fetchMessage
    .then((res) => {
      setCards(res);
    })
    .catch((e) => {
      setErrorMessage(e);
    });

  if (!cards.length && !errorMessage) {
    return <LoadingSpinner />;
  }

  if (errorMessage) {
    return <div className="text-red-500">{errorMessage}</div>;
  }

  return (
    <div className="flex-col gap-4 flex">
      {cards.map((card) => (
        <Card title={card.title}>{card.body}</Card>
      ))}
    </div>
  );
};

export default Messages;
