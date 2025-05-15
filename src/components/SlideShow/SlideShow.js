import React from "react";
import "./SlideShow.css";
import { authorImages } from "../../constants/SlideShowImages";

function SlideShow() {
  const [index, setIndex] = React.useState(0);
  const arraySize = authorImages.length - 1;

  const nextImg = () => {index >= arraySize ? setIndex(0) : setIndex(index + 1)}
  const previousImg = () => {index <= 0 ? setIndex(arraySize) : setIndex(index - 1)}

  return (
  <div className="slideshow">
     <button className="slideshow__button" type="button" onClick={() => {previousImg()}} />
    <img className="slideshow__image" src={authorImages[index].link}  />
    <button className="slideshow__button" type="button" onClick={() => nextImg()} />
  </div>);
}

export default SlideShow;
