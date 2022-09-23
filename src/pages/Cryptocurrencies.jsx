import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'



const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 50
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count)

    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setCryptos(cryptosList?.data?.coins);

        const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

        setCryptos(filteredData);
    }, [cryptosList, searchTerm]);

    if (isFetching) return 'Loading...'


    return (
        <>{!simplified && (
            <div className="search-crypto">
                <Input
                    placeholder="Search Cryptocurrency"
                    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                />
            </div>
        )}
            <Row gutter={[5, 5]}>
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card-container">
                        <Link to={`/crypto/${currency.uuid}`} key={currency.uuid}>
                            <Card
                                title={`${currency.rank}.${currency.name}`}
                                extra={<img src={currency.iconUrl} alt="" width="35" height="35" />}
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies
