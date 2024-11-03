import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
    return (
        <Container className="mt-5">
            <Row className="bg-dark text-white align-items-center p-4 rounded">
                <Col className="text-center">
                    <h1>Welcome to the Marvel Comics Explorer!</h1>
                    <p>Discover your favorite Marvel Comics characters, comics, and more.</p>
                    <Button variant="primary">Shop Now</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;