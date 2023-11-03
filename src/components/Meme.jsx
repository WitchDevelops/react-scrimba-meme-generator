import "./Meme.css";

const Meme = () => {
    return (
        <main>
            <form className="form">
                <div className="form__inputs">
                    <input type="text" className="form__input" placeholder="Top text"></input>
                    <input type="text" className="form__input" placeholder="Bottom text"></input>
                </div>

                <button type="submit" className="form__button">Get a new meme image
                    <span class="material-symbols-outlined">
                        question_exchange
                    </span>
                </button>
            </form>
        </main>
    )
}

export default Meme