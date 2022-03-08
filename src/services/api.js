import axios from "axios"
import { Router } from "react-router-dom";

// ******  auth  ******** //
export const login=async (data)=>{
    return await axios.post("/auth/signin",{credentials:  data});
}
export const userLogin=async (data)=>{
    return await axios.post("/auth/signin",{credentials:  data});
}
export const googleLogin=async (data)=>{
    return await axios.post("/auth/googlesignin",{credentials:  data});
}
export const signup=async (data)=>{
    return await axios.post("/auth/signup",data);
}

//****** user ******//
export const allUsers=async ()=>{
    return await axios.get(`/user/allusers`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const myAppliedJobs=async ()=>{
    return await axios.get(`/user/getappliedjobs`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const deleteAppliedJob=async (internId)=>{
    return await axios.delete(`/user/deleteappliedjob/${internId}`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const userInfo=async ()=>{
    return await axios.get(`/user/getuser`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const acceptOffer=async (id)=>{
    return await axios.put(`/user/acceptoffer/${id}`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const editUser=async (data)=>{
    console.log(data);
    return await axios.put(`/user/edituser`, {credentials: data}, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const jobApply=async (data, internId)=>{
    return await axios.post(`/user/jobapply/${internId}`, {credentials: data}, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const myProjects=async ()=>{
    return await axios.get(`/user/getprojects`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const myOffers=async ()=>{
    return await axios.get(`/user/getoffers`,
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const offerAccept=async (id)=>{
    return await axios.put(`/user/acceptoffer`, {credentials: id}, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}

//******* interns *******//
export const allApplicants=async (id)=>{
    return await axios.get(`/intern/getapplicants/${id}`);
}
export const allInterns=async (data)=>{
    return await axios.get("/intern/allinterns");
}
export const getIntern=async (id)=>{
    return await axios.get(`/intern/getintern/${id}`);
}
export const acceptApplicant=async (id,userId)=>{
    return await axios.put(`/intern/acceptapplicant/${id}`, {credentials: userId});
}
export const rejectApplicant=async (id)=>{
    console.log(id);
    return await axios.put(`/intern/rejectapplicant/${id}`);
}
export const getInternByCategory=async (category)=>{
    return await axios.get(`/intern/bycategory/${category}`);
}
export const getInternByIndustry=async (industry)=>{
    return await axios.get(`/intern/byindustry/${industry}`);
}
export const searchIntern=async (keyword)=>{
    return await axios.get(`/intern/search/${keyword}`);
}

//****** company ******//
export const companyInterns=async ()=>{
    return await axios.get(`/company/getinterns`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const postJob=async (data)=>{
    return await axios.post(`/company/postjob`,{credentials: data}, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const editJob=async (id, data)=>{
    return await axios.put(`/company/editjob/${id}`,{credentials: data}, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const getJob=async (id)=>{
    return await axios.get(`/intern/getintern/${id}`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}

export const companyInfo=async ()=>{
    return await axios.get(`/company/getcompany`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const offerIntern=async (id)=>{
    return await axios.put(`intern/acceptapplicant/${id}`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const editCompany=async (data, id)=>{
    return await axios.put(`/company/editcompany/${id}`, {credentials: data}, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const userApplied = async (id)=>{
    return await axios.get(`/intern/userapplied/${id}`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const userAccepted = async (id)=>{
    return await axios.get(`/intern/useraccepted/${id}`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const userOnBoard = async (id)=>{
    return await axios.get(`/intern/useronboard/${id}`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}


//****** resume ******//
export const PostResume=async (data)=>{
    return await axios.post(`/resume/postresume`,{credentials: data},
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const getResume=async ()=>{
    return await axios.get(`/resume/getresume`, 
    {
        headers:{ 
            token: localStorage.getItem("token")
        }
    });
}
export const editResume=async (data)=>{
    return await axios.put(`/resume/editresume`, {credentials:data},
    {
        headers:{ 
            token: localStorage.getItem("token") 
        }
    });
}
