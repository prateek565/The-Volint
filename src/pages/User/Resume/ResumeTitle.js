import React, { Component, useState } from 'react';
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

  const [resume, setResume] = useState(false);

  function handleFile(e) {
    //Read File
    var selectedFile = e.target.files;
    //Check File is not Empty
    if (selectedFile.length > 0) {
      // Select the very first file from list
      var fileToLoad = selectedFile[0];
      // FileReader function for read the file.
      var fileReader = new FileReader();
      var base64;
      // Convert data to base64
      fileReader.readAsDataURL(fileToLoad);
      // Onload of file read the file content
      fileReader.onload = function (fileLoadedEvent) {
        base64 = fileLoadedEvent.target.result;
        // Print data in console
        console.log(base64);
        // setResume( ...resume)
      };
    }
  }

  const classes = styles();
  const { values } = props;
  return (
    <CardContent>
      <div>
        <Grid container spacing={2} alignItems="center" lg={12}>
          <Grid item xs={12} lg={12}>
            <h4>Resume Title</h4>
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
        <br/>
        <Grid container spacing={2} alignItems="center" lg={12}>
          <Grid item xs={12} lg={12}>
            <h4>Choose Resume</h4>
          </Grid>
          <Grid item md={6} sm={12} xs={12} lg={6}>
          <input
            type="file"
            name="myImage"
            accept='.pdf'
            onChange={(e) => {
              handleFile(e);
            }}
          />
        </Grid>
        </Grid>
        <br/>

      </div>
    </CardContent>
  );
}


export default ResumeTitle;