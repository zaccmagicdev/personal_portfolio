import React from "react";
import "./SlideShow.css";
import { authorImages } from "../../constants/SlideShowImages";
import generateRandom from "../../utils/utils";

function SlideShow() {
  const imgRef = React.useRef('');
  const [index, setIndex] = React.useState(0);
  const arraySize = authorImages.length - 1;

  const addStatic = () => {}

  const nextImg = () => {index >= arraySize ? setIndex(0) : setIndex(index + 1)}
  const previousImg = () => {index <= 0 ? setIndex(arraySize) : setIndex(index - 1)}
  
  React.useEffect(() => {setIndex(generateRandom(arraySize)); console.log(imgRef)}, [])

  return (
  <div className="slideshow">
    <button className="slideshow__button slideshow__button_previous" type="button" onClick={() => previousImg()} />
    <img className="slideshow__image" src={authorImages[index].link} ref={imgRef} />
    <button className="slideshow__button slideshow__button_next" type="button" onClick={() => nextImg()} />
  </div>);
}

export default SlideShow;
