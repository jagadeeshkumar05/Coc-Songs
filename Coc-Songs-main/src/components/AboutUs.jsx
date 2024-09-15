import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css';
import Nav from './Nav'
const AboutUs = () => {
  return (
    <>
    <Nav/>
    <Container className="about-us-container">
      <Row className="text-center about-us-header">
        <Col>
          <h1>About Us</h1>
          <h2 className="lead about-us-lead">
            Welcome to Church Of Christ Tadepalligudem!
          </h2>
        </Col>
      </Row>
      <Row className="align-items-center about-us-section">
        <Col md={6} className="mb-4 mb-md-0">
          <Image src="/channels4_profile.jpg" alt="Our Team" fluid className="about-us-image" />
        </Col>
        <Col md={6}>
          <h2 className='about'>క్రీస్తుసంఘములన్నియు మీకు వందనములు చెప్పుచున్నవి</h2>
          <p className='pp'>
             - రోమా 16:16
          </p>
        </Col>
      </Row>
      {/* <Row className="align-items-center about-us-section flex-md-row-reverse">
        <Col md={6} className="mb-4 mb-md-0">
          <Image src="https://via.placeholder.com/500" alt="Our Values" fluid className="about-us-image" />
        </Col>
        <Col md={6}>
          <h2>Our Values</h2>
          <p>
            We believe in integrity, quality, and customer satisfaction. Our team
            works tirelessly to ensure that we meet and exceed your expectations.
          </p>
        </Col>
      </Row>
      <Row className="align-items-center about-us-section">
        <Col md={6} className="mb-4 mb-md-0">
          <Image src="https://via.placeholder.com/500" alt="Our Vision" fluid className="about-us-image" />
        </Col>
        <Col md={6}>
          <h2>Our Vision</h2>
          <p>
            Our vision is to be a global leader in our industry, recognized for
            our innovative products and exceptional customer service.
          </p>
        </Col>
      </Row> */}
      <Row className="text-center">
        <Col>
          <h2>Contact Us</h2>
          <h4>
            Have any questions? Feel free to <a href="/contact" className="about-us-contact">reach out to us</a>.
          </h4>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default AboutUs;
