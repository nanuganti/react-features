import { React } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from "./components/Counter";
import Home from "./components/Home";
import Users from "./components/Users";
import RefHook from "./components/RefHook";
import SuperProps from "./components/SuperProps";
import CreateRef from "./components/CreateRef";
import ImpureComponent from "./components/ImpureComponent";
import SyntheticEvent from "./components/SyntheticEvent";
import ListKeys from "./components/ListKeys"
import UnControlledComponent from "./components/UnControlledComponent"
import ForwardRef from "./components/ForwardRef"
import Memo from "./components/Memo"
//TODO: Add route to each new component dynamically 
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
          <Route path="/refhook" element={<RefHook />} />
          <Route path="/createref" element={<CreateRef />} />
          <Route path="/superProps" element={<SuperProps />} />
          <Route path="/ImpureComponent" element={<ImpureComponent />} />
          <Route path="/SyntheticEvent" element={<SyntheticEvent />} />
          <Route path="/ListKeys" element={<ListKeys />} />
          <Route path="/UnControlledComponent" element={<UnControlledComponent />} />
          <Route path="/ForwardRef" element={<ForwardRef />} />
          <Route path="/Memo" element={<Memo />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <b>This is my footer</b>
      </footer>
    </div>
  );
}

export default App;

