import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import RoutPaths from "./store/RouterPaths"
import RouterPaths from './store/RouterPaths';

function App() {
  return (
    <BrowserRouter>
      <RouterPaths/>
    </BrowserRouter>
  );
}

export default App;
