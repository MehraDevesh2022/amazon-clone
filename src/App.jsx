
import {Switch  , Route } from "react-router-dom";
import "./App.css";
import Checkout from "./component/Home/Checkout";
import Header from "./component/Home/Header";
import Home from "./component/Home/Home";
function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
