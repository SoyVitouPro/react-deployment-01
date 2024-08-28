import logo from './bongrean-logo.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deployment Successfully !
        </p>
        <a
          className="App-link"
          href="https://bongrean.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More with bongrean.com
        </a>
      </header>
    </div>
  );
}

export default App;
