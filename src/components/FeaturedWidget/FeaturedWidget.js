import React from "react";
import "./FeaturedWidget.scss";

function FeaturedWidget(props) {
  return (
    <div
      className={`featuredWidget featuredWidget__${props.name}`}
      id={props.Id}
    >
      <h2 className="featuredWidget__title">{props.name}</h2>
      <img className="featuredWidget__preview" src={props.gifURL} />
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={props.githubLink}
        className="featuredWidget__githublink"
      >
        {props.githubLink}
      </a>
      <p className="featuredWidget__description">{props.description}</p>
    </div>
  );
}

export default FeaturedWidget;
