import React, { Component, useState } from 'react'
import Mobile_menu from './Mobile_menu';
import Logo from './Logo'
import Header_search from './Header_search'
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Divider, IconButton, ListItemIcon, MenuItem, Tooltip, Menu, Badge } from '@material-ui/core';
import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import HeaderMenu from './HeaderMenu';
import { styled, alpha } from '@mui/material/styles';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    backgroundColor: 'rgb(236, 215, 255)',
    color:
      theme.palette.mode === 'dark' ? 'rgb(55, 65, 81)' : 'black',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: 'pink',
        // alpha(
        //   theme.palette.primary.main,
        //   theme.palette.action.selectedOpacity,
        // ),
      },
    },
  },
}));
const styles = theme => ({
  menuPaper: {
    backgroundColor: 'black',
  }
});
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const Header = () => {
  const history = useHistory();
  const classes = styles();
  const componentDidMount = () => {
    window.addEventListener('scroll', this.isSticky);
  }

  const componentWillUnmount = () => {
    window.removeEventListener('scroll', this.isSticky);
  }

  const isSticky = (e) => {
    const header = document.querySelector('header');
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? header.classList.add('is-Sticky') : header.classList.remove('is-Sticky');
  };

  const token = localStorage.getItem("token")
  // const token = null;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let status = localStorage.getItem("status");
  return (

    <header id="masthead" className="header ttm-header-style-03">
      {/* topbar */}
      <div className="top_bar bg-theme-GreyColor clearfix">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="d-flex align-items-center">
                <div className="d-flex">
                  <div className="top_bar_contact_item">
                    <div className="top_bar_icon">
                      <i className="flaticon flaticon-phone-call"></i>
                    </div>
                    <span><a href="tel:+(470) 795-1189">+(470) 795-1189</a></span>
                  </div>
                  <div className="top_bar_contact_item">
                    <div className="top_bar_icon">
                      <i className="flaticon flaticon-email"></i>
                    </div>
                    <span><a href="mailto:thevolint@gmail.com">thevolint@gmail.com</a></span>
                  </div>
                </div>
                <div className="ttm-bg ttm-col-bgcolor-yes ttm-right-span bg-theme-GreyColor pl-20 ms-auto">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-GreyColor"></div>
                  <div className="layer-content">
                    <div className="media-block">
                      <ul className="social-icons">
                        <li>
                          <a className="facebook" href="/" rel="noopener" aria-label="facebook">
                            <i className="ti ti-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="/" rel="noopener" aria-label="twitter">
                            <i className="ti ti-twitter-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a className="google" href="/" rel="noopener" aria-label="google">
                            <i className="ti ti-google"></i>
                          </a>
                        </li>
                        <li>
                          <a className="linkedin" href="/" rel="noopener" aria-label="linkedin">
                            <i className="ti ti-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* topbar end */}
      {/* site-header-menu */}
      <div id="site-header-menu" className="site-header-menu border-top">
        <div className="site-header-menu-inner ttm-stickable-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* site-navigation */}
                <div className="site-navigation d-flex align-items-center justify-content-between">
                  {/* site-branding */}
                  <div className="site-branding">
                    <Logo />
                  </div>
                  {/* site-branding end */}
                  <div className="border-box-block ms-auto mr-20">
                    <div className=" d-flex align-items-center justify-content-between">
                      {/* menu */}
                      <HeaderMenu />
                      <div className="mobile-menu"><Mobile_menu /></div>
                      {/* menu end */}
                    </div>
                  </div>
                  <div className="header_btn">
                    {/* <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border
                                            ttm-icon-btn-left ttm-btn-color-grey text-theme-DarkColor d-flex align-items-center"> */}
                    {(!token) ?
                      <div className="view-block ttm-btn-color-dark ttm-btn-style-border" style={{ padding: '0.75rem', backgroundColor: 'transparent' }}>
                        <i className="far fa-user fa-sm text-theme-SkinColor pr-5"></i><Link exact to={'/signup'}>Sign Up </Link>
                        <i className="ti ti-lock fa-sm text-theme-SkinColor pr-5 pl-20"></i><Link exact to={'/login'}>Login </Link>
                      </div>

                      :

                      <React.Fragment>
                        <Tooltip title="Account settings">

                          <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                          >
                            <StyledBadge
                              overlap="circular"
                              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                              variant="dot"
                            >
                              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </StyledBadge>
                          </IconButton>
                        </Tooltip>
                        <StyledMenu
                          anchorEl={anchorEl}
                          id="account-menu"
                          open={open}
                          onClose={handleClose}
                          onClick={handleClose}
                          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                          {status === "user" && <Link exact to={'/profile'}>
                            <MenuItem>
                              <ListItemIcon>
                                <Avatar />
                              </ListItemIcon>
                              Profile
                            </MenuItem>
                          </Link>}
                          {status === "company" && <Link exact to={'/company_profile'}>
                            <MenuItem>
                              <ListItemIcon>
                                <Avatar />
                              </ListItemIcon>
                              Profile
                            </MenuItem>
                          </Link>}
                          <Divider />
                          <Link exact to={'/signup'}>
                            <MenuItem>
                              <ListItemIcon>
                                <PersonAdd fontSize="small" />
                              </ListItemIcon>
                              Add another account
                            </MenuItem>
                          </Link>
                          {status == "user" && <Link exact to={'/resume'}>
                            <MenuItem>
                              <ListItemIcon>
                                {/* <Settings fontSize="small" /> */}
                              </ListItemIcon>
                              Add Resume
                            </MenuItem>
                          </Link>}
                          {status == "company" && <Link exact to={'/post_job'}>
                            <MenuItem>
                              <ListItemIcon>
                                {/* <Settings fontSize="small" /> */}
                              </ListItemIcon>
                              Post an Opportunity
                            </MenuItem>
                          </Link>}
                          {status === "user" && <Link exact to={'/edit_resume'}>
                            <MenuItem>
                              <ListItemIcon>
                                {/* <Settings fontSize="small" /> */}
                              </ListItemIcon>
                              My Resumes
                            </MenuItem>
                          </Link>}
                          {status === "user" && <Link exact to={'/applied_jobs'}>
                            <MenuItem>
                              <ListItemIcon>
                                {/* <Settings fontSize="small" /> */}
                              </ListItemIcon>
                              Applications
                            </MenuItem>
                          </Link>}
                          {status === "company" && <a href={'/posted_jobs '}>
                            <MenuItem>
                              <ListItemIcon />
                              Posted Jobs
                            </MenuItem>
                          </a>}
                          {/*status==="company" && <Link exact to= {'/applicants'}>
                                                    <MenuItem>
                                                      <ListItemIcon>
                                                      </ListItemIcon>
                                                      Applications
                                                    </MenuItem>
                                                    </Link>*/}
                          {status === "company" && <Link exact to={'/projects'}>
                            <MenuItem>
                              <ListItemIcon>
                                {/* <Settings fontSize="small" /> */}
                              </ListItemIcon>
                              Projects
                            </MenuItem>
                          </Link>}
                          {/*status==="company" && <Link exact to= {'/manage_recruitment '}>
                                                    <MenuItem>
                                                      <ListItemIcon>
                                                      </ListItemIcon>
                                                      Manage Recruitment
                                                    </MenuItem>
                                                    </Link>*/}
                          <MenuItem
                            onClick={() => {
                              localStorage.removeItem("token");
                              localStorage.removeItem("status");
                              history.push('/');
                              window.location.reload();
                              console.log("response");
                            }}>
                            <ListItemIcon>
                              <Logout fontSize="small" />
                            </ListItemIcon>
                            <Link>Logout</Link>
                          </MenuItem>
                        </StyledMenu>
                        {/* <i className="ti ti-lock fa-sm text-theme-DarkColor"></i><Link exact to={'/'} onClick={()=>{
                                                        localStorage.removeItem("token");
                                                        localStorage.removeItem("status");
                                                        window.location.reload();
                                                    }}>Sign Out </Link> */}
                      </React.Fragment>
                    }
                    {/* </a> */}
                  </div>
                </div>{/* site-navigation end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* site-header-menu end */}
      <div className="serach_bar bg-theme-SkinColor pt-20">
        <div className="container">
          <form id="b_search_Form" className="b_search_Form wrap-form d-block" method="post" action="#" data-mailchimp="true">
            <div className="row row-equal-height ttm-boxes-spacing-20px">
              <div className="col-md">
                <label>
                  <Link to={'/job_list/'}>
                    <input type="text" id="keywords" placeholder="Keywords (e.g. Job Title)" />
                  </Link>
                </label>
              </div>
              <div className="col-md">
                <label>
                  <Link to={'/job_list/'}>
                    <input type="text" id="locations" placeholder="Locations (e.g. City, Counter)" />
                  </Link>
                </label>
              </div>
              <div className="col-md" onClick={() => {
                window.scrollTo({ top: 1100, behavior: "smooth" });
              }}>
                <label>
                  <input type="text" id="industry" placeholder="Industry (e.g. Design, Art)" />
                </label>
              </div>
              <div className="col-lg-2">
                <label>
                  <button className="submit ttm-btn ttm-btn-size-sm ttm-btn-shape-rounded ttm-btn-style-fill 
                                    ttm-btn-color-grey" type="submit">Search</button>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>

  )
}


export default Header;