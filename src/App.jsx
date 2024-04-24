
import { useState } from 'react';
import './styles/styles.css'

function App() {

  const [text,setText]=useState('')
  const [mixedText,setMixedText]=useState('Nothing to see here..')
  
  const handleOnChange=(e)=>{
    e.preventDefault();
    setText(e.target.value)
  }
  //VERSION DIVISION POR PALABRA
  
 /*  const handleSubmit=(event)=>{
    event.preventDefault()
    const words=text.split(' ')
    const mixedWords=mixed(words)
    const finalText=mixedWords.join(' ')
    setMixedText(finalText);

  } */
 

  /*VERSION DIVISION CADA 5 PALABRAS */
    const handleSubmit=(event)=>{
    event.preventDefault()
    const words=text.split(' ')
    const splitWords = words.reduce((grupos, palabra, indice) => {
      if (indice % 5 === 0) {
        grupos.push([]);
      }
      grupos[grupos.length - 1].push(palabra);
      return grupos;
    }, []);
    const mixedWords=mixed(splitWords)
    const finalText=mixedWords.join(' ')
    setMixedText(finalText);
  }
  const mixed=(words)=>{
    const randomWords=words.sort(() => Math.random() - 0.5);
    return randomWords;
  }

  return (
    <>
      <h1 className='title'>SHuffle Poet</h1>
      <div className='principal'>
        <form action="submit" onSubmit={(e)=>{handleSubmit(e)}}>
          <label htmlFor=""><h4>Please enter your text here:</h4> </label>
          <input type='text' onChange={(e)=>{handleOnChange(e)}}/>
          
          <button>Mix words</button>
        </form>
        <div className='text'>
          <div className='text-data'>
            <h2>Your text</h2>
            <h3>{text}</h3>
          </div>
          <div className='text-data'>
            <h2>Shuffle</h2>
            {mixedText==='Nothing to see here..' ? <h3>{mixedText}</h3>  :<h3>{mixedText}</h3>}
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
