import './App.css';
import EmailHeaderRows from "./Components/EmailHeaderRows";
import {useState} from "react";

const App = () => {
    const [focusEmail, setFocusEmail] = useState();

    return (
    <div className="App">
      <header className="App-header">
        <EmailHeaderRows focusEmail={focusEmail} setFocusEmail={setFocusEmail} />
      </header>
    </div>
  );
}

export default App;
