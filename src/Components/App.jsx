import {useContext} from 'react'
import { dataContext } from './Home'
import Page1 from './page1'

const App = () => {
  const data1 = useContext(dataContext)
  return (
    <>
      <div><h2>APP</h2></div>
      <h1>{data1}</h1>
      <Page1/>
    </> 
  )
}

export default App