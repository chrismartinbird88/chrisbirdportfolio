import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Icons
import {BsFacebook, BsLinkedin, BsGithub} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import {SiFreelancer, SiUpwork} from 'react-icons/si';

export const Contact = () => {

    return (
        <section className="box container-fluid" id="contact">
            <Container>
                <Row>
                    <Col>
                        <h1>Contact</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Click on the buttons below or submit the form to contact me:</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href="https://www.facebook.com/christopher.bird.58152" className='contactImage' target="_blank" rel="noreferrer"><BsFacebook size={35} /></a>
                        <a href="https://www.linkedin.com/in/chris-martin-bird" className='contactImage' target="_blank" rel="noreferrer"><BsLinkedin size={35} /></a>
                        <a href="mailto:chrismartinbird88@gmail.com/" className='contactImage' target="_blank" rel="noreferrer"><HiOutlineMail size={35} /></a>
                        <a href="https://www.freelancer.com/u/ChrisBird88" className='contactImage' target="_blank" rel="noreferrer"><SiFreelancer size={35} /></a>
                        <a href="https://www.upwork.com/freelancers/~017d2287d556516cc9?viewMode=1" className='contactImage' target="_blank" rel="noreferrer"><SiUpwork size={35} /></a>
                        <a href="https://github.com/chrismartinbird88" className='contactImage' target="_blank" rel="noreferrer"><BsGithub size={35} /></a>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col className='hidden col-lg-3, col-xl-3'></Col>
                    <Col className='col-sm-12, col-md-12, col-lg-6, col-xl-6'>
                        <form action="https://getform.io/f/79ad834c-e221-4bdb-b8c0-9a7622f0109c" method='POST' className='form flex flex-col max-w-[600px] w-full'>
                            <Row>
                                <Col>
                                    <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input className='bg-[#ccd6f6] my-4 p-2' type="email" placeholder='Email' name='email' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <textarea className='bg-[#ccd6f6] my-4 p-2' name='message' rows="10" placeholder='Message'></textarea>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
            <a href='/#navTop' className='backLink'>Back to Top</a>
        </section>
    );
};