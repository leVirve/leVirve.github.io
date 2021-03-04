import { Container, Row, Col, Badge } from "react-bootstrap";
import "./App.scss";
import { Profile } from "./sections/Profile";
import { Experience } from "./sections/Experiences";
import { Project } from "./sections/Project";
import { Research } from "./sections/Research";

function App() {
  return (
    <>
      <Container fluid as="section" className="me-section">
        {Profile()}
      </Container>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={8}>{Experience()}</Col>
          <Col md={8}>{Research()}</Col>
          <Col md={8}>{Project()}</Col>
          <Col md={8}>{SkillStacks()}</Col>
          {/*<Col md={8}>Misc - Beverage Art Club</Col> */}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

function SkillStacks() {
  return (
    <>
      <h3 className="mt-4">Personal Skills</h3>
      <Row className="project-row pb-4">
        <Col>
          <Badge variant="primary">Deep learning</Badge>{" "}
          <Badge variant="primary">Computer Vision</Badge>{" "}
          <Badge variant="primary">Web Full-stack</Badge>{" "}
          <Badge variant="primary">Distributed Computing</Badge>{" "}
          <Badge variant="primary">Open Source</Badge>{" "}
        </Col>
      </Row>
    </>
  );
}

function Footer() {
  return (
    <Container className="footer">
      <Row className="justify-content-center my-5">
        {"Copyright © "}
        <a href="https://github.com/leVirve" className="px-1">
          Hung-Jin Lin
        </a>{" "}
        {new Date().getFullYear()}.
      </Row>
    </Container>
  );
}

export default App;
