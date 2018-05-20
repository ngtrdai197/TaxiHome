import React, { Component } from 'react';
import './App.css';
import TopBar from './component/topbar/TopBar'
import Header from './component/header/Header'
import Intro from './component/intro/Intro';
import Main from './component/main/Main';
import Footer from './component/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <Header/>
        <Intro/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
