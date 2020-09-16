import React from "react"
import { Card } from "semantic-ui-react"
import FlashCard from "./FlashCard"

const FlashCards = ({ cards, removeCard }) => {

  const renderFlashCard = () => {
    return cards.map((card) => (
    <Card>
      <FlashCard
        key={card.id}
        id={card.id}
        name={card.name}
        result={card.result}
        removeCard={removeCard} />
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

