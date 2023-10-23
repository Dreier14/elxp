import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './Components/Home/Home';
import { Error } from './Components/Error/Error';

export default (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
    </Routes>
);