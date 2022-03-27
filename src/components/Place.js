import React from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Place = ({ item }) => {
  return (
    <div className="container">
      <div className="place-card">
        <img className="place--img" src={`../images/${item.coverImg}`} alt="" />
        <div className="place--info">
          <div className="place--title">
            <FontAwesomeIcon
              icon={faLocationDot}
              color="red"
              style={{ paddingRight: "8px" }}
            />
            <h3 className="place--location">{item.location}</h3>
            <a className="place--link" href={item.link}>
              View on Google Map
            </a>
          </div>
          <h1 className="place--visited">{item.visitedPlace}</h1>
          <h4 className="place--date">{item.date}</h4>
          <p className="place--description">{item.info}</p>
        </div>
      </div>
    </div>
  );
};

export default Place;
