import { useState, useEffect, useId } from "react";
import "./Meme.css";

const Meme = () => {
    const [topText, setTopText] = useState();
    const id = useId();
    const [allMemeImages, setAllMemeImages] = useState([]);

    // get a first image so the field it's not empty
    const [meme, setMeme] = useState({
        topText: setTopText,
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    
    // call the API to get meme images
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, []);

    // get a new random image upon clicking the button
    const handleClick = () => {
        const memes = allMemeImages;
        const randomNumber = Math.floor(Math.random() * memes.length);
        const url = memes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

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
                            id = {id + "-bottomText"}
                            maxLength={20}
                            value={meme.bottomText}
                            onChange={handleChange}>
                        </input>
                    </div>

                </div>

                <button
                    type="submit"
                    className="form__button"
                    onClick={handleClick}>
                    Get a new meme image
                    <span className="material-symbols-outlined">
                        question_exchange
                    </span>
                </button>
                <div className="meme">
                    <img src={meme.randomImage} className="meme__image"></img>
                    <h2 className="meme__text--top">{meme.topText}</h2>
                    <h2 className="meme__text--bottom">{meme.bottomText}</h2>
                </div>

            </div>
        </main>
    )
}

export default Meme