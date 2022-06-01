import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { Component } from "react";
import Slider from "react-slick";
import Card1 from './card1';
import Card2 from './card2';
import Card3 from './card3';
import Card4 from './card4';
import Card5 from './card5';
import './slider.css';

export default class CardSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
    console.log(this.slider)
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings} >
          <div key={1} className="card__div">
             <Card1/>
          </div>
          <div key={2} className="card__div">
            <Card2/>
          </div>
          <div key={3} className="card__div">
            <Card3/>
          </div>
          <div key={4} className="card__div">
            <Card4/>
          </div>
          <div key={5} className="card__div">
            <Card5/>
          </div> 
        </Slider>
        <div style={{ textAlign: "center", margin:"20px"}}>
          <button className="button__previous" onClick={this.previous}>
            <ArrowBackIosNewIcon className='previous' />
          </button>
          <button className="button__next" onClick={this.next}>
            <ArrowForwardIosIcon className='next'/>
          </button>
        </div>
      </div>
    );
  }
}