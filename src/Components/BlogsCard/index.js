import React from "react";
import './index.css'

const BlogsCard = ({image}) => {
  return (
    <div className='col-6 col-sm-3 mx-3'>
      <div className="row d-flex justify-content-center featured">
        <img src={image} className="img-fluid featured-img" />
      </div>
      <div className="text-center featured-head my-3">Top esssential Trends in 2022</div>
      <div className="text-center featured-para my-3">
      More off this less hello samlande lied much
over tightly circa horse taped mightly
      <br />
      </div>
    </div>
  );
};

export default BlogsCard;
