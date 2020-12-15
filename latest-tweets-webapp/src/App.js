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

  fetchTweet(handle) {
    fetch('http://localhost:8000/user/' + handle)
      .then(res => res.json())
      .then(res => this.setState({ data: res.data }))
  }

  render() {
    return (
      <div >
        <div className="App"   >
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

        <div >
          {this.state.data.map((tweet, index) => {
            return Tweet(tweet, index)
          })}
        </div>
      </div>

    )
  }
}

var tweetStyle = {
  padding: "20px",
  margin: "20px"
};


const Tweet = (tweet, index) => {
  return (
    <div key={index} style={{ borderStyle: 'solid', borderColor: '#2AD3F5' }}>
      <h2>Tweet {index + 1}</h2>
      <p style={tweetStyle}>
        {tweet.text}
      </p>
    </div>
  )
}

export default App;
