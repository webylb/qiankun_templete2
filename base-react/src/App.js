import { BrowserRouter, Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Main
        </p>
          <BrowserRouter>
              <Link to={{pathname: '/sub-react'}}>6666</Link>
              <div id="frame"/>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
