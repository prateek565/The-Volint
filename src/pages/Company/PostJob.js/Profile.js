import React, { Component } from 'react';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem, RadioGroup, Radio, FormControlLabel, FormLabel } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
// import LanguageIcon from '@mui/icons-material/Language';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import InputAdornment from '@mui/material/InputAdornment';
// import { Row, Col } from 'react-bootstrap';
import { Paper, Grid } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import DropDown from '../../../components/Manual/dropdown/DropDown';

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
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    const { classes } = this.props;
    return (
      <>
        <Grid item xs={12} lg={12}>
          <h3>Company Name</h3>
        </Grid>
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="company"
                  style={{ width: '80%' }}
                  required
                  value={this.props.companyName}
                  onChange={this.props.handleChange}
                />
              </Grid>
            </Grid>
          </div>
        </CardContent>
        <Grid item xs={12} lg={12}>
          <h3>Title</h3>
        </Grid>
        <CardContent>
          <div >
            <Grid container spacing={2} lg={12}>
            <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Project Title"
                  variant="outlined"
                  style={{ width: '80%' }}
                  name="title"
                  required
                  value={values.title}
                  onChange={this.props.handleChange}
                />
              </Grid>
            </Grid>
          </div>
        </CardContent>
        <Grid item xs={12} lg={12}>
          <h3>Details</h3>
        </Grid>
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="center" lg={12}>

              {/* <Grid item lg={6} xs={12} sm={12} md={6}>
                <TextField
                  margin="dense"
                  label="Experince Required"
                  variant="outlined"
                  name="experience"
                  required
                  style={{ alignItems: 'left', width: '80%' }}
                  value={values.experience}
                  onChange={this.props.handleChange}
                />
              </Grid> */}

              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Location"
                  variant="outlined"
                  name="location"
                  required
                  style={{ alignItems: 'left', width: '80%' }}
                  value={values.location}
                  onChange={this.props.handleChange}
                />
              </Grid>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Job Type</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="parttime" control={<Radio />} label="Part-time" />
                  <FormControlLabel value="fulltime" control={<Radio />} label="Full-time" />
                </RadioGroup>
              </FormControl>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Duration in hours"
                  variant="outlined"
                  name="duration"
                  required
                  style={{ alignItems: 'left', width: '80%' }}
                  value={values.duration}
                  onChange={this.props.handleChange}
                />
              </Grid>

              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Location</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="remote" control={<Radio />} label="Remote" />
                  <FormControlLabel value="onsite" control={<Radio />} label="On Site" />
                </RadioGroup>
              </FormControl>
              {/* <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Stipend"
                  variant="outlined"
                  name="stipend"
                  style={{ alignItems: 'left', width: '80%' }}
                  value={values.stipend}
                  onChange={this.props.handleChange}
                />
              </Grid> */}
              {/* <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Positions open"
                  variant="outlined"
                  name="position"
                  required
                  style={{ alignItems: 'left', width: '80%' }}
                  value={values.position}
                  onChange={this.props.handleChange}
                />
              </Grid> */}
              <Grid item md={5} sm={10} xs={10} lg={5}>
                <DropDown
                  array={[
                    'Development and IT',
                    'Design and Creative',
                    'Sales and Marketing',
                    'Writing and Transalation',
                    'Finance and Accounting',
                    'Admin and Customer Support',
                    'Others']}
                  type={'Category'}
                  name="category"
                  value={values.industry}
                  handleChange={this.props.handleChange}
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
          </div>
        </CardContent>
        {/* <p className="text-center text-muted">Page 1 </p> */}
      </>
    );
  }
}

export default withStyles(styles)(Profile);
