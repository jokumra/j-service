import React from "react";
import ReactDOM from "react-dom";
import Imagelist from "./components/imagelist.jsx";
import styles from "./components/styles.css";

var sampleimages = [
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/aaron-huber-401200-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/andre-benz-283764-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/andre-benz-283764-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/andre-benz-283764-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg"
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images
    };
  }


  render() {

    return (
      <div className = {styles.wrapper}>
        <Imagelist images={this.state.images} />
      </div>
    );
  }
}

ReactDOM.render(<App images={sampleimages}/>, document.getElementById("app"));
