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
          mobile computational photography in deep learning. My research
          interests lie in the interplay between Computer Vision, 3D Geometry,
          and Deep Learning.
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
      <Row className="experience-row pt-3">
        <Col xs={3}>
          <img
            src="https://cdn-www.mediatek.com/icons/mtklogo.svg"
            alt="mtk logo"
            className="img-fluid mx-auto d-block"
          />
        </Col>
        <Col xs={9} className="my-auto">
          <span className="font-italic">Oct 2018 - Present.</span>
          <br />
          Multimedia Tech Development, MediaTek.
        </Col>
      </Row>
      <Row className="experience-row pt-2">
        <Col xs={3}>
          <img
            className="pt-3 img-fluid"
            src="https://imba.nthu.edu.tw/images/2019/12/22/nthu-logo.png"
            alt="nthu logo"
          />
        </Col>
        <Col xs={9} className="my-auto">
          <span className="font-italic">Sep 2016 - Jul 2018</span>
          {". "}
          <span>M.S Degree in Computer Science (GPA: 4.15 of 4.3)</span>
          <br />
          <span className="font-italic">Sep 2012 - Jun 2016</span>
          {". "}
          <span>B.S Degree in Computer Science (GPA: 3.87 of 4.3)</span>
          <br />
          National Tsing Hua University, Taiwan.
        </Col>
      </Row>
      <Row className="experience-row pt-2">
        <Col xs={3}>
          <img
            className="pt-3 img-fluid"
            src="https://www.itri.org.tw/english/images/itrilogo.svg"
            alt="itri logo"
          />
        </Col>
        <Col xs={9} className="my-auto">
          <span className="font-italic">May 2016 - Jan 2018.</span>
          <br />
          Industrial Technology Research Institute, industry-academia
          cooperation.
        </Col>
      </Row>
    </>
  );
}

function SkillStacks() {
  return (
    <>
      <h3 className="mt-4">Skill Stacks</h3>
      <Row className="project-row pb-4">
        <Col>
          <Badge variant="primary">Deep learning</Badge>{" "}
          <Badge variant="primary">Computer Vision</Badge>{" "}
          <Badge variant="primary">3D reconstruction</Badge>{" "}
          <Badge variant="primary">Web Full-stack</Badge>{" "}
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
      title: `Intelligent Vision System (IVS) for Companion Robots`,
      stacks: ["Cooperation Project", "Robotic Vision"],
      link: `https://youtu.be/p-QH94O46zc`,
      thumbnailUrl: `${process.env.PUBLIC_URL}/image/proj-itri-chess.jpg`,
      description: `An industry-academia cooperation project, named CES 2018 Innovation Awards Honorees, with Industrial Technology Research Institute (ITRI), Taiwan.`,
      pressLink: `https://www.itri.org.tw/english/ListStyle.aspx?DisplayStyle=01_content&SiteID=1&MmmID=617731531241750114&MGID=746246046741677517`,
    },
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
      title: `NTHU Course as a alternative system for students`,
      link: `https://github.com/henryyang42/NTHU_Course`,
      stacks: ["Front-end", "Back-end"],
      thumbnailUrl: `${process.env.PUBLIC_URL}/image/proj-nthu-course.jpg`,
      description: `A system that provide the course selection and arrangement from official site and serve a more instinctive interface, easy to use for students.`,
    },
    {
      title: `NTHU Open Campus Data API System`,
      link: `https://github.com/Tri-Try/REST`,
      stacks: ["Back-end", "Open data", "Innovation"],
      thumbnailUrl: `${process.env.PUBLIC_URL}/image/project-open-api.jpg`,
      description: `An innovation platform on the campus data and bridges the developers and the authority.`,
    },
    {
      title: `Mei-Chu Tournament 2015 Official Website for alumni`,
      link: `https://github.com/leVirve/MeiChuAlumni`,
      stacks: ["Front-end", "Back-end", "Full-Stack"],
      thumbnailUrl: `${process.env.PUBLIC_URL}/image/proj-meichu-alumni.jpg`,
      description: `An official event website for the tournament, which is an annual sports competition in March between National Tsing Hua University (NTHU) and National Chiao Tung University (NCTU).`,
    },
  ];
  return (
    <>
      <h3 className="mt-4">Projects</h3>
      {projects.map((project, index) => (
        <Row className="project-row pt-4" key={index}>
          <Col sm={3} className="my-auto">
            <img
              className="img-fluid rounded"
              src={`${project.thumbnailUrl}`}
              alt={`${project.title}-thumbnail`}
            />
          </Col>
          <Col sm={9}>
            <p className="proj-title pt-2 my-auto">{project.title}</p>
            <a href={project.link}>{project.link}</a>
            <br />
            {project.stacks.map((name) => (
              <>
                <Badge pill variant="info" key={name}>
                  {name}
                </Badge>{" "}
              </>
            ))}
            <p>
              {project.description}{" "}
              {project.pressLink ? <a href={project.pressLink}>News</a> : ""}
            </p>
          </Col>
        </Row>
      ))}
    </>
  );
}

function Footer() {
  return (
    <Container className="footer">
      <Row className="justify-content-md-center my-5">
        {"Copyright © "}
        <a href="https://github.com/leVirve" className="px-1">
          Hung-Jin Lin
        </a>{" "}
        {new Date().getFullYear()}.
      </Row>
    </Container>
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
          <Col md={8}>{Research()}</Col>
          <Col md={8}>{Projects()}</Col>
          <Col md={8}>{SkillStacks()}</Col>
          {/* <Col md={8}>Awards</Col>
          <Col md={8}>Contribution</Col>
          <Col md={8}>Misc - Beverage Art Club</Col> */}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
