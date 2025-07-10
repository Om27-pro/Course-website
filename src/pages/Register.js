import React from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

function Register() {
  return (
    <div className="bg-light py-5 min-vh-100">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow border-0">
              <Card.Body>
                <h2 className="text-center mb-4 fw-bold">Register for CLAT 2026</h2>
                <Form>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your full name" required />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required />
                  </Form.Group>

                  <Form.Group controlId="formPhone" className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your mobile number" required />
                  </Form.Group>

                  <Form.Group controlId="formCity" className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter your city" />
                  </Form.Group>

                  <Form.Group controlId="formCourse" className="mb-3">
                    <Form.Label>Course Interested In</Form.Label>
                    <Form.Select>
                      <option>Crash Course</option>
                      <option>Target Batch</option>
                      <option>Mock Test Series</option>
                    </Form.Select>
                  </Form.Group>

                  <div className="d-grid mt-4">
                    <Button variant="warning" size="lg" type="submit">
                      Submit Registration
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>

            <p className="text-center text-muted mt-4">
              Already registered? <a href="/login" className="text-warning fw-semibold">Login here</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
