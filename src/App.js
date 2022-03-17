import { React } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from "./components/Counter";
import Home from "./components/Home";
import Users from "./components/Users";
import RefSample from "./components/RefSample";
import SuperProps from "./components/SuperProps";

function App() {
  return (
    < div className="App" >
      <header>
        <b>My App</b>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<Users />} />
          <Route path="/refsample" element={<RefSample />} />
          <Route path="/superProps" element={<SuperProps />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <b>This is my footer</b>
      </footer>
    </div>
  );
}

export default App;

