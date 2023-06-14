import React, { Component } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import InputAdornment from '@mui/material/InputAdornment';
import { Row, Col } from 'react-bootstrap';
import { Paper, Grid } from '@mui/material';

import withStyles from '@mui/styles/withStyles';

const styles = theme => ({
  margin: {
    margin: '1.5rem',
  },
  padding: {
    padding: '1.5rem',
  },
});

const ResumeTitle = (props) => {

  const classes = styles();
  const {values} = props;
  return (
    <CardContent>
        <div>
          <Grid container spacing={2} alignItems="center" lg={12}>
            <Grid item xs={12} lg={12}>
              <h3>Resume - {props.i+1}</h3>
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                variant="outlined"
                name="resumeTitle"
                label="Resume Title"
                style={{ width: '80%' }}
                required
                value={values.resumeTitle}
                onChange={props.handleChange}
              />
            </Grid>
          </Grid>
        </div>
      </CardContent>
  );
}


export default ResumeTitle;