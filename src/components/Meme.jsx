import { useState, useEffect, useId } from "react";
import "./Meme.css";

const Meme = () => {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [meme, setMeme] = useState({});
    const [catImageUrl, setCatImageUrl] = useState('');
    const id = useId();

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
    
    // click event handler
    const handleButtonClick = () => {
        // Fetch a new random cat image when the button is clicked
        getRandomCatImage();
      };

    // handleChange to see what we're typing in the input fields
    const handleChange = (event) => {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

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
                            value={meme.topText}
                            onChange={handleChange}>
                        </input>
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
                            value={meme.bottomText}
                            onChange={handleChange}>
                        </input>
                    </div>

                </div>

                <button
                    type="submit"
                    className="form__button"
                    onClick={handleButtonClick}>
                    Get a new meme image
                    <span className="material-symbols-outlined">
                        question_exchange
                    </span>
                </button>
                <div className="meme">
                    <img src={catImageUrl} className="meme__image" alt="random cat"></img>
                    <h2 className="meme__text--top">{meme.topText}</h2>
                    <h2 className="meme__text--bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}

export default Meme