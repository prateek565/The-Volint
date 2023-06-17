import React, { Component } from 'react';

export class Error_405 extends Component {
    render() {
        
        return (
            <div className="site-main">

                <section className="error-pg text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="error-type row g-0">
                                    <h2 className="col">4</h2>
                                    <div className="col error-icon"><img className="img-fluid bounce" src="images/error-icon.png" alt="errr-icon" /></div>
                                    <h2 className="col">5</h2>
                                </div>
                                <header className="page-header"><h1 className="page-title">Oops!</h1></header>
                                <div className="page-content"><p>Page Not Found</p></div>
                                {/* <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill 
                                ttm-btn-color-skincolor" href={  '/'}>Go back Home page</a> */}
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}


export default Error_405;