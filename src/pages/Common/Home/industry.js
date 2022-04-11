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
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', textAlign:'center'}}>
            <img className='rounded-circle border border-dark' src={industry.image} alt='image' style={{ height: '3rem', width: '4rem'}} />
            <p style={{width:'10rem'}}>{industry.name} <span style={{ color: 'black', fontSize: 'medium' }}> ({jobs?.length})</span></p>
        </div>
    )
}

export default Industry;