import React from "react";
import{Card,Button} from "semantic-ui-react"

const FlashCard =({id, name, result, removeCard}) => (
  <>
    <Card.Content> {name} {result} </Card.Content> 
    <Button onClick={() => removeCard(id)} color="red">Delete</Button>
    <Button color="green">View</Button>
  </>
)

export default FlashCard