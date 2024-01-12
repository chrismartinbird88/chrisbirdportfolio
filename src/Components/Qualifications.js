import {Container, Row, Col, Carousel, CarouselItem} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Qualifications = () => {

    return (
        <section className="banner container-fluid" id="qualifications">
            <Container>
                <Row>
                    <h1>My Qualifications</h1>
                    <p>I have completed the following qualifications.</p>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <Carousel fade>
                        <CarouselItem>
                                <Carousel.Caption>
                                        <h2><mark>Information Systems Internet Development Course</mark></h2>
                                        <br/>
                                        <p><mark>I have successfully completed a Higher National Diploma Course in Information Systems Internet Development at CTI - Computer Training in partnership with Cambridge University.</mark></p>  
                                        <p><mark>This course covered the following languages:</mark></p>
                                        <ul className="px-2">
                                        <li><mark>JAVA</mark></li>
                                        <li><mark>HTML(HyperText Markup Language)</mark></li>
                                        <li><mark>CSS(Cascading StyleSheets)</mark></li>
                                        <li><mark>XML(eXtensible Markup Language)</mark></li>
                                        <li><mark>Perl</mark></li>
                                        <li><mark>Flash</mark></li>
                                        <li><mark>SQL(Structured Query Language)</mark></li>
                                        </ul>
                                </Carousel.Caption>
                            </CarouselItem>
                            <CarouselItem>
                                <Carousel.Caption>
                                    <h2><mark>Project Management Diploma Course</mark></h2>
                                    <br/>
                                    <p><mark>I have completed a Project Management course that covered all aspects of managing projects such as:</mark></p>
                                    <ul>
                                    <li><mark>Building a team.</mark></li>
                                    <li><mark>Identifying all project constraints(eg. Time, Cost etc.)</mark></li>
                                    <li><mark>Managing a project's scope.</mark></li>
                                    <li><mark>Project planning</mark></li>
                                    <li><mark>Etc.</mark></li>
                                    </ul>
                                </Carousel.Caption>
                            </CarouselItem>
                            <CarouselItem>
                                <Carousel.Caption>
                                    <h2><mark>BSc - Bachelor of Science - Degree in Information </mark></h2>
                                    <br/>
                                    <p><mark>I have completed a Bachelor of Science Degree in Information Systems. This degree covered the following subjects:</mark></p>
                                    <ul>
                                    <li><mark>Software Engineering</mark></li>
                                    <li><mark>Operations Management</mark></li>
                                    <li><mark>Knowledge Management</mark></li>
                                    <li><mark>Professional Development</mark></li>
                                    <li><mark>Operating Systems and Concurrency</mark></li>
                                    <li><mark>Computer Graphics</mark></li>
                                    <li><mark>Artificial Intelligence</mark></li>
                                    </ul>  
                                </Carousel.Caption>
                            </CarouselItem>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <a href='/#navTop' className='backLink'>Back to Top</a>
        </section>
    )
}