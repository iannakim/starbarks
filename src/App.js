import React from 'react';
import Header from './Header'
import StoreContainer from './StoreContainer'
import arrayOfStores from './database'
import Form from './Form'

import './App.css';


// Props is information coming from a Parent Component down to its children
  // Information that's passed when the component is created
  // props is always received as a POJO

// JS  code can be interpolated in JSX with {}

// arrayOfStores -> [{}, {}, {}]
  // arrayOfStores needs to be saved to state somewhere, so we can dynamically decide on the number of stores to render
  // Only class components can have state


  // Parent's state can be sent down as props
    // state -> props (OK)
  // Child's props should not become child's state
    // props -> state (X)


  class App extends React.Component {

    state = {
        stores: arrayOfStores
    }

    creditCard = (infoFromChild) => {
      console.log(infoFromChild, "IN APP")
    }
    
    render(){
      return (
        <div className="App">
          < Header title="Top Bubble Tea Stores"/>
          < Form 
            creditCard={this.creditCard}
            />
          < StoreContainer stores={this.state.stores} />
      
        </div>
      );
    }
      
  }
    
export default App;
    