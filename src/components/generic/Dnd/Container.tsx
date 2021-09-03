import { FC, useState, useCallback } from "react";
import { Card } from "./Card";
import update from "immutability-helper";

const style = {
  maxWidth: 636,
  width: "100%",
  margin: "auto",
  marginTop: 40,
};

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

export const Container: FC = () => {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: "Home Page",
      },
      {
        id: 2,
        text: "Blog Page",
      },
      {
        id: 3,
        text: "Statistics Page",
      },
      {
        id: 4,
        text: "Reports Page",
      },
      {
        id: 5,
        text: "Members Page",
      },
      {
        id: 6,
        text: "Survey Page",
      },
      {
        id: 7,
        text: "Regulations Page",
      },
      {
        id: 8,
        text: "How To Guide Page",
      },
      {
        id: 9,
        text: "About Page",
      },
      {
        id: 10,
        text: "Contact Page",
      },
    ]);

    const moveCard = useCallback(
      (dragIndex: number, hoverIndex: number) => {
        const dragCard = cards[dragIndex];
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          })
        );
      },
      [cards]
    );

    const renderCard = (card: { id: number; text: string }, index: number) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      );
    };

    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    );
  
};
