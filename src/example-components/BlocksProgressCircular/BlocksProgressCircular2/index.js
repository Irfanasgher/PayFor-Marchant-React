import React from "react";
import { Row, Col, Card } from "reactstrap";

import CountUp from "react-countup";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import {
  FaUsers,
  FaUserFriends,
  FaBoxes,
  FaTelegramPlane,
} from "react-icons/fa";

export default function LivePreviewExample({ progressChart }) {
  return (
    <>
      <Row>
        <Col md="6" xl="3">
          <Card className="card-box p-3 mb-5">
            <div className="d-flex align-items-center">
              <CircularProgressbarWithChildren
                value={progressChart?.customer?.customers}
                strokeWidth={6}
                className="circular-progress-first"
              >
                <div className="d-40 rounded-circle bg-neutral-first btn-icon">
                  <FaUsers className="icon" />
                </div>
              </CircularProgressbarWithChildren>
              <div className="pl-3">
                <div className="text-black-50 font-weight-bold">Customers</div>
                <div className="display-4 font-weight-bold pt-4 text-black">
                  <CountUp
                    start={0}
                    end={progressChart?.customer?.customers}
                    duration={6}
                    delay={2}
                    separator=""
                    decimals={0}
                    decimal=""
                  />
                </div>
              </div>
            </div>
          </Card>
        </Col>

        <Col md="6" xl="3">
          <Card className="card-box p-3 mb-5">
            <div className="d-flex align-items-center">
              <CircularProgressbarWithChildren
                value={progressChart?.client?.clientNumber}
                strokeWidth={6}
                className="circular-progress-success"
              >
                <div className="d-40 rounded-circle bg-neutral-success btn-icon">
                  <FaUserFriends className="icon" />
                </div>
              </CircularProgressbarWithChildren>
              <div className="pl-3">
                <div className="text-black-50 font-weight-bold">Clients</div>
                <div className="display-4 font-weight-bold pt-4 text-black">
                  <CountUp
                    start={0}
                    end={progressChart?.client?.clientNumber}
                    duration={6}
                    delay={2}
                    separator=""
                    decimals={0}
                    decimal=""
                  />
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col md="6" xl="3">
          <Card className="card-box p-3 mb-5">
            <div className="d-flex align-items-center">
              <CircularProgressbarWithChildren
                value={progressChart?.order?.orderNumber}
                strokeWidth={6}
                className="circular-progress-danger"
              >
                <div className="d-40 rounded-circle bg-neutral-danger btn-icon">
                  <FaBoxes className="icon" />
                </div>
              </CircularProgressbarWithChildren>
              <div className="pl-3">
                <div className="text-black-50 font-weight-bold">Order</div>
                <div className="display-4 font-weight-bold pt-4 text-black">
                  <CountUp
                    start={0}
                    end={progressChart?.order?.orderNumber}
                    duration={6}
                    delay={2}
                    separator=""
                    decimals={0}
                    decimal=""
                  />
                </div>
              </div>
            </div>
          </Card>
        </Col>

        <Col md="6" xl="3">
          <Card className="card-box p-3 mb-5">
            <div className="d-flex align-items-center">
              <CircularProgressbarWithChildren
                value={progressChart?.refund?.refundednumber}
                strokeWidth={6}
                className="circular-progress-info"
              >
                <div className="d-40 rounded-circle bg-neutral-info btn-icon">
                  <FaTelegramPlane className="icon" />
                </div>
              </CircularProgressbarWithChildren>
              <div className="pl-3">
                <div className="text-black-50 font-weight-bold">Refunds</div>
                <div className="display-4 font-weight-bold pt-4 text-black">
                  <CountUp
                    start={0}
                    end={progressChart?.refund?.refundednumber}
                    duration={6}
                    delay={2}
                    separator=""
                    decimals={0}
                    decimal=""
                  />
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
