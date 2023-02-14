import image1 from '../assets/10.jpg'
import image2 from '../assets/07.jpg' 
import image3 from '../assets/12.jpg'
import image4 from '../assets/13.jpg'
import './Destination.css';
import DestinationData from './DestinationData';

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours Gives You Oppotunities to see a lot, within a time frame.</p>

        {/* <div className="first-des">
          <div className="des-text">
            <h2>Gili Island, Indonesia</h2>
            <p>
              The archipelago of Indonesia is the largest cluster of islands in
              the world.It is comprised of innumerable small islands each
              offering a unique experience to the travelers.
              Out all these, there is a small trinity of islands called the Gili Islands. 
              Gili Islands comprise of the three small coral islands namely.Gili
              Trawangan, Gili Meno, and Gili Air.
            </p>
          </div>
          <DestinationData/>
        </div> */}

        
        <DestinationData  
        className="first-des-reverse"
        heading= "Taal volcano, Batongas" 
        text= "  The archipelago of Indonesia is the largest cluster of islands in
        the world.It is comprised of innumerable small islands each
        offering a unique experience to the travelers.
        Out all these, there is a small trinity of islands called the Gili Islands. 
        Gili Islands comprise of the three small coral islands namely.Gili
        Trawangan, Gili Meno, and Gili Air."
        img1={image2}
        img2={image4}
        />

        <DestinationData  heading= "Gili-T Island, Indonesia" 
        text= "  The archipelago of Indonesia is the largest cluster of islands in
        the world.It is comprised of innumerable small islands each
        offering a unique experience to the travelers.
        Out all these, there is a small trinity of islands called the Gili Islands. 
        Gili Islands comprise of the three small coral islands namely.Gili
        Trawangan, Gili Meno, and Gili Air."
        img1={image1}
        img2={image3}
        />
      </div>
    </>
  );
};

export default Destination;
