import './App.css';

function App() {
  function createURL() {
    var handle = document.getElementById("handle").value;
    const endpoint = "https://api.twitter.com/2/tweets/search/recent?query=from:"
    const CONSUMER_API_KEY = "M9sH0OSwidJ3tK2c2Y5gpQa8U"
    const CONSUMER_API_SECRET_KEY = "HCYTKAUGYiaEVMOG2jj0LLP9RuvOdCUCue98l9N8mkgbdlo3m1"
    const ACCESS_TOKEN = "7207442-GFHbOBcY9LCkrzQhkcuuwtUULOwbZMoGiAjAFzzdUO"
    const ACCESS_TOKEN_SECRET = "t21nEWlLuNKh0cvwlcP3dvyPOA6tnM7Dee4hPHF1FDGPS"
    var url = endpoint + handle
    console.log(url);
  }

  function activateButton() {
    createURL()

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
        <button onClick={activateButton}>
          Search User
        </button>
      </header>
    </div>
  );
}


export default App;
