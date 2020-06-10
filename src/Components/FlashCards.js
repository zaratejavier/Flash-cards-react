import React from "react"
import { Card } from "semantic-ui-react"
import FlashCard from "./FlashCard"

const FlashCards = ({cards, remove}) => (
  cards.map( card => (
    <Card>
      <FlashCard 
      key={card.id}
      name ={card.name}
      result ={card.result}
      remove={remove}/>        
    </Card>
  ))
)


export default FlashCards

