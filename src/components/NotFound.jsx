import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import errorImage from '../assets/404.png';

const NotFound = () => {
    return (
        <Container fluid className="bg-light text-dark min-vh-100 d-flex align-items-center justify-content-center">
            <Row className="text-center p-4">
                <Col md={8}>
                    <Image src={errorImage} width={1000} fluid rounded className="mb-4" />
                </Col>
                <Col md={8}>
                    <h2>404 - Page Not Found</h2>
                    <p>The page you are looking for does not exist.</p>
                    <NavLink to="/">
                        <Button variant="primary">Go back to Home</Button>
                    </NavLink>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;

