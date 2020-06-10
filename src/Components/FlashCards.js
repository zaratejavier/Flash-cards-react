import React from "react"
import { Card } from "semantic-ui-react"
import FlashCard from "./FlashCard"

const FlashCards = ({cards}) => (
  cards.map( card => (
    <Card key={card.id}>
      <FlashCard key={card.id} name ={card.name} result ={card.result}/>        
    </Card>
  ))
)


export default FlashCards

