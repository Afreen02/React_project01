import React from 'react'

function Card({userName, text="Hey visit below link"}) {
    console.log(userName);
  return (
    <>
      <div className="row">
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="card">
        <img src="https://images.pexels.com/photos/18970638/pexels-photo-18970638/free-photo-of-river-flowing-through-a-narrow-ravine.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
        <div className="cover item-a">
          <h1>{userName}</h1>
          <span className="price">{text}</span>
          <div className="card-back">
            <a href="#">Add to cart</a>
            <a href="#">View detail</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Card