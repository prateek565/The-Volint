import React from 'react';
import { Link} from 'react-router-dom';


const HeaderMenu = () => {

    let status = localStorage.getItem("status");
    {
        return (
            <div>
                <nav style={{ fontWeight: 400 }} className="main-menu text-theme-SkinColor">
                    {status === "user" && <Link className="alert-heading ml-40" exact to={'/job_list'}  >Opportunities</Link>}
                    {status === "user" && <Link className="alert-heading ml-40" exact to={'/applied_jobs'}  >Applications</Link>}
                    {status === "user" && <Link className="alert-heading ml-40" exact to={'/edit_resume'}  >My Resumes</Link>}
                    {<Link className="alert-heading ml-40" exact to={'/projects'}  >Projects</Link>}
                    {status === "company" && <Link exact to={'/candidate_list'} className="alert-heading ml-40">Volunteers</Link>}
                    {status === "company" && <Link exact to={'/post_job'} className="alert-heading ml-40">Post Job</Link>}
                    {status === "company" && <a href={'/posted_jobs'} className="alert-heading ml-40">Posted Jobs</a>}
                </nav>
            </div>
        )

    }
}

export default HeaderMenu;