import React from 'react';

const Rating = (props) => {
    const rating = props.rating;
    if(rating===5){
        return (<span className="text-yellow-500"><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i></span>);
      }
      else if(rating>=4 && rating<5){
        return (<span className="text-yellow-500"><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star-half-alt"></i></span>);
      }
      else if(rating>=3 && rating<4){
        return (<span className="text-yellow-500"><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star-half-alt"></i> <i className="far fa-star"></i></span>);
      }
      else if(rating>=2 && rating<3){
        return (<span className="text-yellow-500"><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star-half-alt"></i> <i className="far fa-star"></i> <i className="far fa-star"></i></span>);
      }
      else if(rating>=1 && rating<2){
        return (<span className="text-yellow-500"><i className="fas fa-star"></i> <i className="fas fa-star-half-alt"></i> <i className="far fa-star"></i> <i className="far fa-star"></i> <i className="far fa-star"></i></span>);
      }
      else{
        return (<span className="text-yellow-500"><i className="fas fa-star-half-alt"></i> <i className="far fa-star"></i> <i className="far fa-star"></i> <i className="far fa-star"></i> <i className="far fa-star"></i></span>);
      }
};

export default Rating;