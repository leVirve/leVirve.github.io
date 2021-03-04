import { useState } from "react";
import { Row, Col, Collapse, Button } from "react-bootstrap";

export function Research() {
  return (
    <>
      <h3 className="mt-4">Research</h3>
      {publications.map((publication, index) => (
        <Row className="publication-row pt-4" key={index}>
          <Col sm={3} className="my-auto">
            <a href={publication.link}>
              <img
                src={`${process.env.PUBLIC_URL}/${publication.thumbnailFilename}`}
                alt={`${publication.title}-thumbnail`}
                className="img-fluid mx-auto d-block"
              />
            </a>
          </Col>
          <Col sm={9}>
            <p className="pub-title pt-2 my-auto">{publication.title}</p>
            <p>
              <AuthorString names={publication.author} />
            </p>
            <p className="font-italic">
              {publication.conference}, {publication.year}
            </p>
            <p>
              {renderIfExist(`Paper`, publication.paperLink)}
              {renderIfExist(`Project page`, publication.websiteLink)}
              {renderIfExist(`Code`, publication.codeLink)}
              {renderIfExist(`Demo video`, publication.demoLink1)}
              {renderIfExist(`Demo video 2`, publication.demoLink2)}
              {renderIfExist(`Invited Talk`, publication.talkLink)}
            </p>
          </Col>
          <Col className="mx-2">
            <HiddenBibtex content={publication.bibtex} uid={index.toString()} />
          </Col>
        </Row>
      ))}
    </>
  );
}

interface HiddenBibProps {
  uid: string;
  content?: string;
}

interface AuthorStringProps {
  names: string[];
}

function HiddenBibtex(props: HiddenBibProps) {
  const [open, setOpen] = useState(false);
  const { content, uid } = props;

  return (
    <>
      <Button
        variant="link"
        onClick={() => setOpen(!open)}
        aria-controls={`bibtex-content${uid}`}
        aria-expanded={open}
      >
        Bibtex
      </Button>
      <Collapse in={open}>
        <pre id={`bibtex-content${uid}`}>{content}</pre>
      </Collapse>
    </>
  );
}

function AuthorString(props: AuthorStringProps) {
  const { names } = props;

  const renderName = (text: string) => {
    if (text === `Hung-Jin Lin`) return <strong>{text}</strong>;
    return text;
  };
  return (
    <>
      {names.map((name, index) => (
        <span key={index}>
          {index ? ", " : " "}
          {renderName(name)}
        </span>
      ))}
    </>
  );
}

const renderIfExist = (name: string, link?: string) => {
  if (link)
    return (
      <>
        <a href={link} target="_blank" rel="noreferrer">
          {name}
        </a>{" "}
        /{" "}
      </>
    );
};

