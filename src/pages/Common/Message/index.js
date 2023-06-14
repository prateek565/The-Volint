import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';
import { FaUserCircle } from 'react-icons/fa'
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';

export default function TemporaryDrawer({ name, id }) {
  const [state, setState] = React.useState({
    Message: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      style={{ width: '28rem', height:'100vh' }}
      role="presentation"
    // onClick={toggleDrawer(anchor, false)}
    // onKeyDown={toggleDrawer(anchor, false)}
    >
       <List>
          {[name].map((text, index) => (
            <ListItem button key={text}>
              <FaUserCircle size={'2rem'} style={{ marginRight: '10px' }} />
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <hr/>
        <div style={{height: '75%'}}>
          Messages box
        </div>
        <Grid>
          <TextField style={{ width: '20rem', marginLeft: '1rem' }} id="outlined-basic" label="Message" variant="outlined" placeholder="Type Message here" />
          <Button variant="contained" endIcon={<SendIcon />} style={{ marginTop: '0.5rem' }}>
            Send
          </Button>
        </Grid>

    </Box>
  );

  return (
    <div>
      {['Message'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
