import React from "react";
import "./SlideShow.css";
import { authorImages } from "../../constants/SlideShowImages";
import generateRandom from "../../utils/utils";

function SlideShow() {
  const [index, setIndex] = React.useState(0);
  const arraySize = authorImages.length - 2;

  function toggleNextImage() {
    setTimeout(
      () => (index >= arraySize ? setIndex(0) : setIndex(index + 1)),
      1000
    );
  }

  function togglePreviousImage() {
    setTimeout(
      () => (index <= 0 ? setIndex(arraySize) : setIndex(index - 1)),
      1000
    );
  }

  const nextImg = () => {
    setIndex(4);
    toggleNextImage();
  };
  const previousImg = () => {
    setIndex(4);
    togglePreviousImage();
  };

  React.useEffect(() => {
    setIndex(generateRandom(arraySize));
  }, []);

  return (
    <div className="slideshow">
      <button
        className="slideshow__button slideshow__button_previous"
        type="button"
        onClick={() => previousImg()}
      />
      <img className="slideshow__image" src={authorImages[index].link} />
      <button
        className="slideshow__button slideshow__button_next"
        type="button"
        onClick={() => nextImg()}
      />
    </div>
  );
}

export default SlideShow;
