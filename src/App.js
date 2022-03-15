import { React, useState } from "react";
import axios from 'axios';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  const [userData, setUserData] = useState()
  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api");
      setUserData(JSON.stringify(res));
    } catch (err) {
      console.log("thereis an error", err);
    }
  };
  // useEffect(async () => {
  //   try {
  //     const res = await axios.get("https://randomuser.me/api");
  //     setUserData(JSON.stringify(res));
  //   } catch (err) {
  //     console.log("thereis an error", err);
  //   }
  // }, [])

  return (
    //https://randomuser.me/api
    <div div className="App" >
      <header>
        Counter App {counter}
      </header>
      <button onClick={() => { setCounter(counter + 1) }}>increment</button>
      <button onClick={() => { fetchUsers() }}>getUsers</button>
      <div>
        <p>results</p>
        <div>{userData}</div>
      </div>
    </div>
  );
}

export default App;

