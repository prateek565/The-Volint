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

const Profile = (props) => {

  const classes = styles();
  const {values} = props
  return (
    <Paper className={classes.padding} >
      <Grid item xs={12} lg={12}>
        <h3>Personal details</h3>
      </Grid>
      <CardContent>
        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="center" lg={12}>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                variant="outlined"
                name="name"
                placeholder="Full Name"
                style={{ width: '80%' }}
                required
                value={values.name}
                onChange={props.handleChange}
              />
            </Grid>
            {/* <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                label="Last Name"
                variant="outlined"
                style={{ width: '80%' }}
                name="lastname"
                required
                value={values.lastname}
                onChange={props.handleChange}
              />
            </Grid> */}

            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                placeholder="Email"
                variant="outlined"
                name="email"
                required
                style={{ alignItems: 'left', width: '80%' }}
                value={values.email}
                onChange={props.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item lg={6} xs={12} sm={12} md={6}>
              <TextField
                margin="dense"
                placeholder="Phone Number"
                variant="outlined"
                name="phone"
                style={{ alignItems: 'left', width: '80%' }}
                value={values.phone}
                onChange={props.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Your Website"
                  variant="outlined"
                  name="website"
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.website}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LanguageIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid> */}
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                placeholder="GitHub"
                variant="outlined"
                name="github"
                style={{ alignItems: 'left', width: '80%' }}
                value={values.github}
                onChange={props.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <GitHubIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                placeholder="Linked In"
                variant="outlined"
                name="linkedin"
                style={{ alignItems: 'left', width: '80%' }}
                value={values.linkedin}
                onChange={props.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LinkedInIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/* <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Twitter"
                  variant="outlined"
                  name="twitter"
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.twitter}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <TwitterIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid> */}
            <Grid item md={6} sm={12} xs={12} lg={6}>
              <TextField
                margin="dense"
                placeholder="Facebook"
                variant="outlined"
                name="facebook"
                style={{ alignItems: 'left', width: '80%' }}
                value={values.facebook}
                onChange={props.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <FacebookIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/* <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Instagram"
                  variant="outlined"
                  name="instagram"
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.instagram}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <InstagramIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid> */}
            </Grid>
            {/* <Container className={classes.margin} style={{marginTop: '2rem'}}>
              <Row>
                <Col lg={4} xs={4} />
                <Col lg={2} xs={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled
                    startIcon={<NavigateBeforeIcon />}
                  >
                    Back
                  </Button>
                </Col>
                <Col lg={1} xs={2}>
                  <Button
                    variant="contained"
                    className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor"
                    onClick={Continue}
                    endIcon={<NavigateNextIcon />}
                  >
                    Next
                  </Button>
                </Col>
                <Col lg={3} xs={1} />
              </Row>
            </Container> */}
            {/* <Button
              variant="contained"
              color="secondary"
              onClick={this.createAndDownloadPDF}
              endIcon={<GetAppIcon />}
            >
              Generate PDF
            </Button> */}
        </div>
      </CardContent>
      {/* <p className="text-center text-muted">Page 1 </p> */}
    </Paper>
  );
}


export default Profile;