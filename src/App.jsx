import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { NavBar, Footer, Homepage, Exchanges, News } from './components';
function App() {

  return (
    <>
    <Router>
      <div className="app">
        <NavBar />
        </div>
        <div className="main">
          <div className="routes">
            <Layout>
              <Routes>
                  <Route exact path="/" element={<Homepage/>}/>
                  <Route exact path="/exchanges" element={<Exchanges/>}/>
                  <Route exact path="/news" element={<News/>}/>
                </Routes>
            </Layout>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
