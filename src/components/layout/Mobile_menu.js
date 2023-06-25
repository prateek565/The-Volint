import React, { Component } from "react";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
  MDBHamburgerToggler } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-router-dom";


class Mobile_menu extends Component {

  status = localStorage.getItem("status");

  state = {
    collapse1: false,
    collapseID: ''
  }
  
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }
  
  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  }
  

  render() {
    
   let statu = localStorage.getItem("status");
   let token = localStorage.getItem("volintToken");

    return (

      <div>

        <MDBNavbar className="font-medium">
          <MDBHamburgerToggler id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
            <MDBCollapse isOpen={this.state.collapse1} navbar>
              <MDBNavbarNav left className="ml-10 pl-0.5 mb-0.5">
                <MDBNavItem className="pl-0.5 mt-2">
                  <Link className="ml-10 pl-0.5 pb-0.5" exact to={'/'}>Home</Link>
                </MDBNavItem>
                {token&&statu === "user" &&
                <MDBNavItem className="pl-0.5 mt-2">
                  <Link className="ml-10 pl-0.5 pb-0.5" exact to={'/applied_jobs'}  >Applications</Link>
                </MDBNavItem>}
                {token&&statu === "user" &&
                <MDBNavItem className="pl-0.5 mt-2">
                  <Link className="ml-10 pl-0.5 pb-0.5" exact to={'/edit_resume'}  >My Resumes</Link>
                </MDBNavItem>}
                {token&&statu === "user" &&
                <MDBNavItem className="pl-0.5 mt-2">
                  <Link className="ml-10 pl-0.5 pb-0.5" exact to={'/user/projects'}  >Projects</Link>
                </MDBNavItem>}

                {statu!=='user' && 
                <MDBNavItem className="pl-0.5 mt-2">
                  <Link className="ml-10 pl-0.5 pb-0.5" exact to={token?'/post_job':'/login'}>Post Job</Link>
                </MDBNavItem>}
                {!statu &&
                <MDBNavItem className="mt-2">
                      <Link className="ml-10 pl-0.5 pb-0.5" exact to={'/login'}>Login</Link><span> / </span><a className="ml-10 pl-0.5 pb-0.5" href={'/signup'}>Signin</a>
                </MDBNavItem> }
                {this.status==="user" && <MDBNavItem className="mt-2 mb-2">
                  <MDBDropdown exact to={'/jobs_list'}>
                   <Link className="ml-10 pl-0.5 pb-1" exact to={'/job_list'}>Opportunities</Link>
                  </MDBDropdown>
                </MDBNavItem>}
                { this.status === "company" && <MDBNavItem className="mt-2">
                <Link className="ml-10 pl-0.5 pb-1 mb-4" exact to={'/candidate_list'}>Volunteer/Intern</Link>
                </MDBNavItem>}
              </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

export default Mobile_menu;