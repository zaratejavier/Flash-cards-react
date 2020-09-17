import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react"
import "../Components/FlashCard.css"
import DeleteIcon from '@material-ui/icons/Delete';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FlashForm from "./FlashForm";
import EditIcon from '@material-ui/icons/Edit';

const FlashCard = ({ id, name, result, removeCard, editCard }) => {
  const [editing, setEditing] = useState(true)
  const [show, setShow] = useState(false)

  return (
   <div className="card">
    {show ? <FlashForm editCard={editCard} id={id}/> : 
    <div>
      <div className="content">
        <Card.Content className="front"> {name}  </Card.Content>
        <div>{editing ? null  : <Card.Content className="back"> {result} </Card.Content>}</div>
        {/* <Card.Content className="back"> {result} </Card.Content> */}
      </div>
    </div>
      }
      <Button onClick={() => removeCard(id)}><DeleteIcon/></Button>
      <Button onClick={() => setEditing(!editing)}>{editing ? <LockIcon /> : <LockOpenIcon />}</Button>
      <Button onClick={() => setShow(!show)}><EditIcon/> </Button>
  </div>
  )
}


export default FlashCard