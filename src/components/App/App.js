import './App.css';
import Header from '../Header/Header'
import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Results from '../Results/Results';

const name=require('@rstacruz/startup-name-generator');

class App extends React.Component {
  state={
    headerText:"Name It here!",
    expanded: true,
    suggestedNames:[]
  }

  handleInputChange =(event) => {
      this.setState({expanded: !(event.target.value.length), suggestedNames: (event.target.value.length > 0)?name(event.target.value):[]})
  }

  render () {
    return (
      <div className="App">
        <Header headerText={this.state.headerText} expanded={this.state.expanded} />
        <SearchBox onInputChange={this.handleInputChange} />
        <Results suggestedNames={this.state.suggestedNames}/>
      </div>
    );
  }
}

export default App;
