import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import angularjsImage from '../assets/img/angularjsImage.webp';
import mongodbImage from '../assets/img/mongodbImage.webp';
import nodejsImage from '../assets/img/nodejsImage.webp';
import reactImage from '../assets/img/reactImage.webp';
import bootstrapImage from '../assets/img/bootstrapImage.webp';
import htmlImage from '../assets/img/htmlImage.webp';
import cssImage from '../assets/img/cssImage.webp';
import javascriptImage from '../assets/img/javascriptImage.webp';
import photoshopImage from '../assets/img/photoshopImage.webp';
import wordpressImage from '../assets/img/wordpressImage.webp';

export const Services = () => {

    return (
        <section className='box container-fluid' id='services'>
            <Container>
                <Row>
                    <Col className='col-sm-12, col-md-12, col-lg-12, col-xl-12'>
                        <h1>Services</h1>
                        <p>I offer the following services:</p>
                        <p>Transform PhotoShop Designs into functional websites.</p>
                        <p>Design and develop websites and front-end interfaces.</p>
                        <p>In order to achieve this I make use of the following technologies: Click on any of the images to find out more about it</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href='https://en.wikipedia.org/wiki/AngularJS'><img className='serviceImage' src={angularjsImage} alt='AngularJS' /></a>
                    </Col>
                    <Col>
                        <a href='https://en.wikipedia.org/wiki/MongoDB'><img className='serviceImage' src={mongodbImage} alt='MongoDB' /></a>
                    </Col>
                    <Col>
                        <a href='https://en.wikipedia.org/wiki/Node.js'><img className='serviceImage' src={nodejsImage} alt='NodeJS' /></a>
                    </Col>
                    <Col>
                        <a href='https://en.wikipedia.org/wiki/React_(JavaScript_library)'><img className='serviceImage' src={reactImage} alt='React JS' /></a>
                    </Col>
                    <Col>
                        <a href='https://en.wikipedia.org/wiki/HTML5'><img className='serviceImage' src={htmlImage} alt='HTML5 (HyperText Markup Language 5' /></a>
                    </Col>
                    <Col>
                         <a href='https://en.wikipedia.org/wiki/CSS'><img className='serviceImage' src={cssImage} alt='CSS3(Cascading Style Sheets 3)' /></a>
                    </Col>
                    <Col>
                        <a href='https://en.wikipedia.org/wiki/JavaScript'><img className='serviceImage' src={javascriptImage} alt='JavaScript' /></a>
                    </Col>
                    <Col>
                        <a href='https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)'><img className='serviceImage' src={bootstrapImage} alt='BootStrap 5' /></a>
                    </Col>
                    <Col>
                        <a href='https://en.wikipedia.org/wiki/Adobe_Photoshop'><img className='serviceImage' src={photoshopImage} alt='Adobe Photoshop' /></a>
                    </Col>
                    <Col>
                        <a href='https://en.wikipedia.org/wiki/WordPress'><img className='serviceImage' src={wordpressImage} alt='WordPress' /></a>
                    </Col>
                </Row>
                <Row>
                    <a href='/#navTop' className='backLink'>Back to Top</a>
                </Row>
            </Container>
        </section>
    );
}