import React, { Component } from 'react';
import './MemoryGameApp.css';
import Card from './Card'
import Navbar from './Navbar'
// Use to shuffle the card array
import shuffle from 'shuffle-array'


const CardState= {
  HIDING : 0,
  SHOWING : 1,
  MATCHING : 2
}

export default class MemoryGameApp extends Component {
  
  constructor(props) {
    super(props);


    const allColors= ["AliceBlue","Crimson","Cyan","ForestGreen","Fuchsia","LemonChiffon","Pink","Tomato"];

    let cards = [
      { id: 0,  cardState : CardState.HIDING, backgroundColor : allColors[0]},
      { id: 1,  cardState : CardState.HIDING, backgroundColor : allColors[0]},
      { id: 2,  cardState : CardState.HIDING, backgroundColor : allColors[1]},
      { id: 3,  cardState : CardState.HIDING, backgroundColor : allColors[1]},
      { id: 4,  cardState : CardState.HIDING, backgroundColor : allColors[2]},
      { id: 5,  cardState : CardState.HIDING, backgroundColor : allColors[2]},
      { id: 6,  cardState : CardState.HIDING, backgroundColor : allColors[3]},
      { id: 7,  cardState : CardState.HIDING, backgroundColor : allColors[3]},
      { id: 8,  cardState : CardState.HIDING, backgroundColor : allColors[4]},
      { id: 9,  cardState : CardState.HIDING, backgroundColor : allColors[4]},
      { id: 10, cardState : CardState.HIDING, backgroundColor : allColors[5]},
      { id: 11, cardState : CardState.HIDING, backgroundColor : allColors[5]},
      { id: 12, cardState : CardState.HIDING, backgroundColor : allColors[6]},
      { id: 13, cardState : CardState.HIDING, backgroundColor : allColors[6]},
      { id: 14, cardState : CardState.HIDING, backgroundColor : allColors[7]},
      { id: 15, cardState : CardState.HIDING, backgroundColor : allColors[7]},
    ]
    // Shuffle the card array
    cards = shuffle(cards);

    this.state = {cards, noClick: false}

    this.handleClick = this.handleClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleNewGame() {
    let cards = this.state.cards.map(c => ({
      ...c,
      cardState: CardState.HIDING
    }));
    cards = shuffle(cards);
    this.setState({cards});
  }
  
  handleClick(id) {
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(c => {
        if (idsToChange.includes(c.id)) {
          return {
            ...c,
            cardState: newCardState
          };
        }
        return c;
      });
    }

    const foundCard = this.state.cards.find(c => c.id === id);
    
    if (this.state.noClick || foundCard.cardState !== CardState.HIDING) {
      return;
    }
    
    let noClick = false;
    
    let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);
    
    const showingCards =  cards.filter((c) => c.cardState === CardState.SHOWING);
    
    const ids = showingCards.map(c => c.id);
    
    if (showingCards.length === 2 &&
        showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
      cards = mapCardState(cards, ids, CardState.MATCHING);
    } else if (showingCards.length === 2) {
      let hidingCards = mapCardState(cards, ids, CardState.HIDING);
      
      noClick = true;
      
      this.setState({cards, noClick}, () => {
        setTimeout(() => {
          // set the state of the cards to HIDING after 1.3 seconds
          this.setState({cards: hidingCards, noClick: false});
        }, 1300);
      });
      return;
    }
    
    this.setState({cards, noClick});
  }

  render() {
    const cards = this.state.cards.map((card) => (
      <Card
        key={card.id}
        showing={card.cardState !== CardState.HIDING}
        backgroundColor={card.backgroundColor}
        onClick={() => this.handleClick(card.id)}
      />
    ));

    return (
      <div>
        <Navbar onNewGame={this.handleNewGame}/>
        {cards}
      </div>
    );
  }
}