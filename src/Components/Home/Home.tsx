import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { NavBar } from '../NavBar/NavBar';

// The Home component will serve as the base entry point for our application as we add more components.

export const Home: React.FC = (): JSX.Element => {
    return (
        <>
            <NavBar />
        </>
    );
}