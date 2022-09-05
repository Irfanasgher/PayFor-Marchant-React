import React from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import avatar1 from "../../../assets/images/avatars/avatar1.jpg";
import avatar2 from "../../../assets/images/avatars/avatar2.jpg";
import avatar3 from "../../../assets/images/avatars/avatar3.jpg";
import avatar4 from "../../../assets/images/avatars/avatar4.jpg";
import avatar5 from "../../../assets/images/avatars/avatar5.jpg";

const ListGroupItemC = (props) => {
  const { color, heading, star } = props;
  return (
    <div>
      <Card className="card-box mb-5">
        <CardHeader>
          <div className="card-header--title">
            <b>{heading}</b>
          </div>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="py-3">
            <Row className="no-gutters">
              <Col xl="6" md="12" className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <div className="avatar-icon-wrapper mr-2">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar2} />
                    </div>
                  </div>
                  <div>
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold text-black"
                      title="..."
                    >
                      Shanelle Wynn
                    </a>
                    <span className="text-black-50 d-block">
                      UI Engineer, Apple Inc.
                    </span>
                  </div>
                </div>
              </Col>
              <Col
                xl="6"
                md="12"
                className="pt-3 pt-xl-0 d-flex align-items-center"
              >
                <div className="align-box-row flex-grow-1">
                  <div className="d-flex flex-column flex-grow-1"></div>

                  {star ? (
                    <div
                      className="my-3 font-size-lg"
                      style={{ color: "#f4772e" }}
                    >
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      color="neutral-primary"
                      style={{ background: color, color: "#fff" }}
                      className="ml-4"
                    >
                      02/08/2021
                    </Button>
                  )}
                </div>
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem className="py-3">
            <Row className="no-gutters">
              <Col xl="6" md="12" className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <div className="avatar-icon-wrapper mr-2">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar3} />
                    </div>
                  </div>
                  <div>
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold text-black"
                      title="..."
                    >
                      Akeem Griffith
                    </a>
                    <span className="text-black-50 d-block">
                      Manager, Google Inc.
                    </span>
                  </div>
                </div>
              </Col>
              <Col
                xl="6"
                md="12"
                className="pt-3 pt-xl-0 d-flex align-items-center"
              >
                <div className="align-box-row flex-grow-1">
                  <div className="d-flex flex-column flex-grow-1"></div>
                  {star ? (
                    <div
                      className="my-3 font-size-lg"
                      style={{ color: "#f4772e" }}
                    >
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      color="neutral-primary"
                      style={{ background: color, color: "#fff" }}
                      className="ml-4"
                    >
                      02/08/2021
                    </Button>
                  )}
                </div>
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem className="py-3">
            <Row className="no-gutters">
              <Col xl="6" md="12" className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <div className="avatar-icon-wrapper mr-2">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar4} />
                    </div>
                  </div>
                  <div>
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold text-black"
                      title="..."
                    >
                      Abigayle Hicks
                    </a>
                    <span className="text-black-50 d-block">
                      Project Manager, Spotify
                    </span>
                  </div>
                </div>
              </Col>
              <Col
                xl="6"
                md="12"
                className="pt-3 pt-xl-0 d-flex align-items-center"
              >
                <div className="align-box-row flex-grow-1">
                  <div className="d-flex flex-column flex-grow-1"></div>
                  {star ? (
                    <div
                      className="my-3 font-size-lg"
                      style={{ color: "#f4772e" }}
                    >
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      color="neutral-primary"
                      style={{ background: color, color: "#fff" }}
                      className="ml-4"
                    >
                      02/08/2021
                    </Button>
                  )}
                </div>
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem className="py-3">
            <Row className="no-gutters">
              <Col xl="6" md="12" className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <div className="avatar-icon-wrapper mr-2">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar5} />
                    </div>
                  </div>
                  <div>
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold text-black"
                      title="..."
                    >
                      Tyrell Macleod
                    </a>
                    <span className="text-black-50 d-block">
                      DevOps, Netflix
                    </span>
                  </div>
                </div>
              </Col>
              <Col
                xl="6"
                md="12"
                className="pt-3 pt-xl-0 d-flex align-items-center"
              >
                <div className="align-box-row flex-grow-1">
                  <div className="d-flex flex-column flex-grow-1"></div>
                  {star ? (
                    <div
                      className="my-3 font-size-lg"
                      style={{ color: "#f4772e" }}
                    >
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      color="neutral-primary"
                      style={{ background: color, color: "#fff" }}
                      className="ml-4"
                    >
                      02/08/2021
                    </Button>
                  )}
                </div>
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem className="py-3">
            <Row className="no-gutters">
              <Col xl="6" md="12" className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <div className="avatar-icon-wrapper mr-2">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar1} />
                    </div>
                  </div>
                  <div>
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold text-black"
                      title="..."
                    >
                      Huw Conley
                    </a>
                    <span className="text-black-50 d-block">
                      Manager, Dribbble
                    </span>
                  </div>
                </div>
              </Col>
              <Col
                xl="6"
                md="12"
                className="pt-3 pt-xl-0 d-flex align-items-center"
              >
                <div className="align-box-row flex-grow-1">
                  <div className="d-flex flex-column flex-grow-1"></div>
                  {star ? (
                    <div
                      className="my-3 font-size-lg"
                      style={{ color: "#f4772e" }}
                    >
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                      <FontAwesomeIcon icon={["fas", "star"]} />
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      color="neutral-primary"
                      style={{ background: color, color: "#fff" }}
                      className="ml-4"
                    >
                      02/08/2021
                    </Button>
                  )}
                </div>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default ListGroupItemC;
