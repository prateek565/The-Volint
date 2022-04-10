import React, { Component, useEffect, useState } from 'react';
import { getInternByIndustry } from '../../../services/api';

const Industry = ({ industry }) => {

    const [jobs, setjobs] = useState([])
    useEffect(() => {
        Promise.resolve(getInternByIndustry(industry)).then((res) => {
            setjobs(res.data)
        }).catch((e) => {
            console.log({ e });
        })
    }, [])


    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
            <img src='https://i.pinimg.com/736x/ad/a9/4f/ada94fd3c04698705ff337362e79a058.jpg' alt='image' style={{ height: '3rem', width: '3rem'}} />
            <p style={{width:'10rem'}}>{industry} <span style={{ color: 'black', fontSize: 'medium' }}> ({jobs?.length})</span></p>
        </div>
    )
}

export default Industry;