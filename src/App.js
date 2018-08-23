import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect} from "react-router-dom"

import Home from './pages/home/root/Index'
import Thinks from './pages/thinks/root/Index'
import University from './pages/university/root/Index'
import Messages from './pages/messages/root/Index'
import Mine from './pages/mine/root/Index'
import Tabs from './common/tabs/Tabs.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* 重定向 */}
          <Route path="/" exact render={() => {
            return <Redirect to="/home" />
          }}/>

          <Route path="/home" component={Home} />
          <Route path="/thinks" component={Thinks} />
          <Route path="/university" component={University} />
          <Route path="/messages" component={Messages} />
          <Route path="/mine" component={Mine} />
          
          <Route component={Tabs} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
