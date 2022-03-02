import React, { Component } from 'react'
import dataGlasses from './data/dataGlasses.json'
export default class BaiTapState extends Component {

  state = {
    glass: {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  }
  renderKinh = () => {
    return dataGlasses.map((glass, index) => {
      return (
        <div key={index} className="col-2">
          <img className="w-100 py-4" src={glass.url} alt="" style={{ cursor: 'pointer' }} onClick={() => { this.ganKinh(glass) }} />
        </div>
      )
    })
  }
  ganKinh = (glassNew) => {
    this.setState({
      glass: glassNew
    })
  }
  render() {
    let { glass } = this.state;
    let animationGlass = `@keyframes ganKinh${Date.now()} {
      from{
          width: 0;
          transform: rotate(45deg);
          opacity: 0;
      }
      to{
          width: 150px;
          transform: rotate(0deg);
          opacity: 0.8;

      }`
    let animationText = `@keyframes mymove${Date.now()} {
      0%{
          transform: translateX(-50px);
          opacity: 0.5;
      }
      100%{
          transform: translateX(0px);
          opacity: 1;
      }
    }`
    return (
      <div className="" style={{
        backgroundImage: 'url("./glassesImage/background.jpg")',
        backgroundSize: 'cover',
        minHeight: '1000px'
      }}>
        <style>
          {animationGlass}
        </style>
        <style>
          {animationText}
        </style>
        <div className="overlay" style={{
          backgroundColor: 'rgba(0, 0, 0,0.2)',
          minHeight: '1000px'
        }}>
          <h3 className="text-white text-center py-3" style={{ backgroundColor: 'rgba(0, 0, 0,0.5)' }}>TRY GLASSES APP ONLINE</h3>
          <div className="container">
            <div className="row">
              <div className="col-6 d-flex justify-content-center" style={{ position: 'relative' }}>
                <img className="w-50 " src="./glassesImage/model.jpg" alt="" />
                <img className="glass-img" src={glass.url} alt="" style={{
                  position: 'absolute',
                  top: '86px',
                  left: '208px',
                  width: '150px',
                  opacity: 0.8,
                  width:'150px',
                  animation: `ganKinh${Date.now()} 2s`,
                }} />
                <div className="content" style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '150px',
                  width: '270px',
                  background: 'rgba(255,99,71,0.5)',
                  padding: '0 10px',
                  overflow: 'hidden',
                }}>
                  <h4 className="text-primary glass-name" style={{
                    animation: `mymove${Date.now()} 1s linear`,
                    transform: 'translateX(0px)',
                  }}>{glass.name} </h4>
                  <h5 className="text-success glass-price" style={{
                    animation: `mymove${Date.now()} 1s linear`,
                    transform: 'translateX(0px)',
                  }}>{glass.price}$</h5>
                  <p className="text-white glass-desc" style={{
                    animation: `mymove${Date.now()} 1s linear`,
                    transform: 'translateX(0px)',
                  }}>{glass.desc}</p>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-center">
                <img className="w-50 display-flex justify-content-center" src="./glassesImage/model.jpg" alt="" />
              </div>
              <div className="col-12 my-5" style={{ backgroundColor: "white" }}>
                <div className="row">
                  {this.renderKinh()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
