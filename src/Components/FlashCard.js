import React from "react";
import{Card,Button} from "semantic-ui-react"

const FlashCard =({id, name, result}) => (
  <>
  <Card.Content> {name} {result} </Card.Content> 
  <Button color="red">Delete</Button>
  </>
)






export default FlashCard