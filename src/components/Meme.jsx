import { useState, useEffect, useId, useRef } from "react";
// import { fabric } from "fabric";
<script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.6.0/fabric.min.js"></script>

import "./Meme.css";

const Meme = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [catImageUrl, setCatImageUrl] = useState('');
  const id = useId();

  const canvasRef = useRef(null);

  useEffect(() => {
    // Ensure that fabric is defined before using it
    if (typeof fabric === 'undefined') {
      console.error('Fabric.js is not defined. Make sure it is loaded.');
      return;
    }

    // Your Fabric.js code here
    const canvas = new fabric.Canvas(canvasRef.current);
    // ...

  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {
    // Fetch and set the initial random cat image when the component mounts
    getRandomCatImage();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const getRandomCatImage = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      const randomCat = data[0];
      setCatImageUrl(randomCat.url);
    } catch (error) {
      console.error('Error fetching random cat image:', error);
    }
  }

  // Use this function as the onLoad handler for the image



  // click event handler
  const handleButtonClick = () => {
    // Fetch a new random cat image when the button is clicked
    getRandomCatImage();
  };
  const handleSaveButtonClick = () => {
    const memeCanvas = new fabric.Canvas();
    
    // Add image to the canvas
    fabric.Image.fromURL(catImageUrl, (img) => {
      img.set({ selectable: false });
      memeCanvas.add(img);
      
      // Add text to the canvas
      const topTextObj = new fabric.Text(topText, { top: 10, left: 10 });
      const bottomTextObj = new fabric.Text(bottomText, { top: memeCanvas.height - 50, left: 10 });
      memeCanvas.add(topTextObj, bottomTextObj);

      // Open a new window with the meme canvas for the user to save
      const saveWindow = window.open("", "_blank");
      if (saveWindow) {
        const imageDataUrl = memeCanvas.toDataURL();
        saveWindow.document.write(`
          <img src="${imageDataUrl}" alt="Saved Meme">
        `);
        saveWindow.document.close();
      }
    });
  };

  return (
    <main className="main">
      <div className="form">
        <div className="form__inputsCtn">
          <div className="form__inputs">
            <label htmlFor={id + "-topText"}>
              Top text
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Top text"
              name="topText"
              id={id + "-topText"}
              maxLength={20}
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
            />
          </div>
          <div className="form__inputs">
            <label htmlFor={id + "-bottomText"}>
              Bottom text
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Bottom text"
              name="bottomText"
              id={id + "-bottomText"}
              maxLength={20}
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="form__button"
          onClick={handleButtonClick}
        >
          Get a new meme image
          <span className="material-symbols-outlined">
            question_exchange
          </span>
        </button>
        <div
          className="meme"
        >
          <img
            src={catImageUrl}
            className="meme__image"
            alt="random cat"
           
          />
          <h2 className="meme__text--top">{topText}</h2>
          <h2 className="meme__text--bottom">{bottomText}</h2>
          <canvas ref={canvasRef}></canvas>
        </div>
        <button
          type="button"
          className="form__button"
          onClick={handleSaveButtonClick}
        >
          Save Meme
        </button>
      </div>
    </main>
  );
}

export default Meme;
