import { Row, Col, Badge } from "react-bootstrap";

export function Project() {
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
