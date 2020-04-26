import React from "react";
import "./App.css";
import TravelLocation from "./components/travelLocations";
import paris from "./images/paris.jpg";
import london from "./images/london.jpeg";
import bora from "./images/bora-bora.jpeg";

function App() {
  return (
    <div className="App container mt-4">
      <h1>Top Travel Locations</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <TravelLocation
            name="Paris"
            src={paris}
            href="https://www.google.com/maps/place/Paris,+France/data=!4m2!3m1!1s0x47e66e1f06e2b70f:0x40b82c3688c9460?sa=X&ved=2ahUKEwjezOznvYbpAhUsUhUIHUKuDpgQ8gEwAHoECAsQAQ"
          />
        </li>
        <li className="list-group-item">
          <TravelLocation
            name="London"
            src={london}
            href="https://www.google.com/maps/place/London,+UK/@51.5285582,-0.2416816,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583"
          />
        </li>
        <li className="list-group-item">
          <TravelLocation
            name="Bora-Bora"
            src={bora}
            href="https://www.google.com/maps/place/Bora-Bora,+French+Polynesia/@-16.3920397,-151.9053104,11z/data=!3m1!4b1!4m5!3m4!1s0x76bdbc53dc9fa52b:0x9bef76bb168bc559!8m2!3d-16.5058512!4d-151.7422329"
          />
        </li>
      </ul>
    </div>
  );
}

export default App;
