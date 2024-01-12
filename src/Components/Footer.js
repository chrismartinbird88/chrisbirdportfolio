import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {

    return (
        <section className="box container-fluid">
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <p>Copyright &copy; 2024</p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </section>
    );
}