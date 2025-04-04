import React from "react";
import "./FeaturedWidget.scss";

function FeaturedWidget(props) {

  return (
    <div
      className={`featuredWidget featuredWidget__${props.name}`}
      id={props.Id}
      
    >
      <img className="featuredWidget__preview" src={props.gifURL} />
      <h2 className="featuredWidget__title">{props.name}</h2>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={props.githubLink}
        className="featuredWidget__githublink"
      >
        Click here to see on Github!
      </a>
      <p className="featuredWidget__description">{props.description}</p>
    </div>
  );
}

export default FeaturedWidget;
