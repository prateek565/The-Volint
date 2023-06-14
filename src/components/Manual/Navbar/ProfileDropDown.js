import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Divider, IconButton, ListItemIcon, MenuItem, Tooltip, Menu, Badge } from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import { FaUserCircle } from 'react-icons/fa';
import { styled, alpha } from '@mui/material/styles';
import { userInfo } from '../../../services/api';

export default function ProfileDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [profile, setprofile] = useState(null);
  const [name, setname] = useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  let status = localStorage.getItem("status");
  const token = localStorage.getItem("volintToken");

  useEffect(() => {
    Promise.resolve(userInfo()).then((res) => {
      console.log(res.data);
      setname(res.data.name);
      setprofile(res.data.profileUrl);
    });
  }, [])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  return (
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
                {profile ?
                  <img src={profile} alt='profilePic' style={{ borderRadius: '100%', width: '2.5rem', height: '2.5rem' }} /> :
                  <Avatar alt={name} src="/static/images/avatar/1.jpg" />
                }
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
                  <FaUserCircle size={'1.3rem'} />
                </ListItemIcon>
                Profile
              </MenuItem>
            </Link>}
            {status === "company" && <Link exact to={'/company_profile'}>
              <MenuItem>
                <ListItemIcon>
                  <FaUserCircle size={'1.3rem'} />
                </ListItemIcon>
                Profile
              </MenuItem>
            </Link>}
            <Divider />
            {/* <Link exact to={'/signup'}>
                            <MenuItem>
                              <ListItemIcon>
                                <PersonAdd fontSize="small" />
                              </ListItemIcon>
                              Add another account
                            </MenuItem>
                          </Link> */}
            {status == "user" && <Link exact to={'/resume'}>
              <MenuItem>
                <ListItemIcon>
                  {/* <Settings fontSize="small" /> */}
                </ListItemIcon>
                Add Resume
              </MenuItem>
            </Link>}
            {/*status==="company" && <Link exact to= {'/applicants'}>
                                                    <MenuItem>
                                                      <ListItemIcon>
                                                      </ListItemIcon>
                                                      Applications
                                                    </MenuItem>
                                                    </Link>*/}

            {/*status==="company" && <Link exact to= {'/manage_recruitment '}>
                                                    <MenuItem>
                                                      <ListItemIcon>
                                                      </ListItemIcon>
                                                      Manage Recruitment
                                                    </MenuItem>
                                                    </Link>*/}
            <MenuItem
              onClick={() => {
                localStorage.removeItem("volintToken");
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
                                                        localStorage.removeItem("volintToken");
                                                        localStorage.removeItem("status");
                                                        window.location.reload();
                                                    }}>Sign Out </Link> */}
        </React.Fragment>
      }
      {/* </a> */}
    </div>
    // <React.Fragment>
    //   <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
    //     <Typography sx={{ minWidth: 100 }}>Contact</Typography>
    //     <Typography sx={{ minWidth: 100 }}>Profile</Typography>
    //     <Tooltip title="Account settings">
    //       <IconButton
    //         onClick={handleClick}
    //         size="small"
    //         sx={{ ml: 2 }}
    //         aria-controls={open ? 'account-menu' : undefined}
    //         aria-haspopup="true"
    //         aria-expanded={open ? 'true' : undefined}
    //       >
    //         <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
    //       </IconButton>
    //     </Tooltip>
    //   </Box>
    //   <Menu
    //     anchorEl={anchorEl}
    //     id="account-menu"
    //     open={open}
    //     onClose={handleClose}
    //     onClick={handleClose}
    //     PaperProps={{
    //       elevation: 0,
    //       sx: {
    //         overflow: 'visible',
    //         filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    //         mt: 1.5,
    //         '& .MuiAvatar-root': {
    //           width: 32,
    //           height: 32,
    //           ml: -0.5,
    //           mr: 1,
    //         },
    //         '&:before': {
    //           content: '""',
    //           display: 'block',
    //           position: 'absolute',
    //           top: 0,
    //           right: 14,
    //           width: 10,
    //           height: 10,
    //           bgcolor: 'background.paper',
    //           transform: 'translateY(-50%) rotate(45deg)',
    //           zIndex: 0,
    //         },
    //       },
    //     }}
    //     transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    //     anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    //   >
    //     <MenuItem>
    //       <Avatar /> Profile
    //     </MenuItem>
    //     <MenuItem>
    //       <Avatar /> My account
    //     </MenuItem>
    //     <Divider />
    //     <MenuItem>
    //       <ListItemIcon>
    //         <PersonAdd fontSize="small" />
    //       </ListItemIcon>
    //       Add another account
    //     </MenuItem>
    //     <MenuItem>
    //       <ListItemIcon>
    //         <Settings fontSize="small" />
    //       </ListItemIcon>
    //       Settings
    //     </MenuItem>
    //     <MenuItem>
    //       <ListItemIcon>
    //         <Logout fontSize="small" />
    //       </ListItemIcon>
    //       Logout
    //     </MenuItem>
    //   </Menu>
    // </React.Fragment>
  );
}