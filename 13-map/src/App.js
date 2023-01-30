import {useState} from 'react'
import './App.css';
import Counter from './Components/Counter';
import Button from './Components/Button';

const texts = [
  'Click me!',
 'Click me please!',
 'Hit me !',
 'Press me!',
 'Click me again!',
 'Press me!!!' ]

function App() {
const [count, setCount]= useState(0)
const incrementCount = () => {
  setCount(count + 1)
}
  return (
    <div className="App">
        <Counter count={count} />
        {texts.map((text, index)=> {
          console.log(index)
         return <Button  onClick={incrementCount} text={text} key={index}/>
        })}
    </div>
  );
}

export default App;
