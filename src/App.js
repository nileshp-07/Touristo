import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

function App() {
  const [tourData, setTour] = useState(data);

  function removeTour(id)
  {
    const newTour = tourData.filter(tour => tour.id !== id);
    setTour(newTour);
  }

  if(tourData.length == 0){
     return(
      <div className="Refresh">
        <img src={require("./assets/no-tour-found.jpg")} />
         <h2>
            No Tours Left
         </h2>

         <button className="refresh-btn" onClick={() => setTour(data)}>
           Refresh
         </button>
      </div>
     )

  }


  return (
    <div className="App">
        <div className="title">
           <h1 >Touristo <img src={require("./assets/plane.png")} /></h1>
        </div>

        <Tours tourData={tourData} removeTour = {removeTour}/>
    </div>
  )
};

export default App;


