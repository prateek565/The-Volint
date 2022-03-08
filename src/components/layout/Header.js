import React, { Component, useState } from 'react'
import HeaderMenu from './HeaderMenu';
import Mobile_menu from './Mobile_menu';
import Logo from './Logo'
import Header_search from './Header_search'
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Divider, IconButton, ListItemIcon, MenuItem, Tooltip, Menu, Badge } from '@material-ui/core';
import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
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
  
const Header = () => {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const componentDidMount = () => {
        window.addEventListener('scroll', this.isSticky);
    }

    const componentWillUnmount = () => {
        window.removeEventListener('scroll', this.isSticky);
    }

    const isSticky = (e) =>{
        const header = document.querySelector('header');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('is-Sticky') : header.classList.remove('is-Sticky');
    };
    const token = localStorage.getItem("token");
    let status = localStorage.getItem("status");
        return (
                
            <header id="masthead" className="header ttm-header-style-01">
                {/* topbar */}
               {/* <div className="top_bar bg-theme-DarkColor text-center clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="top_bar_contact_item m-0">
                                    <div className="top_bar_icon">
                                        <i className="fas fa-info-circle text-reset"></i>
                                    </div>
                                    <span>Using its extensive fish farming experience and knowledge, Fleuren & Nooijen is now a market leader helping. </span>  
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-icon-btn-right ttm-btn-color-skincolor" href="/"> Learn More<i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* topbar end */}
                {/* site-header-menu */}
                <div id="site-header-menu" className="site-header-menu ttm-bgcolor-white">
                    <div className="site-header-menu-inner ttm-stickable-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* site-navigation */}
                                    <div className="site-navigation d-flex align-items-center justify-content-between">
                                        {/* site-branding */}
                                        <div className="site-branding">
                                            <Logo/>
                                        </div>
                                        {/* site-branding end */}
                                        <div className="border-box-block">
                                            <div className=" d-flex align-items-center justify-content-between">
                                                {/* menu */}
                                                <HeaderMenu/>
                                                <div className="mobile-menu"><Mobile_menu/></div>
                                             <div className="border-box-block ms-auto mr-20">
                                                <div className=" d-flex align-items-center justify-content-between">
                                                
                                                </div>
                                             </div>
                                              {token &&   <React.Fragment className="ml-auto">
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
                                                    {status==="user" && <Link exact to= {'/profile'}>
                                                    <MenuItem>
                                                      <ListItemIcon>
                                                        <Avatar />
                                                      </ListItemIcon>
                                                      Profile
                                                    </MenuItem>
                                                  </Link>}
                                                  {status==="company" && <Link exact to= {'/company_profile'}>
                                                    <MenuItem>
                                                      <ListItemIcon>
                                                        <Avatar />
                                                      </ListItemIcon>
                                                      Profile
                                                    </MenuItem>
                                                  </Link>}
                                                    <Divider />
                                                    <Link exact to= {'/signup'}>
                                                    <MenuItem>
                                                      <ListItemIcon>
                                                        <PersonAdd fontSize="small" />
                                                      </ListItemIcon>
                                                      Add another account
                                                    </MenuItem>
                                                    </Link>
                                                    {status=="user" && <Link exact to= {'/resume'}>
                                                    <MenuItem>
                                                      <ListItemIcon>
                                                          {/* <Settings fontSize="small" /> */}
                                                      </ListItemIcon>
                                                      Add Resume
                                                      </MenuItem>
                                                    </Link>}
                                                    {status=="company" && <Link exact to= {'/post_job'}>
                                                    <MenuItem>
                                                      <ListItemIcon>
                                                          {/* <Settings fontSize="small" /> */}
                                                      </ListItemIcon>
                                                      Post an Opportunity
                                                      </MenuItem>
                                                    </Link>}
                                                    {/*status=="company" && <Link exact to= {'/edit_job'}>
                                                    <MenuItem>
                                                      <ListItemIcon>
                                                      </ListItemIcon>
                                                        Edit Job
                                                      </MenuItem>
                                                     </Link>*/}
                                                    {status==="user" && <Link exact to= {'/edit_resume'}>
                                                      <MenuItem>
                                                        <ListItemIcon>
                                                      {/* <Settings fontSize="small" /> */}
                                                        </ListItemIcon>
                                                         My Resumes
                                                     </MenuItem>
                                                    </Link>}
                                                    {status==="user" && <Link exact to= {'/applied_jobs'}>
                                                    <MenuItem>
                                                      <ListItemIcon>
                                                        {/* <Settings fontSize="small" /> */}
                                                      </ListItemIcon>
                                                      Applications
                                                    </MenuItem>
                                                    </Link>}
                                                    {/*status==="company" && <Link exact to= {'/applicants'}>
                                                    <MenuItem>
                                                      <ListItemIcon>
                                                      </ListItemIcon>
                                                      Applications
                                                    </MenuItem>
                                                    </Link>*/}
                                                    {status==="company" && <Link exact to= {'/projects'}>
                                                    <MenuItem>
                                                      <ListItemIcon>
                                                      </ListItemIcon>
                                                      Projects
                                                    </MenuItem>
                                                    </Link>}
                                                    {status==="company" && <Link exact to= {'/posted_jobs '}>
                                                    <MenuItem>
                                                    <ListItemIcon />
                                                      Posted Jobs
                                                    </MenuItem>
                                                    </Link>}
                                                    {/*<MenuItem>
                                                      <ListItemIcon>
                                                        <Settings fontSize="small" />
                                                      </ListItemIcon>
                                                      <Link>Settings</Link>
                                                    </MenuItem>*/}
                                                    <MenuItem
                                                      onClick={()=>{
                                                         localStorage.removeItem("token");
                                                         localStorage.removeItem("status");
                                                         history.push('/');
                                                         window.location.reload();
                                                         console.log("response");
                                                      }}>
                                                      <ListItemIcon>
                                                        <Logout fontSize="small"/>
                                                      </ListItemIcon>
                                                      <Link>Logout</Link>
                                                    </MenuItem>
                                                    </StyledMenu>
                                                    {/* <i className="ti ti-lock fa-sm text-theme-DarkColor"></i><Link exact to={'/'} onClick={()=>{
                                                        localStorage.removeItem("token");
                                                        localStorage.removeItem("status");
                                                        window.location.reload();
                                                    }}>Sign Out </Link> */}
                                                    </React.Fragment>}
                                                {/* menu end */}
                                                <div className="header_extra ml-auto d-flex align-items-center">
                                                    {/* <Header_search/> */}
                                                    <div className="header_social">
                                                        <ul className="social-icons">
                                                            <li><a href="/" rel="noopener" aria-label="facebook"><i className="ti ti-facebook"></i></a></li>
                                                            <li><a href="/" rel="noopener" aria-label="twitter"><i className="ti ti-twitter-alt"></i></a></li>
                                                            <li><a href="/" rel="noopener" aria-label="google"><i className="ti ti-google"></i></a></li>
                                                            <li><a href="/" rel="noopener" aria-label="linkedin"><i className="ti ti-linkedin"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>{/* site-navigation end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* site-header-menu end */}
            </header> 
            
        )
}

export default Header;