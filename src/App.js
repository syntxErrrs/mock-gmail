import './App.css';
import EmailHeaderRows from "./Components/EmailHeaderRows";
import {useState} from "react";

const App = () => {
    const [focusEmail, setFocusEmail] = useState();
    const [compose, setCompose] = useState(false);

    return (
    <div className="App">
      <header className="App-header">
        <EmailHeaderRows
            focusEmail={focusEmail}
            setFocusEmail={setFocusEmail}
            compose={compose}
            setCompose={setCompose}
        />
      </header>
    </div>
  );
}

export default App;