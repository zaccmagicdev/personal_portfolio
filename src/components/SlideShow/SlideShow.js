import React from "react";
import "./SlideShow.css";
import { authorImages } from "../../constants/SlideShowImages";

function SlideShow() {
  const [index, setIndex] = React.useState(0);
  const arraySize = authorImages.length - 1;

  const nextImg = () => {index >= arraySize ? setIndex(0) : setIndex(index++)}
  const previousImg = () => {index <= 0 ? setIndex(arraySize) : setIndex(index--)}

  return (
  <div className="slideshow">
    <img className="slideshow__image" src={authorImages[index].link}  />
    <button type="slideshow__button" onClick={() => nextImg} />
    <button type="slideshow__button" onClick={() => previousImg} />
  </div>);
}

export default SlideShow;
