import './App.css';
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './pages/HomePage';

function App() {

  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Route exact path="/" component={HomePage} />
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
