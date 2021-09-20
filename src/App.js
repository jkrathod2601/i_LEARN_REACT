import { createContext } from 'react';
import './App.css';
// import Main from './routing-components/main';
import Contexta from './context/contexta';
const Name=createContext()
function App(x){
  return (
    <div>
      <h1>hello jay</h1>
      <Name.Provider value={"jayrathod26012001"}>
      <Contexta></Contexta>
      </Name.Provider>
    </div>
  );
}

export default App; 
export {Name};