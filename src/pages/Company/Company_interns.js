import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { companyInterns } from '../../services/api';

const Company_interns = () => {

    const [AllInterns, setallInterns] = useState([]);
    useEffect(() => {
        const id = localStorage.getItem("id");
        
        Promise.resolve(companyInterns(id)).then((res) => {
            console.log(res.data.intern);
            setallInterns(res.data.intern)
        }).catch((e) => {
            console.log(e);
        })
    }, []);

    return (
        <div>
            {console.log(AllInterns)}
            {AllInterns?.map((intern)=>(
                <>
                <div>{intern?.duration}</div>
                <Link to={`/candidate_list/${intern?._id}`}>Show All Applicants</Link>
                </>
            ))}
        </div>
    )
};

export default Company_interns;
