import React, { Component } from 'react';
import Flashcard from './Flashcard';

export default class FlashCardList extends Component {
  render() {
    return (
      <div className="row">
        <div className="columns medium-6 medium-centered padding-large">
          <Flashcard />
        </div>
      </div>
    );
  }
}
