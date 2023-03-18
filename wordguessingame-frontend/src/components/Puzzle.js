import React, { useRef, useState} from 'react'
import Score from './Score';
import GuessedWordList from './GuessedWordList';


function Puzzle(props) {
//Set variables and states
    const [count, setCount] = useState(0);
    const [wordList, setWordList] = useState(['iter', 'rite', 'tier', 'tire', 'trie', 'ire', 'rei', 'ret', 'rit', 'tie', 'er',
            'et', 're', 'ti']);
    const [updateScore, setUpdateScore] = useState();
    const [guess, setGuess] = useState("");
    const [wrongGuess, setWrongGuess] = useState();
    const [guessedList, setGuessedList] = useState([]);
    const [theList, settheList] = useState([]);
    const [dot, setDot] = useState(false);
    const [wordListTitle, setWordListTitle] = useState('')
    const nows = Date.now().toString();
    const puzzle1 = "T I E R";
    const inputRef = useRef(null);

// Convert guessedList to a Set and back to an array to remove duplicates
    const uniqueGuesses = Array.from(new Set(guessedList));

//Check for duplicates and change score if they are found
    const dupCheck = () => {
// Calculate the count of duplicates
    const duplicateCount = guessedList.length - uniqueGuesses.length;
    if (duplicateCount > 0) {
        console.log(`There were ${duplicateCount} duplicates in the guess list`);
        setUpdateScore(updateScore - (100 * duplicateCount));   
        } 
    }

//Function to check if the entered word matches a word in the puzzle list
    const checkGuess = () => {
        if(wordList.includes(guess)){
         //Set the input to blank after a correct word
            setGuess('');

        //Set the message of a wrong word to blank
            setWrongGuess('');

        //Add the guess to the list of guessed words
            guessedList.push(guess);

        //Remove the guessed word from list
            removeGuessFromList();      
            } else {
        //Set the <p> tag message to indicate that the word wasnt found
            setWrongGuess(guess + ' is not a word that exists in ' + puzzle1);
            }
        }

//Remove user's guess from correct word list
    const removeGuessFromList = () => {
        const index = theList.indexOf(guess);
            if (index > -1) {
                theList.splice(index, 1)
                }
            }

//Function that runs checks when button is pressed
    const pressed = () => {
        setCount(count + 1);
        checkGuess(); 
        inputRef.current.value = '';          
    }

//Sets the users input to the guess variable
    const getUserGuess = (event) => {
        setGuess(event.target.value);
        
    }

//Allow user to end game if they can no longer think of a guess
    const giveUp = () => {
        dupCheck();
        setDot(true);
        setUpdateScore(uniqueGuesses.length * 100);
        settheList(wordList);
        setWordListTitle("All Words in '\r'" + puzzle1);   
    }
    
    
  return (

    <div className='puzzleSection'>
        <div className='gamepSection'>
            <Score updateScore={updateScore} />
        </div> 
        <div className='section'>
            <div className='wordSection'>  
              <h3>Can you guess how many words are in the following: </h3>
                <div className='puzzleWord'> 
                <h1>{puzzle1}</h1> </div>
                    <br />
                <h5>When you can't think of any more words, click GIVE UP to get your score.</h5> 
            </div>
            <div className='guessSection'>      
                <p>Enter Your Guess:</p>
                <p>{wrongGuess}</p>
                <input disabled={dot} 
                    ref={inputRef} className='input' 
                    type="text" 
                    placeholder="Enter Guess" 
                    onChange={getUserGuess} 
                />
                <br />       
                <button className='puzzle-btn' onClick={pressed} disabled={dot} >GUESS </button> 
                <button className='puzzle-btn' onClick={giveUp}>GIVE UP </button>        
            </div>
        </div>
        <div className='gamewSection'>
            <GuessedWordList theList={theList} 
                wordListTitle={wordListTitle}
                 uniqueGuesses={uniqueGuesses}/>
        </div> 
    </div>
  )
}


export default Puzzle;
