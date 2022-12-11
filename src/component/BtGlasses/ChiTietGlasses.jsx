import React, { Component } from 'react'

export default class ChiTietGlasses extends Component {
  render() {
    const {name, price, desc} = this.props.glassesDetail;
    return (
        <div className="glassesInfo">
        <h5>{name}</h5>
        <p>
          <span>{price}</span> Stocking
        </p>
        <p>
         {desc}
        </p>
      </div>
    )
  }
}
