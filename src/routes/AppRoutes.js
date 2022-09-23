import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from '../pages'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/exchanges' element={<Exchanges />} />
                <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                <Route path='/crypto/:coinId' element={<CryptoDetails />} />
                <Route path='/news' element={<News />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </>
    )
}

export default AppRoutes
