import React from "react"
import {Button, Card } from "semantic-ui-react"

const Cards = ({cards}) => (
  cards.map( card => (
    <Card key={card.id}>
      <Card.Content> {card.name}</Card.Content> 
        {/* <Button color="red">
          Delete
        </Button> */}
    </Card>
  ))
)


export default Cards