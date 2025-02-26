import React from "react";
import "./FeaturedWidget.scss";

function FeaturedWidget(props) {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {

    const widgetContainers = document.querySelectorAll(".featuredWidget")

    const handleWindowMouseMove = (event) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });

      const blueEffect = document.createElement('span');
      blueEffect.classList.add('hover_effect');

      blueEffect.style.left = coords.x + "px";
      blueEffect.style.top = coords.y + "px";

      widgetContainers.forEach(x => x.appendChild(blueEffect))
    };
    
    widgetContainers.forEach(x => x.addEventListener('mousemove', handleWindowMouseMove))

    console.log(coords.x)
  });

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
