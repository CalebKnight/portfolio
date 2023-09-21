import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Home } from "./containers";

function App() {
  return (
    <div className="bg-black w-screen h-screen">
      <Routes>
        <Route path="/" Component={Home}></Route>
      </Routes>
    </div>
  );
}

export default App;
