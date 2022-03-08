import React, { Component, useEffect, useState } from 'react';
import { getInternByIndustry } from '../../../services/api';

const Industry = ({industry}) => {

    const [jobs, setjobs] = useState([])
    useEffect(() => {
        Promise.resolve(getInternByIndustry(industry)).then((res)=>{
            setjobs(res.data)
        }).catch((e)=>{
            console.log({e});
        })
    }, [])


    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            {/* featured-icon-box */}
            <div className="featured-icon-box icon-align-top-content style1"  style={{backgroundColor: '#df9ef7'}}>
                <div className="ttm-box-view-overlay">
                    {/* finance-hover */}
                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" style={{ backgroundImage: 'url(https://via.placeholder.com/600x600?text=600x600+finance-hover.png)' }}></div>
                        <div className="layer-content"></div>
                    </div>{/* finance-hover end */}
                </div>
                <div className="featured-icon">
                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                        <img className="img-fluid" src="images/cat-icon1.png" />
                    </div>
                </div>
                <div className="featured-content">
                    <div className="featured-title">
                        <h3>{industry}</h3>
                    </div>
                    <div className="featured-desc">
                        <p>{jobs?.length} Jobs</p>
                    </div>
                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark"
                        href={`/jobs_by_filter/ind=${industry}`}>Apply Jobs!</a>
                </div>
            </div>{/* featured-icon-box end */}
        </div>
    )
}

export default Industry;