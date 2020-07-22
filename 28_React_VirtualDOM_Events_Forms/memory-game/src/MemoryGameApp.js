import React, {Component} from 'react';
import shuffle from 'shuffle-array';
import Navbar from './Navbar';
import Card from './Card';


// A card can be in 1 of 3 CardStates
// HIDING - the card is not being shown
// SHOWING - the card is being shown but does not have a match yet
// MATCHING - the card is being shown and has a match.
//            the card should never move from MATCHING to another state during
//            game play.
const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
}

export default class MemoryGame extends Component {
  constructor(props) {
    super(props);

    const allColors= ["AliceBlue","Crimson","Cyan","ForestGreen","Fuchsia","LemonChiffon","Pink","Tomato"];

    // The cards that we will use for our state.
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
      { id: 15, cardState : CardState.HIDING, backgroundColor : allColors[7]}
    ];
    // Shuffle the card array
    cards = shuffle(cards);
    this.state = {cards, noClick: false};
    
    this.handleClick = this.handleClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }
  
  handleNewGame(){
    // With every new game we set the state of each card to hiding and we shuffle them again
    let cards = this.state.cards.map( card => ({
      // we destructure each card
      ...card,
      // Set each card set to hiding
      cardState: CardState.HIDING
    }))
    // Shuffle the cards
    cards = shuffle(cards);
    // Updating the cards
    this.setState({cards});
  }
  
  handleClick(id) {
     // Takes the array of cards, the array of ids to change, what state we want those ids to have
    const mapCardState = (cards, idsToChange, newCardState) => {
      // It will go through the array, map each element
      return cards.map(card=> {
        // if the element matches the id we are looking for, we change the card state
        if (idsToChange.includes(card.id)) {
          return {
            ...card,
            cardState: newCardState
          };
        }
        return card;
      });
    }
    // We''l grab the card we want out of the array, that's the card we just clicked on
    const foundCard = this.state.cards.find(card=> card.id === id);
    // If the state of the card we just clicked on is not equal to hiding, then we don't want to  do anything. 
    // That means it's already revealed or matching
    if (this.state.noClick || foundCard.cardState !== CardState.HIDING) {
      return;
    }
    // Can the user click again? If the user has no matching, or one matching, the user cant click again. 
    // This is for the user to wait sometime after clicking on two cards
    let noClick = false;
    // We want to set the card we just clicked on to showing
    let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);
    // Only get showing cards back as an array
    const showingCards =  cards.filter((card) => card.cardState === CardState.SHOWING);
    // Get the id of the showing cards as an array
    const ids = showingCards.map(card=> card.id);
    // If 2 cards are showing AND their backgroundColor match
    if (showingCards.length === 2 && showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
      // set their state to matching
      cards = mapCardState(cards, ids, CardState.MATCHING);
    // If there are 2 showing cards but none of them match
    } else if (showingCards.length === 2) {
      // get all of the hiding cards
      let hidingCards = mapCardState(cards, ids, CardState.HIDING);
      // prevent the user from clicking on more cards
      noClick = true;
      // Wait for some time to pass before the user can click and the cards to hide again
      this.setState({cards, noClick}, () => {
        setTimeout(() => {
          // set the state of the cards to HIDING after 1 second
          this.setState({cards: hidingCards, noClick: false});
        }, 1000);
      });
      return;
    }
    // This happens if there is only one card showing thet's not matched. There are two cards showing that do match
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