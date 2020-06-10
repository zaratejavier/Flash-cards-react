import React from "react"
import {Form, FormGroup} from "semantic-ui-react"

class FlashForm extends React.Component{
  state = {
    name: '',
    result: '',
  }

  handleSubmit =  (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.addCard(this.state)
  }

  handleChange = (e) =>{
      this.setState({
        [e.target.name]: e.target.value}) //this add what the user inputs the the state above
  }


  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid 
            label = "Question"
            name= "name"
            placeholder = "Enter a question.."
            value={this.state.name}
            onChange={this.handleChange}
          />

          <Form.Input
            fluid 
            label = "Answer"
            name = "result"
            placeholder = "Enter an answer.."
            value={this.state.result}
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>

    )
  }
}

export default FlashForm