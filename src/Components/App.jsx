import Page1 from './page1'
import { useRef, useState } from 'react';

const App = () => {
  
  const [count,setCount] = useState(0);
  let refCount = useRef(0);

  function update(){
    //setCount(count+1);
    refCount.current++;
    console.log(refCount.current);
  }

  return (
    <>
      <div><h2>APP</h2></div>
      <h1>{refCount.current}</h1>
      <button onClick={update}>add</button>
      <button onClick={()=>{setCount(refCount.current)}}>show the result</button>
      <Page1/>
    </> 
  )
}

export default App