import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './components/Home/Home';

export default (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
    </Routes>
);