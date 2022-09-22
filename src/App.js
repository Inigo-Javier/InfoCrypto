import React from 'react'
import { Link } from 'react-router-dom';

import { AppRoutes } from './routes'
import { Navbar } from './components'

import { Layout, Typography, Space } from 'antd';
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <AppRoutes />
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
            <Link to="/">
              Cryptoverse Inc.
            </Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div >
  )
}

export default App






