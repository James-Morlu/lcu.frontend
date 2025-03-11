import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const Admission = () => {
  return (
    <Container className="my-5 bg-success">
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h2 className='bg-info text-white text-center'>Admission Information</h2>
            </Card.Header>
            <Card.Body>
              <h3 className='bg-success text-white'>Admission Requirements</h3>
              <ListGroup variant="flush" >
                <ListGroup.Item>Completed application form (to be submitted in person).</ListGroup.Item>
                <ListGroup.Item>High school diploma or equivalent.</ListGroup.Item>
                <ListGroup.Item>Official academic transcripts.</ListGroup.Item>
                <ListGroup.Item>Proof of identification (e.g., national ID, passport).</ListGroup.Item>
                <ListGroup.Item>Recent passport-sized photograph.</ListGroup.Item>
                <ListGroup.Item>Completed medical certificate (if required).</ListGroup.Item>
                <ListGroup.Item>Payment of application fee (if applicable).</ListGroup.Item>
              </ListGroup>

              <h3 className="mt-4 bg-success text-white">Academic Requirements</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Health Sciences Programs:</strong> Applicants must have passed *Chemistry, Biology, Mathematics, and English* in high school.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Other Colleges/Programs:</strong> Applicants must have passed *Mathematics and English* in high school.
                </ListGroup.Item>
              </ListGroup>

              <h3 className="mt-4 bg-success text-white">Admission Procedures</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Step 1: Entrance Examination (if applicable)</strong> — Applicants required to take an entrance exam must schedule and complete the test before proceeding.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Step 2: Collect Application Form</strong> — Visit the university admission office to collect and complete the application form.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Step 3: Submit Documents</strong> — Submit the completed application form along with required documents to the admission office.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Step 4: Admission Review</strong> — The university reviews applications and notifies successful applicants.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Step 5: Enrollment</strong> — Admitted students must visit the registrar’s office to complete enrollment and pay fees.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Step 6: Orientation</strong> — All new students must attend an orientation before classes begin.
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Admission;