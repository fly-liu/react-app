import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
// import Home from '@/pages/home/Home';
// import Docs from '@/pages/docs/Docs'
// import About from '@/pages/about/About';

import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import {rootRouters} from '@/router/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div style={{'height':'100%'}}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <div className="App-main clearfix">
              <div className="Main-left fL">
                <nav>
                  <ul className="Nav-item-wrap">
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/docs">文档</Link></li>
                    <li><Link to="/about">关于</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="Main-right fR">
                <Switch>
                  {
                    rootRouters.map((to,index) => {
                      return (
                        <Route key={index} path={to.path} exact={to.exact} component={ to.component } />
                      )
                    })
                  }
                  {/* <Route path="/" exact={true} component={ Home }/>
                        <Route path="/docs" component={ Docs }/>
                      <Route path="/about" component={ About }/> */}
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
