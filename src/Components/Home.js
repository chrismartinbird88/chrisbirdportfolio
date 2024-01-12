import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import chrisbird from '../assets/img/chrisbird.webp';
import handshake from '../assets/img/handshake-regard-cooperate-2009183-768x385.webp';
import project from '../assets/img/project-plan-planning-1987219-768x543.webp';
import phone from '../assets/img/pexels-ready-made-3850252.webp';

export const Home = () => {

    return(
        <section className="box container-fluid" id="home">
            <Container>
                <Row>
                    <Col>
                        <h1>Welcome</h1>
                        <p>Welcome to my Portfolio Website!</p>
                        <p>This website serves as a portfolio of my work and is divided into the following sections:</p>
                    </Col>
                </Row>
                <Row>
                    <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                    >
                        <Tab eventKey="about" title="About" xs={6} sm={6} md={4} lg={3} xl={3}>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <img src={chrisbird} className="img-fluid" alt="Chris Bird Front End Developer"/>
                                </Col>
                                <Col className='textbox' xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <p>The About Section contains the following information: A brief bio about me and my qualifications. <a href='#about'>Go there now</a></p>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="services" title="Services" xs={6} sm={6} md={4} lg={3} xl={3}>
                            <Row>
                                <Col className='textbox' xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <p>Here you can find out more about the services I offer such as Bootstrap websites, React websites etc. <a href='#services'>Go there now</a></p>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <img src={handshake} className="img-fluid" alt="Handshake"/>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="projects" title="Projects" xs={6} sm={6} md={4} lg={3} xl={3}>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <img src={project} className="img-fluid" alt="Project Concepts Mind Map" />
                                </Col>
                                <Col className='textbox' xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <p>The Projects Section contains a following information about past projects I have completed: a gallery containing screenshots, a brief description, a link etc.
                                    <a href='#projects'>Go there now</a>
                                    </p>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="contact" title="Contact" xs={6} sm={6} md={4} lg={3} xl={3}>
                            <Row>
                                <Col className='textbox' xs={12} sm={12} md={12} lg={6} xl={6}>
                                <p>The Contact Section contains the following information: my business profiles, email address and a contact form.
                                <a href='#contact'>Go there now</a>
                                </p>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <img src={phone} className="img-fluid" alt="Hand holding a smartphone"/>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </section>
    );
}