import { React } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from "./components/Counter";
import Home from "./components/Home";
import Users from "./components/Users";

function App() {
  return (
    //https://randomuser.me/api
    < div className="App" >
      <header>
        My App
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
      <footer>
        this is my footer
      </footer>
    </div>
  );
}

export default App;

