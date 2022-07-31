import "./App.css";
import image from "./home.jpg";
import arrowImage from "./arrow.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Description">
        {" "}
        <div className="Title">WE SELL EMOJI</div>
        <div className="Phase">Emoji is a Japanese word.</div>
        <Link to="/shop">
          <button className="homeButton">Shop now</button>
        </Link>
        <img className="Arrow" src={arrowImage} alt="Arrow" />
      </div>
      <img src={image} alt="Emoji" />
    </div>
  );
}

export default App;
