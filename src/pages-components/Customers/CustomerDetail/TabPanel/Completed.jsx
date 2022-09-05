import React, { useState, useEffect } from "react";
const Completed = ({ order, selectedData }) => {
  const [amount, setAmount] = useState();
  const [length, setLength] = useState();

  useEffect(() => {
    let amount = 0;
    let orderNumber = 0;
    order.forEach((order) => {
      if (order.is_completed) {
        amount = amount + order.price;
        orderNumber++;
      }
    });
    setAmount(amount);
    setLength(orderNumber);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="">
      <div className="pending-container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="17"
            viewBox="0 0 14 17"
          >
            <g
              id="Group_3145"
              data-name="Group 3145"
              transform="translate(-0.001 0)"
            >
              <g
                id="Rectangle_3030"
                data-name="Rectangle 3030"
                transform="translate(0.001 0)"
                fill="none"
                stroke="#1b127b"
                strokeWidth="1"
              >
                <rect width="14" height="17" rx="3" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="13"
                  height="16"
                  rx="2.5"
                  fill="none"
                />
              </g>
              <line
                id="Line_690"
                data-name="Line 690"
                x2="4.848"
                transform="translate(4.573 8.548)"
                fill="none"
                stroke="#1b127b"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <line
                id="Line_693"
                data-name="Line 693"
                x2="4.848"
                transform="translate(4.573 5.57)"
                fill="none"
                stroke="#1b127b"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <line
                id="Line_691"
                data-name="Line 691"
                x2="3.43"
                transform="translate(4.573 11.527)"
                fill="none"
                stroke="#1b127b"
                strokeLinecap="round"
                strokeWidth="1"
              />
            </g>
          </svg>
          <div className="ml-2">
            <p className="order">Completed orders</p>
            <p className="order orderAmount">{length}</p>
          </div>
        </div>
        <div className="d-flex flex-column align-items-end justify-content-flex-end">
          <p className="order">Total Amount Payable</p>
          <p className="order orderAmount">
            <span className="order">{order[0]?.isoCurrency} </span>
            {amount}
          </p>
        </div>
      </div>
      {order?.map((data, key) => {
        return (
          data.is_completed === true && (
            <div
              key={key}
              className="productContainer d-flex align-items-center justify-content-between"
              onClick={() => selectedData(data)}
            >
              <div className="d-flex align-items-center pl-1">
                {data.store.logo?.length > 0 && (
                  <div className="imageContainer d-flex align-items-center justify-content-center">
                    <img src={data.store.logo} alt="Deepak-Perwani" />
                  </div>
                )}
                <p className="name ml-2">{data.store.name}</p>
              </div>
              <div
                className="d-flex align-items-center"
                style={{ paddingRight: "10px" }}
              >
                <p className="price">
                  {data.isoCurrency} {data.price}
                </p>
                <svg
                  className="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6.105"
                  height="10.429"
                  viewBox="0 0 6.105 10.429"
                >
                  <path
                    id="Chevron"
                    d="M1.253,10.217l4.7-4.648a.5.5,0,0,0,0-.708L1.253.212a.741.741,0,0,0-1.038,0,.72.72,0,0,0,0,1.026L4.238,5.215.215,9.191a.721.721,0,0,0,0,1.026.741.741,0,0,0,1.038,0"
                    fill="#6801fe"
                  />
                </svg>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};
export default Completed;
