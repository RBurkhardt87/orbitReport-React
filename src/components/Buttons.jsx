import satData from './satData';
import React from 'react';


//Seems to me that I would want to import satData.json. Then I would want to filter through each orbit type based on high, med, low. So I would filter through 3 times and that would split up the objects into new arrays-- grouping them together by type. Then I can just link those arrays to the buttons that correlate with. Maybe map through those arrays for each when their particular button is clicked. It would display all the sats of that type.  

//The last button I believe is supposed to display all the sats so I would just simply map over the data to be displayed for this button click

const Buttons = ({ filterByType, setSat, orbitTypes }) => {

  return (
    <div>
      {orbitTypes.map((sat, id) => {
  return (
    <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
})}
      <button onClick={() => setSat(satData)}> All Orbits </button>
    </div>
  );
};

export default Buttons;