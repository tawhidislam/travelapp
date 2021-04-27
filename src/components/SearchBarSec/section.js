import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input, Button } from "reactstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
//Importing Modal
import ModalSection from "./../common/ModalSection";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="home  home-small" id="home">
          <Container>
            <Row>
              <Col md="12">
                <div className="home-wrapper home-intro row vertical-content">
                  <Col md="6">
                    <h1>We are ready to give you all travel solutions</h1>
                    <h4>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed feugiat arcu ut orci porta, eget porttitor felis
                      suscipit. Sed a nisl ullamcorper, tempus augue at, rutrum
                      lacus. Duis et turpis eros.
                    </h4>
                    <Link to="" className="btn btn-custom">
                      Learn more
                    </Link>
                    <Link
                      to="#"
                      className="video-btn btn popup-video"
                      id="popup-video"
                    >
                      <i className="glyphicon glyphicon-play"></i>Watch Video
                    </Link>
                  </Col>

                  <Col md="5" sm={{ size: 8, offset: 1 }}>
                    <Tabs
                      defaultActiveKey="flight"
                      className="d-flex justify-content-center"
                      id="uncontrolled-tab-example"
                    >
                      <Tab eventKey="flight" title="Flights">
                        <Form
                          className="intro-form"
                          action="#"
                          id="invite"
                          method="POST"
                        >
                          <h5>search your perfect Flights</h5>
                          <Input
                            name="fname"
                            id="fname"
                            className="fname"
                            placeholder="from"
                            type="text"
                            required
                          />
                          <Input
                            type="text"
                            placeholder="to"
                            name="to"
                            required
                          />
                          <Button type="submit" block className="btn-custom">
                            Search
                          </Button>
                        </Form>
                      </Tab>
                      <Tab eventKey="hotels" title="Hotels">
                        <Form
                          className="intro-form"
                          action="#"
                          id="invite"
                          method="POST"
                        >
                          <h5>search your Hotels</h5>
                          <Input
                            name="fname"
                            id="fname"
                            className="fname"
                            placeholder="from"
                            type="text"
                            required
                          />
                          <Input
                            type="text"
                            placeholder="to"
                            name="to"
                            required
                          />
                          <Button type="submit" block className="btn-custom">
                            Search
                          </Button>
                        </Form>
                      </Tab>
                      <Tab eventKey="tours" title="Tours">
                        <Form
                          className="intro-form"
                          action="#"
                          id="invite"
                          method="POST"
                        >
                          <h5>search your perfect tours</h5>
                          <Input
                            name="fname"
                            id="fname"
                            className="fname"
                            placeholder="from"
                            type="text"
                            required
                          />
                          <Input
                            type="text"
                            placeholder="to"
                            name="to"
                            required
                          />
                          <Button type="submit" block className="btn-custom">
                            Search
                          </Button>
                        </Form>
                      </Tab>
                    </Tabs>

                    <span id="result"></span>
                  </Col>
                </div>
              </Col>
            </Row>
            {/* Render ModalSection Component for Modal */}
            <ModalSection ref="child" channel="vimeo" videoId="175710248" />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
