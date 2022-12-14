import React from "react";

import { CardBody, Card, CardHeader } from "reactstrap";

const ExampleWrapperSimple = (props) => {
  const { sectionHeading, children, height } = props;

  return (
    <Card className="card-box mb-5">
      {sectionHeading && (
        <CardHeader>
          <div className="card-header--title font-size-md font-weight-bold py-2">
            {sectionHeading}
          </div>
        </CardHeader>
      )}
      <CardBody style={{ height: height }}>{children}</CardBody>
    </Card>
  );
};

export default ExampleWrapperSimple;
