import React, { Component } from "react";

import data from "../../data/dataGlasses.json";
import ChiTietGlasses from "./ChiTietGlasses";
import "./Glasses.css";

export default class BtGlasses extends Component {
  state = {
    imgUrl: "./glassesImage/v1.png",
    glassesDetail: data[0],
  };

  handleGlasses = (id, glasses) => {
    this.setState({
      imgUrl: `./glassesImage/v${id}.png`,
      glassesDetail: glasses,
    });
  };

  renderGlasses = () => {
    return data.map((element) => {
      return (
        <div key={element.id} className="col-2">
          <img
            onClick={() => {
              this.handleGlasses(element.id, element);
            }}
            src={element.url}
            alt="#"
            className="img-fluid"
          />
        </div>
      );
    });
  };

  render() {
    return (
      <>
        <header
          style={{ fontSize: "30px", fontWeight: "700" }}
          className="text-center"
        >
          BtGlasses
        </header>
        <div className="container py-3">
          <div className="row d-flex justify-content-center">
            <div className="card col-6">
              <img
                className="model img-fluid"
                src="./glassesImage/model.jpg"
                alt="#"
              />
              <img
                style={{
                  position: "absolute",
                  top: "165px",
                  width: "304px",
                  right: "133px",
                }}
                className="img-fluid"
                src={this.state.imgUrl}
                alt="#"
              />
              <ChiTietGlasses glassesDetail={this.state.glassesDetail} />
            </div>
          </div>
        </div>

        <div className="container pb-5">
          <div className=" row border border-secondary py-3">
            {this.renderGlasses()}
          </div>
        </div>
      </>
    );
  }
}
