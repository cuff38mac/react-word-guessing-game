import React from 'react'


function ListWord(props){
    return <li>{props.wordT}</li>
}

function GuessedWordList(props) {
    const wordList = ['iter', 'rite', 'tier', 'tire', 'trie', 'ire', 'rei', 'ret', 'rit', 'tie', 'er',
                        'et', 're', 'ti'];

  return (
    <div>
      <h3>Correct Words Found</h3>
         <ol>
          <>
            {props.uniqueGuesses.map((word, index) => <ListWord key={index} wordT={word} />)} 
          </>
        </ol>

      <h4>{props.wordListTitle}</h4>
        <ol>
          <>
            {props.theList.map((word, index) => <ListWord key={index} wordT={word} />)} 
          </>
        </ol>
    </div>
  )
}

export default GuessedWordList;