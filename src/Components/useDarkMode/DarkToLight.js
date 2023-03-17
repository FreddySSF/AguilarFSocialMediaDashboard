// Peer Reviewed By: Elizar Garcia
// The project is well put together and looks really close to the original example. I like the use of styles and the dark mode works . Did not have responsiveness and the switch button, but a good solid project good job!

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./DarkToLight.css";
import Facebook from "../../Assets/icon-facebook.svg";
import Twitter from "../../Assets/icon-twitter.svg";
import Instagram from "../../Assets/icon-instagram.svg";
import Youtube from "../../Assets/icon-youtube.svg";
import Up from "../../Assets/icon-up.svg";
import Down from "../../Assets/icon-down.svg";

function DarkToLight() {
  const [theme, setTheme] = useState(false);

  const handleClick = () => {
    setTheme(!theme);
  };
  useEffect(() => {
    if (theme === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  return (
    <div className="background">
      <Row>
        <Col>
          <h1>Social Media Dashboard</h1>
        </Col>
        <Col>
        <button className="button" onClick={handleClick}>
          Dark Mode
        </button>
        </Col>
        
      </Row>
      <Col>
      <span className="totalFollowers">Total Followers: 23,004</span>
      </Col>

      <Row className="cardsRow">
        <Col>
          <Container className="">
            <Card className="card">
              <Card.Body className="">
                <div className="FacebookTop"></div>
                <p className="cardUsername">
                  <img
                    className="imageMove"
                    src={Facebook}
                    alt="The logo of the Facebook company."
                  ></img>{" "}
                  @nathanf
                </p>
                <h1 className="cardTitle">1987</h1>
                <h3 className="followers">F O L L O W E R S</h3>
                <p className="upTextFacebook">
                  <img src={Up} alt="A green upwards facing triangle."></img> 12
                  Today
                </p>
              </Card.Body>
            </Card>
          </Container>
        </Col>

        <Col>
          <Container className="">
            <Card className="card">
              <div className="TwitterTop"></div>
              <p className="cardUsernameTwitter">
                <img
                  className="imageMove"
                  src={Twitter}
                  alt="The logo of the Twitter company."
                ></img>{" "}
                @nathanf
              </p>
              <h1 className="cardTitleTwitter">1044</h1>
              <h3 className="followers">F O L L O W E R S</h3>
              <p className="upTextTwitter">
                <img
                  src={Up}
                  alt="The logo A green upwards facing triangle the Facebook company."
                ></img>{" "}
                99 Today
              </p>
            </Card>
          </Container>
        </Col>

        <Col>
          <Container className="">
            <Card className="card">
              <div className="InstagramTop"></div>
              <p className="cardUsernameInstagram">
                <img
                  className="imageMove"
                  src={Instagram}
                  alt="The logo of the Instagram company."
                ></img>{" "}
                @realnathanf
              </p>
              <h1 className="cardTitleInstagram">11k</h1>
              <h3 className="followers">F O L L O W E R S</h3>
              <p className="upTextInstagram">
                <img src={Up} alt="A green upwards facing triangle."></img> 1089
                Today
              </p>
            </Card>
          </Container>
        </Col>

        <Col>
          <Container className="">
            <Card className="card">
              <div className="YoutubeTop"></div>
              <p className="cardUsernameYoutube">
                <img
                  className="imageMove"
                  src={Youtube}
                  alt="The logo of the Youtube company."
                ></img>{" "}
                Nathan F.
              </p>
              <h1 className="cardTitleYoutube">8239</h1>
              <h3 className="followers">S U B S C R I B E R S</h3>
              <p className="downText">
                <img src={Down} alt="A red downwards facing triangle"></img> 144
                Today
              </p>
            </Card>
          </Container>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <h2>Overview - Today</h2>
        </Col>
      </Row>

      <Row className="cardsRow">
      <Col>
          <Container>
            <Card className="card2">
              <Card.Body>
              <Row>
                <Col>
              <p className="cardFacebook1">Page Views</p>
              </Col>
              <Col>
                  <img src ={Facebook} alt="The Facebook company logo"></img>
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                  <h1 className="cardTitle2Facebook1">87</h1>
                  </Col>
                   <Col>
                  <p className="upTextFacebook2"> <img src={Up} alt="A red downwards facing triangle"></img>{" "}
                    3%</p>
                  </Col>
                    </Row>
              </Card.Body>
            </Card>
          </Container>
        </Col>

        <Col>
          <Container className="">
            <Card className="card2">
              <Card.Body>
              <Row>
                <Col>
              <p className="cardFacebook2">Likes</p>
              </Col>
              <Col>
                  <img src ={Facebook} alt="The Facebook company logo"></img>
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                  <h1 className="cardTitle2Youtube2">1407</h1>
                  </Col>
                   <Col>
                  <p className="downTextFacebook"> <img src={Down} alt="A red downwards facing triangle"></img>{" "}
                    2%</p>
                  </Col>
                    </Row>
              </Card.Body>
            </Card>
          </Container>
        </Col>

        <Col>
          <Container className="">
            <Card className="card2">
              <Card.Body>
              <Row>
                <Col>
              <p className="cardUsername2">Likes</p>
              </Col>
              <Col>
                  <img src ={Instagram} alt="The Instagram company logo"></img>
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                  <h1 className="cardTitle2Instagram1">5462</h1>
                  </Col>
                   <Col>
                  <p className="upTextInstagram2"> <img src={Up} alt="A red downwards facing triangle"></img>{" "}
                    2257%</p>
                  </Col>
                    </Row>
              </Card.Body>
            </Card>
          </Container>
        </Col>

        <Col>
          <Container className="">
            <Card className="card2">
              <Card.Body>
              <Row>
                <Col>
              <p className="cardUsername2Instagram2">Profile Views</p>
              </Col>
              <Col>
                  <img src ={Instagram} alt="The Instagram company logo"></img>
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                  <h1 className="cardTitle2Instagram2">52k</h1>
                  </Col>
                   <Col>
                  <p className="upTextInstagram2"> <img src={Up} alt="A red downwards facing triangle"></img>{" "}
                    1375%</p>
                  </Col>
                    </Row>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>

      <br></br>

      <Row className="cardsRow">
      <Col>
          <Container className="">
            <Card className="card2">
              <Card.Body>
              <Row>
                <Col>
              <p className="cardUsername2">Retweets</p>
              </Col>
              <Col>
                  <img src ={Twitter} alt="The Twitter company logo"></img>
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                  <h1 className="cardTitle2">117</h1>
                  </Col>
                   <Col>
                  <p className="upTextTwitter2"> <img src={Up} alt="A red downwards facing triangle"></img>{" "}
                    303%</p>
                  </Col>
                    </Row>
              </Card.Body>
            </Card>
          </Container>
        </Col>

        <Col>
          <Container className="">
            <Card className="card2">
              <Card.Body>
              <Row>
                <Col>
              <p className="cardUsername2">Likes</p>
              </Col>
              <Col>
                  <img src ={Twitter} alt="The Twitter company logo"></img>
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                  <h1 className="cardTitle2">507</h1>
                  </Col>
                   <Col>
                  <p className="upTextTwitter2"> <img src={Up} alt="A red downwards facing triangle"></img>{" "}
                    553%</p>
                  </Col>
                    </Row>
              </Card.Body>
            </Card>
          </Container>
        </Col>

        <Col>
          <Container className="">
            <Card className="card2">
              <Card.Body>
              <Row>
                <Col>
              <p className="cardUsername2">Likes</p>
              </Col>
              <Col>
                  <img src ={Youtube} alt="The Youtube company logo"></img>
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                  <h1 className="cardTitle2">107</h1>
                  </Col>
                   <Col>
                  <p className="downTextYoutube2"> <img src={Down} alt="A red downwards facing triangle"></img>{" "}
                    19%</p>
                  </Col>
                    </Row>
              </Card.Body>
            </Card>
          </Container>
        </Col>

        <Col>
          <Container className="">
            <Card className="card2">
              <Card.Body>
              <Row>
                <Col>
              <p className="cardUsername2Youtube2">Total Views</p>
              </Col>
              <Col>
                  <img src ={Youtube} alt="The Youtube company logo"></img>
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                  <h1 className="cardTitle2Youtube2">1407</h1>
                  </Col>
                   <Col>
                  <p className="downTextFacebook"> <img src={Down} alt="A red downwards facing triangle"></img>{" "}
                    12%</p>
                  </Col>
                    </Row>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
    </div>
  );
}
export default DarkToLight;
