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
    this.state = { lat: null };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );

    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
