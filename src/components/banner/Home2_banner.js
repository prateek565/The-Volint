import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';


export class Banner extends Component {
    state = {
        show: false,
      }
      render() {
        var slick_slider = {
          dots: false,
          arrow: false,
          autoplay: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
  
          responsive: [{
  
            breakpoint: 1199,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
        {
      
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
        {
      
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
        };
               
        return (
                
            <Slider className="slick_slider banner_slider banner_slider_2" {...slick_slider} slidesToShow={1} autoplay={false} >
                <div className="slide">
                    <div className="slide_img" style={{ backgroundImage: '' }}></div>
                    <div className="slide__content">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="slide__content--headings ttm-textcolor-white text-center">
                            <h3  data-animation="animate__fadeInDown">Empowering, Inspiring, Rising.</h3>
                            <div className="d-flex align-items-center justify-content-center">
                                <h2  data-animation="animate__fadeInDown">Staffing & Job Consultancy</h2>
                            </div>
                            <div className="mt-20 mb-40 mb-md-15">
                                <div className="row">
                                <div className="col-xl-7 col-lg-8 col-md-10 mx-auto">
                                    <p  data-animation="animate__fadeInDown" className="d-none d-md-block">
                                    We have over 30 years experience of job consultancy in field of Financial, Marketing & Solutions expertise our goal is to give the best job solutions to the people
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div data-animation="animate__fadeInUp" data-delay="1.4">
                                <Link className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" 
                                to='/job_list'>Find the best Projects!</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Slider>
            
        )
    }
}

export default Banner;