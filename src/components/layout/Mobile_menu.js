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

    return (

      <div>

        <MDBNavbar className="font-medium">
          <MDBHamburgerToggler id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
            <MDBCollapse isOpen={this.state.collapse1} navbar>
              <MDBNavbarNav left className="ml-10 pl-0.5 mb-0.5">
                <MDBNavItem className="pl-0.5 mb-3 mt-3">
                  <Link className="ml-10 pl-0.5 pb-0.5" exact to={'/'}>Home</Link>
                    {/* <MDBDropdown>
                      <a href={'/'}></a>Home
                      <MDBDropdownToggle nav caret>Home</MDBDropdownToggle>
                      <MDBDropdownMenu>
                          <MDBDropdownItem href={process.env.PUBLIC_URL + '/'}>Homepage 1</MDBDropdownItem>
                          <MDBDropdownItem href={process.env.PUBLIC_URL + '/Home2'}>Homepage 2</MDBDropdownItem>
                          <MDBDropdownItem href={process.env.PUBLIC_URL + '/Home3'}>Homepage 3</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown> */}
                </MDBNavItem>
                <MDBNavItem className="mb-3">
                      <Link className="ml-10 pl-0.5 pb-0.5" exact to={'/login'}>Login</Link><span> / </span><a className="ml-10 pl-0.5 pb-0.5" href={'/signup'}>Signin</a>
                      

                </MDBNavItem> 
                {this.status==="user" && <MDBNavItem className="mb-3">
                  <MDBDropdown exact to={'/jobs_list'}>
                   <Link className="ml-10 pl-0.5 pb-1" exact to={'/job_list'}>Opportunities</Link>
                     
                  </MDBDropdown>
                </MDBNavItem>}
                { this.status === "company" && <MDBNavItem className="mb-4">
                <Link className="ml-10 pl-0.5 pb-1 mb-4" exact to={'/candidate_list'}>Volunteer/Intern</Link>
                    {/* <MDBDropdown>
                      <MDBDropdownToggle nav caret>Employers</MDBDropdownToggle>
                      <MDBDropdownMenu>
                          <MDBDropdownItem href={process.env.PUBLIC_URL + '/employers_list'}>Employers List</MDBDropdownItem>
                          <MDBDropdownItem href={process.env.PUBLIC_URL + '/employers_details'}>Employers Details</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown> */}
                </MDBNavItem>}
                {/* <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>Candidates</MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href={process.env.PUBLIC_URL + '/candidate_list'}>Candidate List</MDBDropdownItem>
                        <MDBDropdownItem href={process.env.PUBLIC_URL + '/candidate_details'}>Candidate Details</MDBDropdownItem>
                    </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>Blog</MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href={process.env.PUBLIC_URL + '/blog_classic'}>Blog Classic</MDBDropdownItem>
                        <MDBDropdownItem href={process.env.PUBLIC_URL + '/blog_grid'}>Blog Grid</MDBDropdownItem>
                        <MDBDropdownItem href={process.env.PUBLIC_URL + '/blog_details'}>Blog Details</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem> */}
              </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

export default Mobile_menu;