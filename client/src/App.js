import { createContext, useState } from 'react';
import './App.css';
import AppRouting from './components/AppRouting';
import Navbar from './components/navbar/Navbar';
export const userContext = createContext()


function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')))
  
  return (
    <div className="App">
      <userContext.Provider value={{currentUser, setCurrentUser}}>
        <Navbar />
        <AppRouting />
      </userContext.Provider>
    </div>
  );
}

export default App;
