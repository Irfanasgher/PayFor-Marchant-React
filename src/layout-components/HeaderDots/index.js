import React from "react";
import { UncontrolledPopover, Badge, Button } from "reactstrap";

import avatar1 from "../../assets/images/avatars/avatar1.jpg";
import avatar2 from "../../assets/images/avatars/avatar2.jpg";
import avatar6 from "../../assets/images/avatars/avatar6.jpg";
import people1 from "../../assets/images/stock-photos/people-1.jpg";
import people3 from "../../assets/images/stock-photos/people-3.jpg";

import { Bell } from "react-feather";
import PerfectScrollbar from "react-perfect-scrollbar";

const HeaderDots = () => {
  return (
    <>
      <div className="d-flex align-items-center popover-header-wrapper mt-5">
        <span className="d-inline-block pr-2">
          <Button
            id="alertsPopover"
            color="neutral-success"
            className="bg-neutral-success text-success font-size-lg p-0 d-inline-block shadow-none border-0 text-center d-44 rounded position-relative"
          >
            <span>
              <Badge color="success" className="badge-circle">
                New notifications
              </Badge>
              <Bell />
            </span>
          </Button>
          <UncontrolledPopover
            target="alertsPopover"
            trigger="legacy"
            className="popover-custom-wrapper popover-custom-sm"
            placement="auto"
            style={{ borderRadius: "20px", Overflow: "hidden" }}
          >
            <h6 className="font-size-md font-weight-bold m-3">Notifications</h6>

            <div className="divider mt-5 mb-4" />
            <div className="scroll-area scroll-area-lg shadow-overflow">
              <PerfectScrollbar
                options={{
                  wheelPropagation: false,
                }}
              >
                <div className="timeline-list timeline-list-offset timeline-list-offset-dot">
                  <div className="timeline-item">
                    <div className="timeline-item-offset">9:25</div>
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        1991
                      </h4>
                      <p>
                        The World Wide Web goes live with its first web page.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-item-offset">9:25</div>
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        Java exam day
                      </h4>
                      <p>
                        Bill Clinton's presidential scandal makes it online.
                      </p>
                      <div className="avatar-wrapper-overlap mt-2 mb-1">
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar1} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar2} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar6} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-item-offset">9:25</div>
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        Business investor meeting
                      </h4>
                      <p>
                        Mosaic, the first graphical browser, is introduced to
                        the average consumer.
                      </p>
                      <div className="mt-3">
                        <a href="#/" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-fluid rounded mr-3 shadow-sm"
                            src={people1}
                            width="70"
                          />
                        </a>
                        <a href="#/" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-fluid rounded shadow-sm"
                            src={people3}
                            width="70"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-item-offset">9:25</div>
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        Learning round table gathering
                      </h4>
                      <p>First ever iPod launches.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-item-offset">9:25</div>
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        2003
                      </h4>
                      <p>MySpace becomes the most popular social network.</p>
                    </div>
                  </div>
                </div>
              </PerfectScrollbar>
            </div>
          </UncontrolledPopover>
        </span>
        {/* <span className="d-inline-block pr-2">
          <Button
            id="settingsPopover"
            color="neutral-danger"
            className="bg-neutral-danger text-danger font-size-lg p-0 d-inline-block shadow-none border-0 text-center d-44 rounded position-relative"
          >
            <span>
              <Badge color="danger" className="badge-circle badge-header-alt">
                Online
              </Badge>
              <MessageCircle />
            </span>
          </Button>
          <UncontrolledPopover
            target="settingsPopover"
            trigger="legacy"
            className="popover-custom-wrapper popover-custom-lg"
            placement="auto"
          >
            <ul className="list-group list-group-flush text-left bg-transparent">
              <li className="list-group-item rounded-top">
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-md">
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar7} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="font-weight-bold d-block">
                      Emma Taylor
                    </span>
                    <small className="pb-0 text-black-50 d-block">
                      This is an accountant profile
                    </small>
                  </div>
                </div>
              </li>
              <li className="list-group-item bg-transparent py-2">
                <div className="align-box-row mb-1">
                  <div>
                    <small className="font-weight-bold">
                      Profile completion
                    </small>
                  </div>
                </div>
                <Progress
                  className="progress-bar-rounded progress-bar-sm progress-animated-alt"
                  color="success"
                  value="43"
                >
                  43%
                </Progress>
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <small className="ml-auto">100%</small>
                </div>
              </li>
            </ul>
            <div className="card-footer bg-white p-3 text-center d-block">
              <Button size="sm" color="dark" className="mr-1">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["far", "keyboard"]} />
                </span>
                <span className="btn-wrapper--label">Tasks</span>
              </Button>
              <Button
                size="sm"
                outline
                color="danger"
                className="ml-1"
                title="Sign out"
              >
                <FontAwesomeIcon icon={["fas", "sign-out-alt"]} />
              </Button>
            </div>
          </UncontrolledPopover>
        </span> */}
        {/* <span className="d-inline-block pr-2">
          <Button
            id="dotsMenuPopover"
            color="neutral-first"
            className="bg-neutral-first text-first font-size-lg p-0 d-inline-block shadow-none border-0 text-center d-44 rounded btn-transition-none"
          >
            <span>
              <BsFillGrid3X3GapFill size={25} />
            </span>
          </Button>
          <UncontrolledPopover
            target="dotsMenuPopover"
            trigger="legacy"
            popperClassName="popover-second shadow-lg"
            placement="auto"
            className="popover-custom-wrapper popover-custom-lg"
          >
            <div className="px-3 pt-3 pb-2 text-center">
              <div className="m-3 d-inline-block text-center">
                <Button
                  tag="a"
                  color="link"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="p-0 bg-ripe-malin d-inline-block btn-icon text-center text-white d-50 rounded border-0 mb-2"
                >
                  <FontAwesomeIcon
                    icon={["far", "gem"]}
                    className="font-size-xl"
                  />
                </Button>
                <div className="d-block text-white-50">Tasks</div>
              </div>
              <div className="m-3 d-inline-block text-center">
                <Button
                  tag="a"
                  color="link"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="p-0 bg-grow-early d-inline-block btn-icon text-center text-white d-50 rounded border-0 mb-2"
                >
                  <FontAwesomeIcon
                    icon={["far", "building"]}
                    className="font-size-xl"
                  />
                </Button>
                <div className="d-block text-white-50">Reports</div>
              </div>
              <div className="m-3 d-inline-block text-center">
                <Button
                  tag="a"
                  color="link"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="p-0 bg-arielle-smile d-inline-block btn-icon text-center text-white d-50 rounded border-0 mb-2"
                >
                  <FontAwesomeIcon
                    icon={["far", "chart-bar"]}
                    className="font-size-xl"
                  />
                </Button>
                <div className="d-block text-white-50">Stats</div>
              </div>
            </div>
            <div className="divider opacity-2 bg-white mb-1" />
            <div className="text-center">
              <Button
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                color="link"
                className="btn-link-light text-white"
              >
                View more items
              </Button>
            </div>
          </UncontrolledPopover>
        </span> */}
      </div>
    </>
  );
};

export default HeaderDots;
