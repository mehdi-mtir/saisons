import './SeasonDisplay.css';
import React from 'react';


const getSeason = (latitude, month) =>{
  if (month > 2 && month < 9){
    return latitude > 0 ? 'summer' : 'winter';
  }
  else{
    return latitude > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) =>{
  const season = getSeason(props.latitude, new Date().getMonth());
  const text = (season === 'summer') ?
    "Il fait chaud, on va à la plage" : "Il fait très froid, on va faire du ski";

  return (
    <div className="season">
      {text}
    </div>
  );
};

//<i className="snowflake icon"></i>

export default SeasonDisplay;
