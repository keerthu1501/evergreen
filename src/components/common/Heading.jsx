import React from "react";

export default function Heading({ heading}) {
  return (
    <>
      <div className="container-fluid page-header mb-5 p-0 bg-image">
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated customSlideInDown">
              {heading}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
