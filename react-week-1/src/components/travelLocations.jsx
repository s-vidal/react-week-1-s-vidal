import React from "react";

function TravelLocation(props) {
  return (
    <div className="d-flex justify-content-around align-items-center">
      <div className="flex-grow-1">
        <h3>{props.name}</h3>
      </div>
      <div className="pr-5">
        <img
          height="100"
          className="rounded"
          src={props.src}
          alt={props.name}
        />
      </div>
      <div className="pl-5 pr-5">
        <a href={props.href}>go to google maps</a>
      </div>
    </div>
  );
}

export default TravelLocation;
