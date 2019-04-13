import React from "react";
import ReactDOM from "react-dom";
import Imagelist from "./components/imagelist.jsx";
import styles from "./components/styles.css";
//import fetch from "fetch";

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
      images: []
    };
    // this.getData.bind(this);
    this.getData();
  }

  getData() {
    let url = '/house_images?id='+this.props.id;

    console.log("Url is:", url);

    fetch(url)
      .then(res=>res.json())
      .then((res) => {
        console.log(res.results);
        this.setState({images:res.results});
      });

  }

  render() {
    console.log('Render');
    return (
      <div className = {styles.wrapper}>
        <Imagelist images={this.state.images} />
      </div>
    );
  }
}

//const id = Math.floor(Math.random() * 5) +1;
const id = window.id;
ReactDOM.render(<App id={id}/>, document.getElementById("images"));
