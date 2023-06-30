import React, { useEffect, useState } from 'react'
import { getResume } from '../../../services/api';
import EditResume from './editResume';
import PageHeader from '../../../components/layout/PageHeader';
import Header from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';

const Resume = () => {

    const [allResumesData, setallResumesData] = useState();
    useEffect(() => {
        Promise.resolve(getResume()).then((res) => {
            console.log(res.data);
            setallResumesData(res.data)
        }).catch((e) => {
            console.log({ e });
        })
    }, [])

    return (
        <div>
            <Header />
            <PageHeader
                title="My Resume"
                breadcrumb="My Resume"
            />
            {allResumesData?.map((data, i) => (
                <>
                <EditResume data={data} i={i}/>
                <br/>
                <hr/>
                <br/>
                </>
            ))}
            <Footer />
        </div>
    )
}

export default Resume