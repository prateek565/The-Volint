import React, {Component} from 'react';
import {TextField, Button, Container} from '@mui/material';
import {Card, CardHeader, CardContent} from '@mui/material';
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
import {Row, Col} from 'react-bootstrap';
import { Paper, Grid } from '@mui/material';

import withStyles from '@mui/styles/withStyles';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 1,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

class Profile extends Component {
  continue = e => {
    e.preventDefault ();
    this.props.nextStep ();
  };

  render () {
    const {values} = this.props;
    const {classes} = this.props;
    return (
      <>
       <Grid item xs={12} lg={12}>
         <h3>Job Details</h3>
       </Grid>
        <CardContent>
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="company"
                  placeholder="Company"
                  style={{width: '80%'}}
                  required
                  value={values.company}
                  onChange={this.props.handleChange}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  placeholder="Project Title"
                  variant="outlined"
                  style={{width: '80%'}}
                  name="title"
                  required
                  value={values.title}
                  onChange={this.props.handleChange}
                />
              </Grid>

              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  placeholder="Category"
                  variant="outlined"
                  name="category"
                  required
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.category}
                  onChange={this.props.handleChange}
                  
                />
              </Grid>

              <Grid item lg={6} xs={12} sm={12} md={6}>
                <TextField
                  margin="dense"
                  placeholder="Experince Required"
                  variant="outlined"
                  name="experience"
                  required
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.experience}
                  onChange={this.props.handleChange}
                />
              </Grid>

              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  placeholder="Job Type"
                  variant="outlined"
                  name="type"
                  required
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.type}
                  onChange={this.props.handleChange}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  placeholder="Location"
                  variant="outlined"
                  name="location"
                  required
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.location}
                  onChange={this.props.handleChange}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  placeholder="Duration"
                  variant="outlined"
                  name="duration"
                  required
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.duration}
                  onChange={this.props.handleChange}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  placeholder="Stipend"
                  variant="outlined"
                  name="stipend"
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.stipend}
                  onChange={this.props.handleChange}
                />
              </Grid>
              
            </Grid>
            {/* <Container className={classes.margin}>
              <Row>
                <Col lg={4} xs={4} />
                <Col lg={2} xs={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.nextStep}
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
                    onClick={this.continue}
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
        </CardContent>
        {/* <p className="text-center text-muted">Page 1 </p> */}
      </>
    );
  }
}

export default withStyles (styles) (Profile);
