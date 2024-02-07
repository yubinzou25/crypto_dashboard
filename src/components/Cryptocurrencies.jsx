import { React, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import millify from 'millify';
import { useGetCryptoQuery } from '../services/cryptoApi'
import { Input, Row, Col, Card } from 'antd';
function Cryptocurrencies({simplified}) {
    const count = simplified ? 10 : 100;
    const {data:cryptoData, isSuccess} = useGetCryptoQuery(count);
    const [searchTerm, setSearchTerm] = useState('');
    const coins = useMemo(() => {
        const coinsData = cryptoData?.data?.coins || [];
        const filterdCoins = coinsData.filter((item) => item.name.toLowerCase().includes(searchTerm));
        return filterdCoins
    }, [cryptoData, searchTerm])
  return (
    <>
        {!simplified && (
            <div className="search-crypto">
                <Input
                    placeholder="Search Crypto"
                    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                />
            </div>
        )}
        <Row gutter={[32, 32]} className="crypto-card-container">
            {
                coins.map((coin) => (
                    <Col
                        kxs={24}
                        sm={12}
                        lg={6}
                        className="crypto-card"
                        key={coin.uuid}
                    >
                        <Link
                            key={coin.uuid}
                        >
                            <Card
                                title={coin.name}
                                extra={
                                    <div className="cropped-crypto-image">
                                        <img className="crypto-image" src={coin.iconUrl}/>
                                    </div>
                                }
                                hoverable
                            >
                                <p>Price: {millify(coin.price)}</p>
                                <p>Market Cap: {millify(coin.marketCap)}</p>
                                <p>Daily Change: {coin.change}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))
            }
        </Row>
    </>
  )
}

export default Cryptocurrencies