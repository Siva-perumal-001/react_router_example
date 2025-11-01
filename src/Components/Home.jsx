import { createContext } from 'react';
import App from './App';

export const dataContext  = createContext();

const Home = () => {
  const data = " Its from ur App component";
  return (
    <>
      <div><h1>Home</h1></div>
      <dataContext.Provider value={data}>
        <App/>
      </dataContext.Provider>
    </>
  )
}

export default Home