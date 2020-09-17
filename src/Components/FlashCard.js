import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react"
import "../Components/FlashCard.css"
import DeleteIcon from '@material-ui/icons/Delete';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const FlashCard = ({ id, name, result, removeCard }) => {
  const [editing, setEditing] = useState(true)
 
  return(
    <div className="card">
      <div className="content">
        <Card.Content className="front"> {name}  </Card.Content>
        <div>{editing ? null  : <Card.Content className="back"> {result} </Card.Content>}</div>
        {/* <Card.Content className="back"> {result} </Card.Content> */}
      </div>
        <Button onClick={() => removeCard(id)}><DeleteIcon/></Button>
        <Button onClick={() => setEditing(!editing)}>{editing ? <LockIcon/> : <LockOpenIcon/>}</Button>
    </div>
  )
}



export default FlashCard