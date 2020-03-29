import React from 'react';
import './QuoteForm.css';

const MAX_LENGTH = 30;

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {character: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const value = event.target.value.length <= MAX_LENGTH && event.target.value;
        this.setState({ character : value })
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        // SOLUTION for conditional border color : compute a BOOLEAN
        // telling if we've reached the maximum, and use it in the input's className
        const maximumReached = this.state.character.length >= MAX_LENGTH;

        // SOLUTION for displaying the number of remaining characters :
        // we compute it here and use it below
        const numRemaining = MAX_LENGTH - this.state.character.length;

      return (
        <form
          className="QuoteForm"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="character">Character:</label>
          <input
            className={!maximumReached ? "length-ok" : "length-maximum-reached"}
            id="character"
            name="character"
            type="text"
            value={this.state.character}
            onChange={this.handleChange}
          />
          <small className="remaining-characters">
            {numRemaining} remaining characters
            </small>
            <p>
                You typed: <strong>{this.state.character}</strong>
            </p>
        </form>
      );
    }
  }
  
export default QuoteForm;