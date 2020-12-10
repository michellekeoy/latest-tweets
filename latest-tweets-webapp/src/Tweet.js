class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}

// import React from "react";

// export default class FetchRandomUser extends React.Component {
//   state = {
//     loading: true,
//     person: null
//   };

//   async componentDidMount() {
//     const url = "https://api.randomuser.me/";
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ person: data.results[0], loading: false });
//   }

//   render() {
//     if (this.state.loading) {
//       return <div>loading...</div>;
//     }

//     if (!this.state.person) {
//       return <div>didn't get a person</div>;
//     }

//     return (
//       <div>
//         <div>{this.state.person.name.title}</div>
//         <div>{this.state.person.name.first}</div>
//         <div>{this.state.person.name.last}</div>
//         <img src={this.state.person.picture.large} />
//       </div>
//     );
//   }
// }