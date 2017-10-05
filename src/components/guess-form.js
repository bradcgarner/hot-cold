import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            // <form onSubmit={e => {
            //     e.preventDefault(); 
            //     this.props.onAdd(this.inputText.value); 
            //     this.inputText.value = ''; 
            //     }}>
            //     <input className="input" 
            //     ref={input => this.inputText = input} 
            //     placeholder="Add a post"
            //     />
            // </form>

            <form onSubmit={e => {
                e.preventDefault();
                console.log(this.inputText.value);
                this.props.handleChange(this.inputText.value);
                this.inputText.value = ''; 
                } 
            } >
                <input 
                    ref={input => this.inputText = input }
                    type="text" 
                    name="userGuess" 
                    id="userGuess"
                    className="text" 
                    maxLength="3" 
                    autoComplete="off"
                    placeholder="Enter your Guess" 
                    required 
                />
                <input 
                    type="submit"
                    id="guessButton" 
                    className="button" 
                    name="submit" 
                    value="Guess"
                />
            </form>
        );
    }
};

