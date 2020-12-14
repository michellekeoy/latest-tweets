import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      <TweetMaker />
    </div>
  );
}

class TweetMaker extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: [] }
  }

  fetchTweet(username) {
    fetch('http://localhost:8000/user/' + username)
      .then(res => res.json())
      .then(res => this.setState({ data: res.data }))
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <p>
              Please input a valid Twitter handle:
              </p>
            <form>
              <input type="text" id="handle" style={{ marginBottom: "20px" }} />
            </form>
            <button onClick={() => { this.fetchTweet(document.getElementById('handle').value) }}>
              Search User
              </button>
          </header>
        </div>

        <div>
          {this.state.data.map((tweet, index) => {
            return Tweet(tweet, index)
          })}
        </div>
      </div>

    )
  }
}

const Tweet = (tweet, index) => {
  return (
    <div key={index} style={{ borderStyle: 'solid', borderColor: 'black' }}>
      <h2>Latest Tweet {index + 1}</h2>
      <p>{tweet.text}</p>
    </div>
  )
}

export default App;
