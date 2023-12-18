import { useState } from "react";
import memesData from "../memesData";
import "./Meme.css";

const Meme = () => {
    const [memeImage, setMemeImage] = useState();

    const handleClick = () => {
        const memes = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memes.length);
        setMemeImage(memes[randomNumber].url);
    }

    return (
        <main className="main">
            <div className="form">
                <div className="form__inputsCtn">
                    <div className="form__inputs">
                        <label htmlFor="top text">Top text</label>
                        <input type="text" className="form__input" placeholder="Top text" name="top text"></input>
                    </div>
                    <div className="form__inputs">
                        <label htmlFor="bottom text">Bottom text</label>
                        <input type="text" className="form__input" placeholder="Bottom text" name="bottom text"></input>
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
                <img src={memeImage} className="meme__image"></img>
            </div>
        </main>
    )
}

export default Meme