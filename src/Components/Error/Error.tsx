import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import { Background } from './ErrorBackground';

export const Error: React.FC = (): JSX.Element => {
    return (
        <>
            <Background>
                <Container>
                    <Row className='justify-content-md-center' style={{ textAlign: 'center', padding: '25%' }}>
                        <h1>
                            404 Error
                        </h1>
                        <br/>
                        <h2>
                            The Page You Requested is Invalid
                        <br/>
                            Click on the Link Below to Return to the Homepage
                        <br/>
                            <Link to="/" > 
                                Go Home 
                            </Link>
                        </h2>
                    </Row>
                </Container>
            </Background>
        </>  
    );
}