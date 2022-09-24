import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

import icon from '../img/LogoB.Chain.png'

const { Title } = Typography

function NavBar() {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size="large" />
                <Title level={2} className='logo'>
                    <Link to='/'>InfoCrypto</Link>
                </Title>
            </div>
            <Menu theme="dark">
                <Menu.Item key="1" disabled={false} icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2" disabled={false} icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item key="3" disabled={false} icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>    
                <Menu.Item key="4" disabled={false} icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default NavBar
