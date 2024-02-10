import { ContainerTwoTone } from '@ant-design/icons';
import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';
import Loader from './Loader';
import { Title } from 'chart.js';

function CryptoDetails() {
    const param = useParams();
    const {data: detail, isFetching: isFetching} = useGetCryptoDetailsQuery(param.coinId);
    
    if(isFetching){return <Loader/>};
  return (
    <Col className="coin-detail-container">
        <Col className="coin-heading-cointainer">
            <Title>
                {}    
            </Title>
        </Col>
    </Col>
  );
}

export default CryptoDetails