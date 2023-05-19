import React from "react";

function Card({v}) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 p-2">
      <div className="card">
        <img src={v?.values?.productUrl} />
        <hr />
        <div className="px-2 text-secondary">
          <div className="d-flex justify-content-between">
            <p className="mb-0">{v?.values?.name}</p>
            <p className="mb-0">
              &#11088; Rating <b>{v?.values?.rating}</b>
            </p>
          </div>
          <p className="mb-0">{v?.values?.description}</p>
          <div className="d-flex">
            <p className="mb-0">
              <b>Price : </b>
              <button className="btn btn-sm btn-outline-success mx-2">
                {v?.values?.price} &#8377;
              </button>
            </p>
            <p>
              <button className="btn btn-sm btn-outline-warning ml-1">
                Add To Card
              </button>
            </p>
            <p>
              <button className="btn btn-sm btn-outline-success ms-2">
                Order Now
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
