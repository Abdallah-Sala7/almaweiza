import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./components/home";
import Quran from "./components/quran";
import Pray from "./components/praytime";
import Hadeth from "./components/hadeth";
import Contact from "./components/contact";
import Lectuer from "./components/lectuer";


class App extends Component {
  render(){
    return (
      <div className="App">

        <BrowserRouter>
          <Nav />
          <Route exact path='/' component={Home}/>
          <Route path='/hadeth' component={Hadeth}/>
          <Route path='/lec' component={Lectuer}/>
          <Route path='/quran' component={Quran}/>
          <Route path='/pray' component={Pray}/>
          <Route path='/contact' component={Contact}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;