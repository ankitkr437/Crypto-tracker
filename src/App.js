import { render } from "react-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from 'axios'
import SingleCoin from "./Screen/SingleCoin";
import HomeScreen from "./Screen/HomeScreen";
import Header from "./Components/Header";
function App() {
  return (
    <div className="App" style={{width:"100%"}}>
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/coin/:id" element={<SingleCoin />} />
      </Routes>
    </div>
  );
}

export default App;
