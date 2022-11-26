import './App.css';
import Main from './components/Main';
import {  Provider } from "./components/context/Context";
function App() {
  return (
    <Provider>
    <div className="App">
     <Main />
    </div>
    </Provider>
  );
}

export default App;
