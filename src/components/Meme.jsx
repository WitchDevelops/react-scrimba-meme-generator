import { useState } from "react";
import memesData from "../memesData";
import "./Meme.css";

const Meme = () => {
    const [topText, setTopText] = useState();
    const [meme, setMeme] = useState({
        topText: setTopText,
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

    const handleChange = (event) => {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main className="main">
            <div className="form">
                <div className="form__inputs">
                    <input 
                        type="text" 
                        className="form__input" 
                        placeholder="Top text" 
                        name="topText"
                        maxLength={20} 
                        value={meme.topText}
                        onChange={handleChange}>
                    </input>
                    <input 
                        type="text" 
                        className="form__input" 
                        placeholder="Bottom text" 
                        name="bottomText"
                        maxLength={20}
                        value={meme.bottomText}
                        onChange={handleChange}>
                    </input>
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