const publications = [
  {
    title: `Real-Time Single-Stage Vehicle Detector Optimized by Multi-Stage Image-Based Online Hard Example Mining`,
    author: [
      "Che-Tsung Lin",
      "Shu-Ping Chen",
      "Patrisia Sherryl Santoso",
      "Hung-Jin Lin",
      "Shang-Hong Lai",
    ],
    conference: `IEEE Transactions on Vehicular Technology`,
    year: 2020,
    bibtex: `@inproceedings{lin2020realtime,
  author    = {Lin, Che-Tsung and Chen, Shu-Ping and Patrisia Sherryl Santoso and Lin, Hung-Jin and Lai, Shang-Hong},
  title     = {Real-Time Single-Stage Vehicle Detector Optimized by Multi-Stage Image-Based Online Hard Example Mining},
  journal   = {IEEE Transactions on Vehicular Technology},
  year      = {2020}
}`,
    thumbnailFilename: `image/lin2020realtime.jfif`,
    link: `https://ieeexplore.ieee.org/document/8939461`,
    paperLink: `https://ieeexplore.ieee.org/document/8939461`,
  },
  {
    title: `Explorable Tone Mapping Operators`,
    author: [
      "Chien-Chuan Su",
      "Ren Wang",
      "Hung-Jin Lin",
      "Yu-Lun Liu",
      "Chia-Ping Chen",
      "Yu-Lin Chang",
      "Soo-Chang Pei",
    ],
    conference: `Proceedings of the 25th International Conference on Pattern Recognition (ICPR)`,
    year: 2020,
    bibtex: `@inproceedings{su2020explorable,
  title     = {Explorable Tone Mapping Operators},
  author    = {Su, Chien-Chuan and Wang, Ren and Lin, Hung-Jin and Chen, Chia-Ping and Chang, Yu-Lin and Pei, Soo-Chang},
  booktitle = {2020 25th International Conference on Pattern Recognition (ICPR)},
  year      = {2020},
}`,
    thumbnailFilename: `image/su2020explorable.jpg`,
    link: `https://arxiv.org/abs/2010.10000`,
    paperLink: `https://arxiv.org/pdf/2010.10000`,
  },
  {
    title: `Learning Camera-Aware Noise Models`,
    author: [
      "Ke-Chi Chang",
      "Ren Wang",
      "Hung-Jin Lin",
      "Yu-Lun Liu",
      "Chia-Ping Chen",
      "Yu-Lin Chang",
      "Hwann-Tzong Chen",
    ],
    conference: `Proceedings of European Conference on Computer Vision (ECCV)`,
    year: 2020,
    bibtex: `@InProceedings{chang2020learning,
  author     = {Chang, Ke-Chi and Wang, Ren and Lin, Hung-Jin and Liu, Yu-Lun and Chen, Chia-Ping and Chang, Yu-Lin and Chen, Hwann-Tzong},
  title      = {Learning Camera-Aware Noise Models},
  booktitle  = {Proceedings of European Conference on Computer Vision (ECCV)},
  year       = {2020}
}`,
    thumbnailFilename: `image/chang2020learning.jpg`,
    link: `https://arcchang1236.github.io/CA-NoiseGAN/`,
    paperLink: `https://arxiv.org/pdf/2008.09370`,
    websiteLink: `https://arcchang1236.github.io/CA-NoiseGAN/`,
    codeLink: `https://github.com/arcchang1236/CA-NoiseGAN`,
  },
  {
    title: `DeepRoom: 3D Room Layout and Pose Estimation from a Single Image`,
    author: ["Hung-Jin Lin", "Shang-Hong Lai"],
    conference: `Asian Conference on Pattern Recognition (ACPR)`,
    year: 2019,
    bibtex: `@inproceedings{lin2019deeproom,
  author     = {Lin, Hung-Jin and Lai, Shang-Hong},
  title      = {DeepRoom: 3D Room Layout and Pose Estimation from a Single Image},
  booktitle  = {Asian Conference on Pattern Recognition (ACPR)},
  year       = {2019}
}`,
    thumbnailFilename: `image/lin2019deeproom.jpg`,
    link: `https://link.springer.com/chapter/10.1007/978-3-030-41299-9_56`,
    paperLink: `https://link.springer.com/chapter/10.1007/978-3-030-41299-9_56`,
  },
  {
    title: `Indoor Scene Layout Estimation from a Single Image`,
    author: [
      "Hung-Jin Lin",
      "Sheng-Wei Huang",
      "Shang-Hong Lai",
      "Chen-Kuo Chiang",
    ],
    conference: `Proceedings of the 24th International Conference on Pattern Recognition (ICPR)`,
    year: 2018,
    bibtex: `@inproceedings{lin2018layoutestimation,
  Author    = {Hung Jin Lin and Sheng-Wei Huang and Shang-Hong Lai and Chen-Kuo Chiang},
  Title     = {Indoor Scene Layout Estimation from a Single Image},
  Booktitle = {2018 24th International Conference on Pattern Recognition (ICPR)},
  Year      = {2018}
}`,
    thumbnailFilename: `image/lin2019layout.jpg`,
    link: `https://levirve.github.io/lsun-room/`,
    paperLink: `https://ieeexplore.ieee.org/document/8546278`,
    websiteLink: `https://levirve.github.io/lsun-room/`,
    codeLink: `https://github.com/leVirve/lsun-room`,
  },
  {
    title: `General Deep Image Completion with Lightweight Conditional Generative Adversarial Networks`,
    author: ["Ching Wei Tseng", "Hung-Jin Lin", "Shang-Hong Lai"],
    conference: `Proceedings of the British Machine Vision Conference (BMVC)`,
    year: 2017,
    bibtex: `@inproceedings{BMVC2017_80,
  author     = {Ching-Wei Tseng and Hung-Jin Lin and Shang-Hong Lai},
  booktitle  = {Proceedings of the British Machine Vision Conference ({BMVC})},
  title      = {General Deep Image Completion with Lightweight Conditional Generative Adversarial Networks},
  year       = {2017}
}`,
    thumbnailFilename: `image/tseng2017inpaint.jpg`,
    link: `http://www.bmva.org/bmvc/2017/papers/paper080/index.html`,
    paperLink: `http://www.bmva.org/bmvc/2017/papers/paper080/index.html`,
    codeLink: `https://github.com/adamstseng/general-deep-image-completion`,
    demoLink1: `https://youtu.be/513xQM4NrxY`,
    demoLink2: `https://youtu.be/MWj2kkMDrgY`,
    talkLink: `https://youtu.be/WsqoNOOZO9w`,
  },
  {
    title: `Fast Vehicle Detector for Autonomous Driving`,
    author: [
      "Che-Tsung Lin",
      "Patrisia Sherryl Santoso",
      "Shu-Ping Chen",
      "Hung-Jin Lin",
      "Shang-Hong Lai",
    ],
    conference: `IEEE International Conference on Computer Vision Workshops (ICCVW)`,
    year: 2017,
    bibtex: `@inproceedings{lin2017vehicle,
  author     = {Lin, Che-Tsung and Patrisia Sherryl Santoso and Chen, Shu-Ping and Lin, Hung-Jin and Lai, Shang-Hong},
  booktitle  = {2017 IEEE International Conference on Computer Vision Workshops (ICCVW)},
  title      = {Fast Vehicle Detector for Autonomous Driving},
  year       = {2017}
}`,
    thumbnailFilename: `image/lin2017vehicle.jpg`,
    link: `https://ieeexplore.ieee.org/document/8265245`,
    paperLink: `https://openaccess.thecvf.com/content_ICCV_2017_workshops/papers/w3/Lin_Fast_Vehicle_Detector_ICCV_2017_paper.pdf`,
  },
];
