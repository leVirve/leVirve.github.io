import { Container, Row, Col, Image } from "react-bootstrap";
import "./App.scss";
import { Research } from "./ResearchSection";

function Bio() {
  const bioImageUrl = `${process.env.PUBLIC_URL}/image/profile-rabbit.jpg`;
  return (
    <>
      <Container className="pt-2 partial-center">
        <div className="float-left pr-5 pb-3">
          <Image src={bioImageUrl} fluid roundedCircle className="me-profile" />
        </div>
        <h1>Hung-Jin Lin 林宏縉</h1>
        <p>
          <a href="mailto:vtsh.jn@gmail.com">Email</a> / Résumé /{" "}
          <a href="https://www.linkedin.com/in/hung-jin-lin-5b66119b/">
            LinkedIn
          </a>{" "}
          / <a href="https://github.com/leVirve">Github</a>
        </p>
        <p>
          I am a research engineer at{" "}
          <a href="https://www.mediatek.com/">Mediatek</a>, where I work on
          mobile computational photography in deep learning.
        </p>
        <p>
          I did my undergraduate supervised by{" "}
          <a href="https://tw.linkedin.com/in/shang-hong-lai-4913a0b">
            Shang-Hong Lai
          </a>{" "}
          in Computer Vision Lab, and bachelors studies advised by{" "}
          <a href="https://www.linkedin.com/in/ren-song-tsay-3049943b/">
            Ren-Song Tsay
          </a>
          , at{" "}
          <a href="https://www.nthu.edu.tw/">National Tsing Hua University</a>,
          both in Computer Science.
        </p>
      </Container>
    </>
  );
}

function App() {
  return (
    <>
      <Container fluid as="section" className="me-section">
        {Bio()}
      </Container>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={8}>{Research()}</Col>
          <Col md={8}>Projects</Col>
          <Col md={8}>Experiences</Col>
          <Col md={8}>Educations</Col>
          <Col md={8}>Patents</Col>
          <Col md={8}>Invited Talks</Col>
          <Col md={8}>Miscellaneous</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
