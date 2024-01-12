import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Accordion, Row, Col } from 'react-bootstrap';

import storeHome from '../assets/img/storeHome.webp';
import storeAbout from '../assets/img/storeAbout.webp';
import storeProducts from '../assets/img/storeProducts.webp';
import storeContact from '../assets/img/storeContact.webp';

import yolandeBirdCounselorApp00 from '../assets/img/yolandeBirdCounselorApp00.webp';
import yolandeBirdCounselorApp01 from '../assets/img/yolandeBirdCounselorApp01.webp';
import yolandeBirdCounselorApp02 from '../assets/img/yolandeBirdCounselorApp02.webp';
import yolandeBirdCounselorApp03 from '../assets/img/yolandeBirdCounselorApp03.webp';
import yolandeBirdCounselorApp04 from '../assets/img/yolandeBirdCounselorApp04.webp';
import yolandeBirdCounselorApp05 from '../assets/img/yolandeBirdCounselorApp05.webp';
import yolandeBirdCounselorApp06 from '../assets/img/yolandeBirdCounselorApp06.webp';
import yolandeBirdCounselorApp07 from '../assets/img/yolandeBirdCounselorApp07.webp';
import yolandeBirdCounselorApp08 from '../assets/img/yolandeBirdCounselorApp08.webp';
import yolandeBirdCounselorApp09 from '../assets/img/yolandeBirdCounselorApp09.webp';
import yolandeBirdCounselorApp10 from '../assets/img/yolandeBirdCounselorApp10.webp';

import yolandeBirdPortfolioHome from '../assets/img/yolandeBirdPortfolioHomePage.webp';
import yolandeBirdPortfolioAbout from '../assets/img/yolandeBirdPortfolioAboutPage.webp';
import yolandeBirdPortfolioSkills from '../assets/img/yolandeBirdPortfolioSkillsPage.webp';
import yolandeBirdPortfolioWork from '../assets/img/yolandeBirdPortfolioWorkPage.webp';
import yolandeBirdPortfolioContact from '../assets/img/yolandeBirdPortfolioContactPage.webp';
import yolandeBirdPortfolioMobileNav from '../assets/img/yolandeBirdPortfolioMobileNav.webp';

import lifecoachHome from '../assets/img/lifecoachHome.webp';
import lifecoachAbout from '../assets/img/lifecoachAbout.webp';
import lifecoachBenefits from '../assets/img/lifecoachBenefits.webp';
import lifecoachContact from '../assets/img/lifecoachContact.webp';

import counselorHome from '../assets/img/counselorHome.webp';
import counselorAbout from '../assets/img/counselorAbout.webp';
import counselorServices from '../assets/img/counselorServices.webp';
import counselorContact from '../assets/img/counselorContact.webp';

