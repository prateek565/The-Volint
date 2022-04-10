import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FcCheckmark } from 'react-icons/fc';
import { ImCross } from 'react-icons/im';
import { BsExclamationLg } from 'react-icons/bs';
import { saveHours, userInfo } from '../../../services/api';
import { TextField } from '@material-ui/core';
import { Alerterror } from '../../../components/layout/Alerts';

const Card = ({ intern }) => {

    const [date, setDate] = useState('');
    const [hours, sethours] = useState(0);
    const [hoursProjects, sethoursProjects] = useState()
    const [approval, setapproval] = useState(2);
    const [error, seterror] = useState(false);
    const [text, settext] = useState('');

    useEffect(() => {
      Promise.resolve(userInfo()).then((res)=>{
        // console.log(res.data);
        sethoursProjects(res.data.hoursPerDay)
      })
    }, [])
    
    const handleSave = () => {
        Promise.resolve(saveHours(intern._id, hours, date)).then((res) => {
            console.log(res)
        }).catch(e => {
            console.log({e})
            seterror(true);
            settext(e.response.data)
        })
        setTimeout(() => {
            seterror(false);
        }, 5000);
    }
    const handleDate = (e) => {
        setDate(e.target.value)
        setapproval(2)
        hoursProjects?.map(data=>{
            if(data.date===e.target.value){
                console.log(data);
                if(data.approved===1){
                    setapproval(1)
                }
                else if(data.approved===0){
                    setapproval(0)
                }
                else if(data.approved===-1){
                    setapproval(-1)
                }
            }
        })
    }
    return (
        <div className="flex featured-imagebox featured-imagebox-job" style={{ backgroundColor: 'rgb(236, 215, 255)' }}>
            <div className="featured-content">
                <div className="featured-title">
                    <h3><Link to={`/job_details/${intern._id}`}>{intern.title ? intern.title : "_"}</Link></h3>
                </div>
                <div className="featured-desc">
                    <p>{intern.duration}</p>
                    <p>Started from: </p>
                    <p>{intern.description}</p>
                    {error&&<Alerterror text={text}/>}
                    <p className='pt-20' style={{borderTop: '0.5px solid white' }}>Provide details of your working hours :-</p>
                    <div className='flex' style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <p>Choose day : </p>
                        <div className='mb-10'>
                            <input type='date' value={date} onChange={handleDate}/>
                        </div>
                    </div>
                    {date!=='' && <div className='flex' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <p>No. of hours you worked on {date} : </p>
                        <TextField id="outlined-basic" value={hours} type='number' variant="outlined" onChange={(e) => sethours(e.target.value)} />
                        <button type="button" class="btn btn-success" style={{ padding: '10px', boxShadow: 'none' }} onClick={handleSave}>Save</button>
                        {approval===1&&<div className='d-flex align-items-center'> <FcCheckmark size={'1.5rem'} /> <p className='text-success ml-10'>Approved</p> </div>}
                        {approval===-1&&<div className='d-flex align-items-center'> <ImCross color='red' size={'1rem'} /> <p className='text-danger ml-10'>Approval Declined, Update required</p> </div>}
                        {approval===0&&<div className='d-flex align-items-center'> <BsExclamationLg color='orange' size={'1rem'} /> <p className='ml-10' style={{ color: 'orange' }}>Approval pending</p> </div>}
                    </div>}
                </div>
                <div className="featured-bottom">
                    <div className="job-meta">
                        <span><i className="fa fa-map-marker-alt"></i>{intern.location}</span>
                    </div>
                    {intern?.type && <div className="job-time">
                        <span className="green">{intern.type}</span>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Card