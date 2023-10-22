import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Header } from '../header/header';
import { iComponentProps } from '../../interfaces/iComponentProps';
import { CountryView } from '../countryView/countryView';

// The Home component will serve as the base entry point for our application as we add more components.

export const Home: React.FC = (): JSX.Element => {
    return (
        <>
            Enterprise Level Experience
        </>
    )
}