import React, { useState } from 'react';
import KeyboardComp from './KeyboardComp';

const hangman = {
    head: "o",
    body: "|",
    leftArm: "/",
    rightArm: "]",
    leftLeg: "/",
    rightLeg: "]"
}

const Home = () => {
    const [input, setInput] = useState("");
    const [wrongLetters, setWrongLetters] = useState([]);
    const [rightLetters, setRightLetters] = useState([]);
    const result = {
        win: "you win!",
        lose: "you lose..."
    }
    const [answer, setAnswer] = useState("")

    const reset = () => {
        setWrongLetters([])
        setRightLetters([])
        document.getElementById("answerForm").reset()
        setAnswer("")
    }

    const ansChangeHandler = e => {
        setAnswer(e.target.value)
    }

    const hangmanGame = () => {
        if (wrongLetters.length === 0) {
            return (
                <div>
                    He's alive and somewhere around here...
                </div>
            )
        }
        if (wrongLetters.length === 1) {
            return (
                <div>
                    {hangman.head}
                </div>
            )
        }
        if (wrongLetters.length === 2) {
            return (
                <div>
                    {hangman.head} <br/>
                    {hangman.body}
                </div>
            )
        }
        if (wrongLetters.length === 3) {
            return (
                <div>
                    {hangman.head} <br/>
                    {hangman.leftArm}
                    {hangman.body}
                </div>
            )
        }
        if (wrongLetters.length === 4) {
            return (
                <div>
                    {hangman.head} <br/>
                    {hangman.leftArm}
                    {hangman.body}
                    {hangman.rightArm}
                </div>
            )
        }
        if (wrongLetters.length === 5) {
            return (
                <div>
                    {hangman.head} <br/>
                    {hangman.leftArm}
                    {hangman.body}
                    {hangman.rightArm} <br/>
                    {hangman.leftLeg}
                </div>
            )
        }
        if (wrongLetters.length === 6) {
            return (
                <div>
                    <div>
                    {hangman.head} <br/>
                    {hangman.leftArm}
                    {hangman.body}
                    {hangman.rightArm} <br/>
                    {hangman.leftLeg}
                    {hangman.rightLeg}
                    </div>
                    <p style={{color: "red"}}>{result.lose}</p>
                </div>
            )
        }
    }

    const showUnderscores = () => {
        let undercores = "";
        for (let i = 0; i < answer.length; i++) {
            if (rightLetters.includes(answer[i])) {
            undercores += answer[i]
            } else {
                undercores += "_"
            }
        }
        if (undercores === answer) {
            return (
                <div>
                <span>{undercores}</span>
                <div style={{color: "green"}}>{wrongLetters.length < 6 && answer.length >= 1 ? result.win : null}</div>
                </div>
            )
        } else {
            return undercores;
        }
    }

    return (
        <>
        <div>
            {hangmanGame()}
        </div>
        <div>Right word:
            <span>{showUnderscores()}</span>
        </div>
        <p>Wrong letters: {wrongLetters?.map(letter => {
            return (
            <span style={{color: "red"}}>{letter}</span>
            )
        })}
        </p>
        <form id="answerForm">
        <label htmlFor='answerInput'>Answer: </label>
        <input 
        type="password"
        name='answerInput'
        placeholder='Answer'
        id='answerInput'
        onChange={ansChangeHandler}
        value={answer.secretAnswer}
        />
        </form>
        <button onClick={reset}>Reset All</button>
        <div>
        <KeyboardComp 
        input={input} 
        setInput={setInput}
        wrongLetters={wrongLetters}
        setWrongLetters={setWrongLetters}
        rightLetters={rightLetters}
        setRightLetters={setRightLetters}
        answer={answer}
        />
        </div>
        </>
    )
}

export default Home;