export const Projects = () => {

    return (
        <section className="box container-fluid" id="projects">
            <Container>
                <h1>My Projects:</h1>
                <Accordion>
                <Accordion.Item>
                        <Accordion.Header>Project 1: Ecommerce Website</Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <p>This multi-page website was designed and developed using WordPress. It was developed according to the clients specifications. Click on each of the thumbnails to see the full size screenshot. To see this website in action <a href="http://ybirdmultimediastore.epizy.com/">click here</a>.</p>
                            </Row>
                            <Row>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={storeHome}><img src={storeHome} className="projectImage img-fluid" alt="Yolande Bird Multimedia Store Homepage" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={storeAbout}><img src={storeAbout} className="projectImage img-fluid" alt="Yolande Bird Multimedia Store About Page" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={storeProducts}><img src={storeProducts} className="projectImage img-fluid" alt="Yolande Bird Multimedia Store Products Page" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={storeContact}><img src={storeContact} className="projectImage img-fluid" alt="Yolande Bird Multimedia Store Contact Page" /></a></Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Header>Project 2: Android Mobile App</Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <p>This Mobile App was developed for use on Android Smartphones. It was developed using Kodular.io according to the client's specifications.Click on each of the thumbnails to see the full size screenshot.This app can be downloaded using the following <a href="https://github.com/chrismartinbird88/yolande-bird-counselor-app">link</a>.</p>
                            </Row>
                            <Row>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={yolandeBirdCounselorApp00}><img src={yolandeBirdCounselorApp00} className="projectImage img-fluid" alt="Yolande Bird Counselor App Screenshot 00" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={yolandeBirdCounselorApp01}><img src={yolandeBirdCounselorApp01} className="projectImage img-fluid" alt="Yolande Bird Counselor App Screenshot 01" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={yolandeBirdCounselorApp02}><img src={yolandeBirdCounselorApp02} className="projectImage img-fluid" alt="Yolande Bird Counselor App Screenshot 02" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={yolandeBirdCounselorApp03}><img src={yolandeBirdCounselorApp03} className="projectImage img-fluid" alt="Yolande Bird Counselor App Screenshot 03" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={yolandeBirdCounselorApp04}><img src={yolandeBirdCounselorApp04} className="projectImage img-fluid" alt="Yolande Bird Counselor App Screenshot 04" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={yolandeBirdCounselorApp05}><img src={yolandeBirdCounselorApp05} className="projectImage img-fluid" alt="Yolande Bird Counselor App Screenshot 05" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={yolandeBirdCounselorApp06}><img src={yolandeBirdCounselorApp06} className="projectImage img-fluid" alt="Yolande Bird Counselor App Screenshot 06" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={yolandeBirdCounselorApp07}><img src={yolandeBirdCounselorApp07} className="projectImage img-fluid" alt="Yolande Bird Counselor App Screenshot 07" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={yolandeBirdCounselorApp08}><img src={yolandeBirdCounselorApp08} className="projectImage img-fluid" alt="Yolande Bird Counselor App Screenshot 08" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={yolandeBirdCounselorApp09}><img src={yolandeBirdCounselorApp09} className="projectImage img-fluid" alt="Yolande Bird Counselor App Screenshot 09" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={yolandeBirdCounselorApp10}><img src={yolandeBirdCounselorApp10} className="projectImage img-fluid" alt="Yolande Bird Counselor App Screenshot 10" /></a></Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Header>Project 3: Multimedia Designer Portfolio Website</Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <p>This multipage website was developed using the React Library and TailwindCSS framework. It was developed according to the clients specifications. Click on each of the thumbnails to see the full size screenshot. To see this website in action <a href="https://yolandebirdportfolio.netlify.app/">click here</a>.</p>
                            </Row>
                            <Row>
                                <Col xs={12} sm={6} md={4} lg={4} xl={4}><a href={yolandeBirdPortfolioHome}><img src={yolandeBirdPortfolioHome} className="projectImage img-fluid" alt="Yolande Bird Graphic Designer Portfolio Home Page" /></a></Col>
                                <Col xs={12} sm={6} md={4} lg={4} xl={4}><a href={yolandeBirdPortfolioAbout}><img src={yolandeBirdPortfolioAbout} className="projectImage img-fluid" alt="Yolande Bird Graphic Designer Portfolio Home Page" /></a></Col>
                                <Col xs={12} sm={6} md={4} lg={4} xl={4}><a href={yolandeBirdPortfolioSkills}><img src={yolandeBirdPortfolioSkills} className="projectImage img-fluid" alt="Yolande Bird Graphic Designer Skills Page" /></a></Col>
                                <Col xs={12} sm={6} md={4} lg={4} xl={4}><a href={yolandeBirdPortfolioWork}><img src={yolandeBirdPortfolioWork} className="projectImage img-fluid" alt="Yolande bird Graphic Designer Work Page" /></a></Col>
                                <Col xs={12} sm={6} md={4} lg={4} xl={4}><a href={yolandeBirdPortfolioContact}><img src={yolandeBirdPortfolioContact} className="projectImage img-fluid" alt="Yolande Bird Graphic Designer Contact Page" /></a></Col>
                                <Col xs={12} sm={6} md={4} lg={4} xl={4}><a href={yolandeBirdPortfolioMobileNav}><img src={yolandeBirdPortfolioMobileNav} className="projectImage img-fluid" alt="Yolande bird Graphic Designer Mobile Nav" /></a></Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Header>Project 4: Counselor Website</Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <p>This one-page website was developed using the React library and Bootstrap framework. It was developed according to the clients specifications. Click on each of the thumbnails to see the full size screenshot. To see this website in action <a href="https://yolandebirdcounsellor.netlify.app/">click here</a>.</p>
                            </Row>
                            <Row>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={counselorHome}><img src={counselorHome} className="projectImage img-fluid" alt="Counselor Home Section" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={counselorAbout}><img src={counselorAbout} className="projectImage img-fluid" alt="Counselor About Section" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={counselorServices}><img src={counselorServices} className="projectImage img-fluid" alt="Counselor Services Section" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={counselorContact}><img src={counselorContact} className="projectImage img-fluid" alt="Counselor Contact Section" /></a></Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Header>Project 5: Life Coach Website</Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <p>This one-page website was developed using the React library and Bootstrap framework. It was developed according to the clients specifications. Click on each of the thumbnails to see the full size screenshot. To see this website in action <a href="https://yolandebirdlifecoach.netlify.app/">click here</a>.</p>
                            </Row>
                            <Row>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={lifecoachHome}><img src={lifecoachHome} className="projectImage img-fluid" alt="Life Coach Home Section" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={lifecoachAbout}><img src={lifecoachAbout} className="projectImage img-fluid" alt="Life Coach About Section" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={lifecoachBenefits}><img src={lifecoachBenefits} className="projectImage img-fluid" alt="Life Coach Benefits Section" /></a></Col>
                                <Col xs={12} sm={6} md={3} lg={3} xl={3}><a href={lifecoachContact}><img src={lifecoachContact} className="projectImage img-fluid" alt="Life Coach Contact Section" /></a></Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
            <a href='/#navTop' className='backLink'>Back to Top</a>
        </section>
    );
}