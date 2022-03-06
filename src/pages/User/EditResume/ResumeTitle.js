import React, { Component } from 'react';
import { TextField, Button, Container } from '@material-ui/core';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Row, Col } from 'react-bootstrap';
import { Paper, withStyles, Grid } from '@material-ui/core';

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