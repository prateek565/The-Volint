import React, { Component } from "react";
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

            <Slider className="slick_slider banner_slider banner_slider_3" {...slick_slider} slidesToShow={1} autoplay={false} fade="true" >
                <div className="slide" style={{ background: 'gray' }}>
                    <div className="slide_img" style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) -50%, rgba(0, 0, 0, 0.55))` }}>
                    </div>
                    <div className="slide__content pb-50 pb-xl-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-8">
                                    <div className="slide__content--headings ttm-textcolor-white">
                                        <h2 className="animated animate__fadeInDown">A new <span className="text-theme-SkinColor fw-normal"> Experience </span></h2>
                                        <h2 className="animated animate__fadeInDown"> of Volunteering </h2>
                                        <div className="mt-20 mb-30 mb-md-15">
                                            <p className="animated animate__fadeInDown d-md-block">
                                                A platform to match volunteers with the opportunities.
                                            </p>
                                        </div>
                                        <br/><br/><br/><br/>
                                        <h4 style={{color: '#7510b0'}} className="animated animate__fadeInDown ">For every 1 hour of Volunteering, The Volint will donate 100 unit of grains to the needy people !</h4>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-none d-xl-block text-center position-relative">
                                        <div className="z-index-1 position-relative">
                                            <img style={{ height: '20rem', width: '20rem' }} className="rounded-circle box-shadow m-auto img-fuild" src="https://cdn.pixabay.com/photo/2017/02/10/12/12/volunteer-2055043__340.png"></img>
                                        </div>
                                        <div className="cmp-logo one">
                                            <img className="img-fluid" src="data:image/png;base64,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" />
                                        </div>
                                        <div className="cmp-logo two">
                                            <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRBsTKFL2kKR81paKoj-kFIX0-I1dZ_YTY4VqKTC-aaCWrbqc5uPl9vdHILJGGwu6yF0&usqp=CAU" />
                                        </div>
                                        <div className="cmp-logo three">
                                            <img className="img-fluid" src="https://www.wikihow.com/images/thumb/9/94/Volunteer-Step-10.jpg/v4-460px-Volunteer-Step-10.jpg.webp" />
                                        </div>
                                        <div className="cmp-logo four">
                                            <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6nZy64HxGs2CzYDFhPLSforOPh5wCwqCbzg&usqp=CAU" />
                                        </div>
                                        <div className="cmp-logo five">
                                            <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7eZ4i-tcM3hIvRrJaMIp0gHALBj9B4Ck_g&usqp=CAU" />
                                        </div>
                                        <div className="arrow-one">
                                            <img src="images/slides/arrow-1.png" />
                                        </div>
                                        <div className="arrow-two">
                                            <img src="images/slides/arrow-2.png" />
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