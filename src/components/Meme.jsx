import { useState } from "react";
import memesData from "../memesData";
import "./Meme.css";

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemeImages, setAllMemeImages] = useState(memesData);
    const handleClick = () => {
        const memes = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memes.length);
        const url = memes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    return (
        <main className="main">
            <div className="form">
                <div className="form__inputs">
                    <input type="text" className="form__input" placeholder="Top text"></input>
                    <input type="text" className="form__input" placeholder="Bottom text"></input>
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
                <img src={meme.randomImage} className="meme__image"></img>
            </div>
        </main>
    )
}

export default Meme