import React from 'react';
import { Button, Container, Row, Col, Image, Card } from 'react-bootstrap';
import marvelImage from '../assets/marvel.jfif';

const HomePage = () => {
    return (
        <Container fluid className="bg-dark text-white min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <Row className="p-4 border border-white rounded mb-5">
                <Col className="text-center">
                    <Image src={marvelImage} fluid className="mb-4" />
                    <h1>Welcome to the Marvel Comics Explorer!</h1>
                    <p>Discover your favorite Marvel Comics characters, comics, and more.</p>
                    <Button variant="primary" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>Shop Now</Button>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Featured Product</Card.Title>
                            <Card.Text>
                                Check out this amazing product from the Marvel universe!
                            </Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
