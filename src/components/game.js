import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props); 
        this.state={
            correct: Math.floor(Math.random() * 100), // change to random 1-100
            guesses: [],
            count: 0,
            feedback: 'Guess a Number 1-100'    
        }
    }

    handleReset(){
        this.setState({
            correct: Math.floor(Math.random() * 100), // change to random 1-100
            guesses: [],
            count: 0,
            feedback: 'Guess a Number 1-100'    
        })
    }

    handleGuess(rawGuess) {
        let guess = Math.floor(rawGuess);
        let correct = this.state.correct;
        let clue = '';
        let delta = Math.abs(guess - correct);
        if (guess === correct) {
            clue = "Bazinga!"
        } else if ( isNaN(guess)) {
            clue = `${rawGuess} is not a NUMBER, Bozo!`
        } else if (guess < 0 || guess > 100) {
            clue = 'Guess must be between 1 and 100'
        } else if (delta < 3) {
            clue = 'SMOKIN\' HOT!!!!'
        } else if (delta < 6) {
            clue = 'Very Warm!'
        } else if (delta < 10) {
            clue = 'Warm'
        } else if (delta < 30) {
            clue = 'Lukewarm'
        } else if (delta < 50) {
            clue = 'Cold'
        } else if (delta < 100) {
            clue = 'Cold as Shit'
        } else {
            clue = 'What Happened? Guess is Invalid...'
        }
        this.setState({
            count: this.state.count + 1,
            guesses: [...this.state.guesses, guess],
            feedback: clue
        })
    }
    render() {
        return (
            <div>
                <Header handleReset={() => this.handleReset()} />
                <GuessSection
                    feedback={this.state.feedback} 
                    handleChange={guess=>this.handleGuess(guess)}
                />
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}

