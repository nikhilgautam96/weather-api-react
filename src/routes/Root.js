import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../component/Home';
import '../style/index.scss';

export default function Root() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
