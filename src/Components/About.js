import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import chrisbird from '../assets/img/chrisbird.webp';

export const About = () => {

    return(
        <section className="box container-fluid" id="about">
            <Container>
                <Row>
                    <h1>About Me</h1>
                </Row>
                <Row>
                    <h1>Personal Information</h1>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                        <p>My name is Chris Bird and I am passionate about Front-End Development. I am an aspiring Front-End Developer based in Durban, South Africa. My skills include but aren't limited to the following:</p>
                        <ul>
                            <li>Creating Websites using HTML, CSS, WordPress and JavaScript.</li>
                            <li>Making use of frameworks such as Bootstrap and React.js.</li>
                            <li>Transforming PhotoShop Designs into functional Websites.</li>
                            <li>Creating Android Mobile Apps using Kodular.io</li>
                        </ul>
                        <p>I have recently aquired the following skills: AngularJS, MongoDB and NodeJS - Self taught.</p>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                        <img src={chrisbird} className="img-fluid" alt="Chris Bird Front-End Developer"/>
                    </Col>
                </Row>
            </Container>
            <a href='/#navTop' className='backLink'>Back to Top</a>
        </section>
    );
}