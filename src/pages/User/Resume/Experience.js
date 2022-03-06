import React, {Component, useState} from 'react';
import {TextField, Button, Container, Divider} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import axios from 'axios';
import {saveAs} from 'file-saver';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import DescriptionIcon from '@material-ui/icons/Description';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import BusinessIcon from '@material-ui/icons/Business';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Row, Col} from 'react-bootstrap';
import {Paper, withStyles, Grid} from '@material-ui/core';

const styles = theme => ({
  margin: {
    margin: '1.5rem',
  },
  padding: {
    padding: '1.5rem',  
  },
});

const Experience=(props)=>{
  const classes = styles();
  const {values} = props;

  const Continue = e => {
    e.preventDefault ();
    props.nextStep ();
  };

  const Back = e => {
    e.preventDefault ();
    props.prevStep ();
  };

  // const createAndDownloadPDF = () => {
  //   axios
  //     .post ('/create-pdf', this.props.values)
  //     .then (() => {
  //       axios
  //         .get ('fetch-pdf', {responseType: 'blob'})
  //         .then (res => {
  //           const pdfBlob = new Blob ([res.data], {type: 'application/pdf'});
  //           saveAs (pdfBlob, `${this.props.values.firstname}'s Resume.pdf`);
  //         })
  //         .catch (err => {
  //           console.log (err);
  //         });
  //     })
  //     .catch (err => {
  //       console.log (err);
  //     });
  // };

    return (
    <>
      {/* <Header />
      <PageHeader 
          title= "Resume"
          breadcrumb="experience"
      /> */}
      <>
        <Grid item xs={12} lg={12}>
         <h3>Experience</h3>
        </Grid>
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid
                item
                xs={12}
                lg={4}
                alignItems="flex-end"
                alignContent="flex-end"
              >
                <h5>
                  <CheckCircleIcon />
                  <span className="pl-3">Experience 1</span>
                </h5>
              </Grid>
              <Grid item xs={0} lg={8} />

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="companyName"
                  label="Institue/Organisation"
                  style={{width: '90%'}}
                  required
                  value={values.companyName}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="position"
                  label="Position"
                  style={{width: '90%'}}
                  required
                  value={values.position}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <EventSeatIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="duration"
                  label="Duration"
                  style={{width: '90%'}}
                  required
                  value={values.duration}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TimelapseIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{width: '97%'}}
                  name="experienceDescription"
                  required
                  value={values.experienceDescription}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            {/* <Grid container spacing={2} alignItems="flex-start" lg={12}>
              <Grid
                item
                xs={12}
                lg={4}
                alignItems="flex-end"
                alignContent="flex-end"
              >
                <h5>
                  <CheckCircleIcon />
                  <span className="pl-3">Experience 2</span>
                </h5>
              </Grid>
              <Grid item xs={0} lg={8} />
              <br />
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="institute2"
                  label="Institue/Organisation"
                  style={{width: '90%'}}
                  required
                  value={insti2}
                  onChange={(e)=>{setinsti2(e.target.value)}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="position2"
                  label="Position"
                  style={{width: '90%'}}
                  required
                  value={pos2}
                  onChange={(e)=>{setpos2(e.target.value)}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <EventSeatIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="duration2"
                  label="Duration"
                  style={{width: '90%'}}
                  required
                  value={duration2}
                  onChange={(e)=>{setduration2(e.target.value)}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TimelapseIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{width: '97%'}}
                  rows={3}
                  name="experienceDescription2"
                  required
                  value={des2}
                  onChange={(e)=>{setdes2(e.target.value)}}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid> */}
          </div>
        </CardContent>
        {/* <Container className={classes.margin}>
          <Row>
            <Col lg={4} xs={4} />
            <Col lg={2} xs={2}>
              <Button
                variant="contained"
                className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor"
                startIcon={<NavigateBeforeIcon />}
                onClick={Back}
              >
                Back
              </Button>
            </Col>
            <Col lg={1} xs={2}>
              <Button
                variant="contained"
                className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor"
                endIcon={<NavigateNextIcon />}
                onClick={Continue}
              >
                Next
              </Button>
            </Col>
            <Col xs={4} />
          </Row>
        </Container>
        <p className="text-center text-muted">Page 4</p> */}
      </>
      {/* <Footer /> */}
    </>
    );
  }

export default Experience;