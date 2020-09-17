import React from "react"
import { Card } from "semantic-ui-react"
import FlashCard from "./FlashCard"

const FlashCards = ({ cards, removeCard, editCard }) => {

  const renderFlashCard = () => {
    return cards.map((card) => (
    <Card>
      <FlashCard
        key={card.id}
        id={card.id}
        name={card.name}
        result={card.result}
        removeCard={removeCard}
        editCard={editCard}
        />
    </Card>
    ))
  }
 
  return (
  <div>
    {renderFlashCard()}
  </div>
  )
}


export default FlashCards

