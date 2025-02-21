"use client";

import { useState, use } from "react";
import Card from "./Card";

const Messages = ({
  fetchMessage,
}: {
  fetchMessage: Promise<{ title: string; body: string }[]>;
}) => {
  const cards = use(fetchMessage);

  return (
    <div className="flex-col gap-4 flex">
      {cards.map((card) => (
        <Card title={card.title}>{card.body}</Card>
      ))}
    </div>
  );
};

export default Messages;
