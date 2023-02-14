import "./TripStyle.css";
import TripData from "./TripData"
import Trip1 from "../assets/15.jpg"
import Trip2 from "../assets/14.jpg"
import Trip3 from "../assets/13.jpg"


function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using google maps</p>
      <div className="tripcard">
        <TripData image={Trip1} heading=""/> 
        <TripData image={Trip2}/>
        <TripData image={Trip3}/>
      </div>
    </div>
  );
}

export default Trip;
