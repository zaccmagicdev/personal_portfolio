import React from "react";
import "./FeaturedWidget.scss";

function FeaturedWidget(props) {

  const mouseCursor = <span className="featuredWidget__hoverGlow"/>

  const [hovering, setIsHovering] = React.useState(false);
  const [coords, setCoords] = React.useState({});
  const [hoveringElement, setHoveringElement] = React.useState(null);

  function onWidgetEnter(e){
    setIsHovering(true)
    setCoords({x: e.clientX, y: e.clientY})
    //then set glowing element in place of the client coords and set hovering element to said glow 
  }

  //function for leaving the widget, reset hooks to default

  //redo enter widget for mouse movement

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
