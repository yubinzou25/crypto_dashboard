import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { NavBar, Footer, Homepage, Cryptocurrencies, Exchanges, News } from './components';
import CryptoDetails from './components/CryptoDetails';

function App() {

  return (
        <div className="app">
          <div className="navbar">
            <NavBar />
          </div>
          <div className="main">
            <div className="routes">
              <Layout>
                <Routes>
                  <Route exact path="/" element={<Homepage/>}/>
                  <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
                  <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
                  <Route exact path="/exchanges" element={<Exchanges/>}/>
                  <Route exact path="/news" element={<News/>}/>
                </Routes>
            </Layout>
            </div>
          </div>
        </div>
  )
}

export default App
