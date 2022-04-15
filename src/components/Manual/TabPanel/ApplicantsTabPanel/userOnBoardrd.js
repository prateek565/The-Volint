import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link, useLocation } from 'react-router-dom';
import { acceptApplicant, AcceptedApplicants, acceptRequest, allApplicants, getIntern, getUserRequest, rejectApplicant, RejectedApplicants, userOnBoard } from '../../../../services/api';
import TemporaryDrawer from '../../../../pages/Common/Message';
import { Alerterror, Alertsuccess } from '../../../layout/Alerts';

export default function UsersOnBoarded({ user }) {

    const [onBoarded, setonBoarded] = React.useState([])
    const [toggle, settoggle] = React.useState(false)
    const [error, setError] = useState(false);
    const [text, setText] = useState("");
    const [success, setSuccess] = useState(false);

    const location = useLocation();
    let id = location.pathname;
    id = id.split('/id=')[1];
    console.log(id);

    useEffect(() => {
        Promise.resolve(getUserRequest(id, user._id)).then((res) => {
            console.log(res.data);
            setonBoarded(res.data)
        }).catch((e) => {
            console.log({ e });
        })
    }, [toggle,])

    const handleAccept = () => {
        Promise.resolve(acceptRequest(id, user?._id, onBoarded?.date)).then((res) => {
            console.log(res.data);
            settoggle(!toggle);
            setText(res.data)
            setSuccess(true);
        }).catch((e) => {
            console.log({ e });
            setText()
            setError(true);
        })
        setTimeout(() => {
            setError(false);
            setSuccess(false)
            setText("");
        }, 5000);
        
    }

    const handleReject = () => {
        Promise.resolve(rejectApplicant(id, user?._id, onBoarded?.date)).then((res) => {
            settoggle(!toggle);
            setText(res.data)
            setSuccess(true);
            console.log(res.data);
        }).catch((e) => {
            console.log({ e });
            setText()
            setError(true);
        })
        setTimeout(() => {
            setError(false);
            setSuccess(false)
            setText("");
        }, 5000);
        
    }

    return (
        <>
            <div className="featured-imagebox featured-imagebox-candidate" style={{ backgroundColor: 'rgb(236, 215, 255)' }}>
                <div className="featured-thumbnail">
                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" />
                </div>
                <div className="featured-content">
                    <div className="featured-title">
                        <Link to={`/candidate_details/${user._id}`}><h3>{(user) && user.name}</h3></Link>
                    </div>
                    <div className="featured-bottom">
                        <div className="job-skill">
                            {user?.skills?.map(skill => (
                                <span className="skill-tag">{skill}</span>
                            ))}
                        </div>
                        <div className="view-block">
                            <TemporaryDrawer name={user?.name} key={user?._id} id={user?._id} />
                        </div>
                        <div>
                            <p>Pending Requests</p><hr />
                            {success&&<Alertsuccess text={text}/>}
                            {error&&<Alerterror text={text}/>}
                            <p>Date : {onBoarded?.date}</p>
                            <p>No. of hours : {onBoarded?.value}</p>
                            <div className='d-flex'>
                                {onBoarded?.approved === 'pending' && <>
                                    <button onClick={handleAccept} className="bg-success p-5 rounded text-white mr-10">Accept</button>
                                    <button onClick={handleReject} className="bg-danger p-5 rounded text-white">Reject</button>
                                </>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
