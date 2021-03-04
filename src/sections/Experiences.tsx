import { Row, Col } from "react-bootstrap";

export function Experience() {
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
