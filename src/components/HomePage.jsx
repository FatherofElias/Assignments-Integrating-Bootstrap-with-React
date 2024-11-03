import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
    return (
        <Container fluid className="bg-dark text-white min-vh-100 d-flex align-items-center justify-content-center">
            <Row className="text-center p-4">
                <Col>
                    <h1>Welcome to the Marvel Comics Explorer!</h1>
                    <p>Discover your favorite Marvel Comics characters, comics, and more.</p>
                    <Button variant="primary">Shop Now</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;