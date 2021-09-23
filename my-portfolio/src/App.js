import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {return (
    <div className="App">
      <header className="App2">
        <h1>
          Website Creation (Initial Commit)
          
        </h1>

      </header>


      <FontAwesomeIcon icon={faHome} />
    </div>
    
  );
}
}
export default App;
