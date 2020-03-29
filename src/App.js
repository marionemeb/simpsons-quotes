import React from 'react';
import Navbar from './components/Navbar';
import QuoteForm from './components/QuoteForm';
import QuoteList from './components/QuoteList';
import DisplayQuotes from './components/DisplayQuotes';
import axios from 'axios';

const sampleQuotes={
  quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection : "Left"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: sampleQuotes
    };
    this.getQuotes = this.getQuotes.bind(this);
  }

  getQuotes(){
    // Send the request
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    // Extract the DATA from the received response
    .then(response => response.data)
    // Use this data to update the state
    .then(data => {
      console.log(data[0]);
      this.setState({
        quotes: data[0],
      });
    });
  }

  render(){
  return (
    <div className="App">
      <Navbar />
      <DisplayQuotes quotes={this.state.quotes}/>
      <button type="button" onClick={this.getQuotes}>Get Simpsons Quotes</button>
      <QuoteForm />
      <QuoteList />
    </div>
  );
}
}

export default App;
