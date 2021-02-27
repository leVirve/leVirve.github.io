import { Container, Row, Col, Image, Badge } from "react-bootstrap";
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

function Experiences() {
  return (
    <>
      <h3>Experience</h3>
      <Row className="experience-row pt-2">
        <Col xs={3}>
          <img
            src="https://cdn-www.mediatek.com/icons/mtklogo.svg"
            alt="mtk logo"
          />
        </Col>
        <Col xs={9}>
          Oct 2018 - Present / Dept. of Mutlimedia Tech Development, MediaTek, Taiwan.
        </Col>
      </Row>
      <Row className="experience-row pt-2">
        <Col xs={3}>
          <img
            className="pt-2"
            src="https://imba.nthu.edu.tw/images/2019/12/22/nthu-logo.png"
            alt="nthu logo"
          />
        </Col>
        <Col xs={9}>
          2016 - 2018 / Dept. of Computer Science, National Tsing Hua University, Taiwan. <br />
          2012 - 2016 / Dept. of Computer Science, National Tsing Hua University, Taiwan.
        </Col>
      </Row>
    </>
  );
}

function SkillStacks() {
  return (
    <>
      <h3 className="mt-5">Skill Stacks</h3>
      <Row className="project-row pb-4">
        <Col>
          <Badge variant="primary">Deep learning</Badge>{" "}
          <Badge variant="primary">3D reconstruction</Badge>{" "}
          <Badge variant="primary">Web Full-end</Badge>{" "}
          <Badge variant="primary">Distributed/Parallel Computation</Badge>{" "}
          <Badge variant="primary">Open Source</Badge>{" "}
        </Col>
      </Row>
    </>
  );
}

function Projects() {
  const projects = [
    {
      title: `Crawler Tutorial for beginners in Python`,
      link: `https://github.com/leVirve/CrawlerTutorial`,
      stacks: ["Web crawler"],
      thumbnailUrl: `https://github.com/leVirve/CrawlerTutorial/raw/master/img/ptt_console_view.png`,
      description: `A web-based crawler/spider tutorial for beginner on one of the biggest social network website in Taiwan.`,
    },
    {
      title: `Dcard Spider as a out-of-box Python Package`,
      link: `https://github.com/leVirve/dcard-spider`,
      stacks: ["Web crawler", "Package"],
      thumbnailUrl: `https://raw.githubusercontent.com/leVirve/dcard-spider/master/docs/img/snapshot.png`,
      description: `A web-based API crawler/spider on another biggest social network website in Taiwan.`,
    },
    {
      title: `NTHU Course`,
      link: `https://github.com/henryyang42/NTHU_Course`,
      stacks: ["Front-end", "Back-end"],
      thumbnailUrl: `${process.env.PUBLIC_URL}/image/proj-nthu-course.png`,
      description: `A system that fetch the course data and provide service that is instinctive, easy to use.`,
    },
  ];
  return (
    <>
      <h3 className="mt-5">Projects</h3>
      {projects.map((project, index) => (
        <Row className="project-row pt-4" key={index}>
          <Col sm={3}>
            <a href={project.link}>
              <img
                src={`${project.thumbnailUrl}`}
                alt={`${project.title}-thumbnail`}
              />
            </a>
          </Col>
          <Col sm={9}>
            <p className="proj-title">{project.title}</p>
            {project.stacks.map((name) => (
              <>
                <Badge pill variant="info" key={name}>
                  {name}
                </Badge>{" "}
              </>
            ))}
            <p>{project.description}</p>
          </Col>
        </Row>
      ))}
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
          <Col md={8}>{Experiences()}</Col>
          <Col md={8}>{SkillStacks()}</Col>
          <Col md={8}>{Research()}</Col>
          <Col md={8}>{Projects()}</Col>
          {/* <Col md={8}>Invited Talks</Col>
          <Col md={8}>Contribution</Col>
          <Col md={8}>Misc - Beverage Art Club</Col> */}
        </Row>
      </Container>
    </>
  );
}

export default App;
