import React from "react";
import './index.css'

const TopCategory = ({image}) => {
  return (
    <div className='col-4 col-sm-2 mx-3'>
      <div className="row d-flex justify-content-center featured">
        <img src={image} className="img-fluid featured-img" />
      </div>
      <div className="text-center featured-head">Cantilever chair</div>
      <div className="text-center featured-para">
      $26.00
      </div>
    </div>
  );
};

export default TopCategory;
