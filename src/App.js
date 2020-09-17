import React,{Component, useState} from 'react';
import './App.css';
import { Container, Header,} from "semantic-ui-react";
import FlashCards from "./Components/FlashCards"
import FlashForm from "./Components/FlashForm"

const App = () => {
  const [cards, setCards] = useState([
      {id:1, name:"What is the tallest mountain?", result: "Mt Everest"},
      {id:2, name:"Who is the CEO of Amazon?", result: "Jeff Bezos"},
      {id:3, name:"In a website browser address bar, what does “www” stand for?", result: "World Wide Web"},
      {id:4, name:"In what year were the first Air Jordan sneakers released?", result: "1984"},
      {id:5, name:"According to Greek mythology who was the first woman on earth?", result: "Pandora"},
      {id:6, name:"Which African country was formerly known as Abyssinia?", result: "Ethiopia"},
      {id:7, name:"What was the first toy to be advertised on television?", result: "Mr. Potato Head"},
      {id:8, name:"What is the tallest breed of dog in the world?", result: "The Great Dane"},
      {id:9, name:"What color eyes do most humans have?", result: "Brown"},
      {id:10, name:"What is the name of the Earth’s largest ocean?", result: "The Pacific Ocean"}
  ])
  
  const addCard = (card) => {
    debugger
    let newCard = {id: `${Math.random()}`, ...card,};
    setCards([newCard, ...cards])
  }

  const removeCard = (id) => {
    setCards(cards.filter((card) =>
      card.id !== id
    ))    
  };
  
    return (
      <Container>
        <Header as="h1"> Flash Cards</Header>

        <FlashForm addCard={addCard}/>

        <FlashCards cards={cards} removeCard={removeCard} />
      </Container>
    )
  }

export default App;
