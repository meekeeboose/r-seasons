import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );

//   return (
//     <div>
//       <h1>Latitude: </h1>
//     </div>
//   );
// };

// class based

class App extends React.Component {
  constructor(props) {
    super(props);
    //THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT
    this.state = { lat: null, errorMessage: "" };
  }
  // React says we have to define render!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // Call setState
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );

    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
