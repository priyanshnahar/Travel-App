import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../../assets/15.jpg";
import Trip2 from "../../assets/14.jpg";
import Trip3 from "../../assets/13.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using google maps</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia is the world's largest island country, comprising over 17,000 islands and a diverse population of over 270 million people. It is known for its stunning natural beauty, including tropical rainforests, beaches, and volcanoes. The country is also rich in culture, with unique art, music, and cuisine, influenced by its diverse ethnic and religious backgrounds."
        />
        <TripData
          image={Trip2}
          heading="Trip in Europe"
          text="Indonesia is the world's largest island country, comprising over 17,000 islands and a diverse population of over 270 million people. It is known for its stunning natural beauty, including tropical rainforests, beaches, and volcanoes. The country is also rich in culture, with unique art, music, and cuisine, influenced by its diverse ethnic and religious backgrounds."
        />

        <TripData
          image={Trip3}
          heading="Trip in India"
          text="Indonesia is the world's largest island country, comprising over 17,000 islands and a diverse population of over 270 million people. It is known for its stunning natural beauty, including tropical rainforests, beaches, and volcanoes. The country is also rich in culture, with unique art, music, and cuisine, influenced by its diverse ethnic and religious backgrounds."
        />
      </div>
    </div>
  );
}

export default Trip;
