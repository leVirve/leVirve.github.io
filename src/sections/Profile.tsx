import { Container, Image, Row, Col } from "react-bootstrap";

export function Profile() {
  const profileImageUrl = `${process.env.PUBLIC_URL}/image/profile-rabbit.jpg`;
  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;
  return (
    <>
      <Container className="pt-2 profile">
        <Row>
          <Col sm={3}>
            <Image
              src={profileImageUrl}
              fluid
              roundedCircle
              className="me-profile mx-auto d-block"
            />
          </Col>
          <Col sm={9}>
            <h1>Hung-Jin Lin</h1>
            <h1 className="tw-name">林宏縉</h1>
            <p className="profile-links">
              <a href="mailto:vtsh.jn@gmail.com">Email</a> /{" "}
              <a href={resumeUrl}>CV</a> /{" "}
              <a href="https://www.linkedin.com/in/hung-jin-lin-5b66119b/">
                LinkedIn
              </a>{" "}
              / <a href="https://github.com/leVirve">Github</a> /{" "}
              <a href="https://scholar.google.com/citations?hl=en&user=-LTWALcAAAAJ">
                Google Scholar
              </a>
            </p>
            <p>
              I am a research engineer at{" "}
              <a href="https://www.mediatek.com/">Mediatek</a>, where I work on
              mobile computational photography in deep learning. My research
              interests lie in the interplay between Computer Vision, 3D
              Geometry, and Deep Learning.
            </p>
            <p>
              I did my graduate supervised by{" "}
              <a href="https://tw.linkedin.com/in/shang-hong-lai-4913a0b">
                Shang-Hong Lai
              </a>{" "}
              in Computer Vision Lab, and bachelors studies advised by{" "}
              <a href="https://www.linkedin.com/in/ren-song-tsay-3049943b/">
                Ren-Song Tsay
              </a>
              , at{" "}
              <a href="https://www.nthu.edu.tw/">
                National Tsing Hua University
              </a>
              , both in Computer Science.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
