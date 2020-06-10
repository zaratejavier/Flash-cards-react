import React from "react";
import{Card,Button} from "semantic-ui-react"

const FlashCard =({id, name, result, remove}) => (
  <>
  <Card.Content> {name} {result} </Card.Content> 
  <Button onClick={() => remove(id)} color="red">Delete</Button>
  <Button color="green">View</Button>
  </>
)

export default FlashCard