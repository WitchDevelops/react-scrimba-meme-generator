import memesData from "../memesData";
import "./Meme.css";

const Meme = () => {
    const memes = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memes.length);
    let memeImage = memes[randomNumber].url;

    const handleClick = () => { 
        console.log(randomNumber);
        console.log(memes[randomNumber].url);
        memeImage = memes[randomNumber].url;
    }

    return (
        <main className="main">
            <p>{memeImage}</p>
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
                <img src={memeImage} className="meme__image"></img>
            </div>
        </main>
    )
}

export default Meme