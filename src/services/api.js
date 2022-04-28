import axios from "axios"
import { Router } from "react-router-dom";

// ******  auth  ******** //
export const login = async (data) => {
    return await axios.post("/auth/signin", { credentials: data });
}
export const userLogin = async (data) => {
    return await axios.post("/auth/signin", { credentials: data });
}
export const googleLogin = async (data) => {
    return await axios.post("/auth/googlesignin", { credentials: data });
}
export const signup = async (data) => {
    return await axios.post("/auth/signup", data);
}

export const getCode = async (mail) => {
    return await axios.get("/auth/verify", {mail});
}

//****** user ******//
export const allUsers = async () => {
    return await axios.get(`/user/allusers`,
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const myAppliedJobs = async () => {
    return await axios.get(`/user/getappliedjobs`,
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const deleteAppliedJob = async (internId) => {
    return await axios.delete(`/user/deleteappliedjob/${internId}`,
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const userInfo = async () => {
    return await axios.get(`/user/getuser`,
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const userInfoById = async (id) => {
    return await axios.get(`/user/getuserbyid/${id}`);
}
export const acceptOffer = async (id) => {
    return await axios.put(`/user/acceptoffer/${id}`,
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const editUser = async (data) => {
    console.log(data);
    return await axios.put(`/user/edituser`, { credentials: data },
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const jobApply = async (data, internId) => {
    return await axios.post(`/user/jobapply/${internId}`, { credentials: data },
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const myProjects = async () => {
    return await axios.get(`/user/getprojects`,
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const myOffers = async () => {
    return await axios.get(`/user/getoffers`,
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const getRejectedIn = async () => {
    return await axios.get(`/user/getrejectedin`,
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const offerAccept = async (id) => {
    return await axios.put(`/user/acceptoffer`, { credentials: id },
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}

//******* interns *******//
export const allApplicants = async (id) => {
    return await axios.get(`/intern/getapplicants/${id}`);
}
export const AcceptedApplicants = async (id) => {
    return await axios.get(`/intern/useraccepted/${id}`);
}
export const RejectedApplicants = async (id) => {
    return await axios.get(`/intern/userrejected/${id}`);
}
export const allInterns = async () => {
    return await axios.get("/intern/allinterns");
}
export const getIntern = async (id) => {
    return await axios.get(`/intern/getintern/${id}`);
}
export const acceptApplicant = async (id, userId) => {
    return await axios.put(`/intern/acceptapplicant/${id}`, { credentials: userId });
}
export const rejectApplicant = async (id, userId) => {
    return await axios.put(`/intern/rejectapplicant/${id}`, { credentials: userId });
}
export const getInternByCategory = async (category) => {
    return await axios.get(`/intern/bycategory/${category}`);
}
export const getInternByIndustry = async (industry) => {
    return await axios.get(`/intern/byindustry/${industry}`);
}
export const searchIntern = async (keyword) => {
    return await axios.get(`/intern/search/${keyword}`);
}

//****** company ******//
export const companyInterns = async () => {
    return await axios.get(`/company/getinterns`,
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const postJob = async (data) => {
    return await axios.post(`/company/postjob`, { credentials: data },
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const editJob = async (id, data) => {
    return await axios.put(`/company/editjob/${id}`, { credentials: data },
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const getJob = async (id) => {
    return await axios.get(`/intern/getintern/${id}`,
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}

export const companyInfo = async () => {
    return await axios.get(`/company/getcompany`,
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const offerIntern = async (id) => {
    return await axios.put(`intern/acceptapplicant/${id}`,
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const editCompany = async (data, id) => {
    console.log(data);
    return await axios.put(`/company/editcompany/${id}`, { credentials: data },
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const userApplied = async (id) => {
    return await axios.get(`/intern/userapplied/${id}`,
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const userAccepted = async (id) => {
    return await axios.get(`/intern/useraccepted/${id}`,
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const userOnBoard = async (id) => {
    return await axios.get(`/intern/usersonboarded/${id}`,
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}


//****** resume ******//
export const PostResume = async (data) => {
    return await axios.post(`/resume/postresume`, { credentials: data },
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const getResume = async () => {
    return await axios.get(`/resume/getresume`,
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}
export const editResume = async (data) => {
    return await axios.put(`/resume/editresume`, { credentials: data },
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}

// Request 
export const saveHours = async (internId, value, date) => {
    console.log(internId, date, value);
    return await axios.put(`/request/savehours/${internId}`, {value, date },
        {
            headers: {
                token: localStorage.getItem("volintToken")
            }
        });
}

export const getUserRequest = async (internId, userId) => {
    return await axios.get(`/request/getrequest/${internId}/${userId}`);
}

export const getUserRequestByDate = async (internId, userId, date) => {
    console.log(internId, userId, date);
    return await axios.get(`/request/getrequest/date/${internId}/${userId}/${date}`);
}

export const acceptRequest = async (internId, userId, date) => {
    return await axios.put(`/request/acceptreq/${internId}`, { userId, date },
    )
}

export const rejectRequest = async (internId, userId, date) => {
    return await axios.put(`/request/rejectreq/${internId}`, { userId, date },
    )
}
