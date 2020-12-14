import './App.css';
import * as Twit from 'twit';
import React from 'react';

var handle = document.getElementById("handle").value;

function App() {
  return (
    <div className="App">
      <TweetMaker />
    </div>
  );
}

return (
  <div className="App">
    <header className="App-header">
      <p>
        Please input a valid Twitter handle:
        </p>
      <form>
        <input type="text" id="handle" style={{ marginBottom: "20px" }} />
      </form>
      <button onClick={getTweets}>
        Search User
        </button>
    </header>
  </div>
);



export default App;
