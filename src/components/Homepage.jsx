import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import News from './News';
import { useGetCryptoQuery } from '../services/cryptoApi';
import Loader from './Loader';
const { Title } = Typography;

function Homepage() {

  const {data: cryptoData, isSuccess: isSuccess} = useGetCryptoQuery(10);
  const cryptoStats = isSuccess && cryptoData.data.stats;
  if(!isSuccess){
    return <Loader/>;
  }
  return (
    <>
    <Title level={2} className="heading">Global Crypto Stats</Title>
    <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(cryptoStats.total)}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(cryptoStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={`$ ${millify(cryptoStats.totalMarketCap)}`}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`$ ${millify(cryptoStats.total24hVolume)}`}/></Col>
       
    </Row>
    <div className="home-heading-container">
        <Title level={2} className='home-title'>Top 10 Cryptos In the world</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
    </div>
    <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show more</Link></Title>
    </div>
    <News simplified/>

</>
  )
}

export default Homepage