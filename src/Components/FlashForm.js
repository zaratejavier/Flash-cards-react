import React, { useState } from "react"
import {Form, FormGroup} from "semantic-ui-react"

const FlashForm = (props) => {
  // const [info, setInfo] = useState({
  //   name: '',
  //   result: '',
  // })

  const [name, setName] = useState('')
  const [result, setResult] = useState('')


  // const info = { name: name, result: result}


  const handleSubmit = (e) => {
    e.preventDefault()
    props.addCard({name: name, result: result})
    setName("")
    setResult("")
  }

  // const handleChange = (e) => {
  //   setInfo({[e.target.name]: e.target.value})
  // }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
          fluid 
          label = "Question"
          // name= "name"
          placeholder = "Enter a question.."
          value={name}
          // onChange={handleChange}
          onChange={(e) => setName(e.target.value)}
        />
  
        <Form.Input
          fluid 
          label = "Answer"
          // name = "result"
          placeholder = "Enter an answer.."
          value={result}
          // onChange={handleChange}
          onChange={(e) => setResult(e.target.value)}

        />
        <Form.Button>Submit</Form.Button>
      </Form.Group>
    </Form>
  )
}
  
export default FlashForm