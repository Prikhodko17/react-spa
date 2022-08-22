import './App.css';
import { BrowserRouter  as Router, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Posts from "./Components/Posts";
import Users from "./Components/Users";
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={HomePage}/>
        <Route path="/Posts" component={Posts}/>
        <Route path="/users" exact component={Users}/>
      </Router>
    </div>
  );
}

export default App;
