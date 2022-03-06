import React, {Component} from 'react';
import {TextField, Button, Container, Divider} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import SchoolIcon from '@material-ui/icons/School';
import DateRangeIcon from '@material-ui/icons/DateRange';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Row, Col} from 'react-bootstrap';
import {Paper, withStyles, Grid} from '@material-ui/core';
import 'date-fns';

const styles = theme => ({
  margin: {
    margin: '1.5rem',
  },
  padding: {
    padding: '1.5rem',  
  },
});
const Submitted = (props) => {
  const Continue = (e) => {
    e.preventDefault ();
    props.nextStep ();
  };

  const back = (e) => {
    e.preventDefault ();
    props.prevStep ();
  };

  const classes = styles();
  const {values} = props;

    return (
    <>
      {/* <Header />
      <PageHeader
        title= "Resume"
        breadcrumb="education"
      /> */}
      <div>
        <Card>
          <CardHeader style={{color: '#e63c80', fontWeight:600}} titleTypographyProps={{variant:'h4' }} title="Education Details" />
        
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={2} className="ml-0" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="college"
                  label="College/Unviersity"
                  style={{width: '80%'}}
                  required
                  value={values.college}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SchoolIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="fromyear1"
                  label=""
                  type="date"
                  style={{width: '80%'}}
                  required
                  value={values.fromyear1}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                        {/* <DateRangeIcon /> */}
                        </InputAdornment>
                      
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="toyear1"
                  type="date"
                  label=""
                  style={{width: '80%'}}
                  required
                  value={values.toyear1}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment >
                        {/* <DateRangeIcon /> */}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="outlined"
                  style={{width: '80%'}}
                  name="qualification1"
                  required
                  value={values.qualification1}
                  onChange={props.handleChange}
                />
              </Grid>

              <Grid item md={8} sm={12} xs={12} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{width: '90%'}}
                  name="description1"
                  required
                  value={values.description1}
                  onChange={props.handleChange}
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="school"
                  label="School"
                  style={{width: '80%'}}
                  required
                  value={values.school}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SchoolIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="fromyear2"
                  label=""
                  type="date"
                  style={{width: '80%'}}
                  required
                  value={values.fromyear2}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                    <>
                      
                      <InputAdornment position="start">
                        {/* <DateRangeIcon /> */}
                      </InputAdornment>
                    </>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                {/* <CustomDatePicker
                  name={'toyear2'}
                  label={'To Year'}
                  value={values.toyear2}
                /> */}
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="toyear2"
                  label=""
                  type="date"
                  style={{width: '80%'}}
                  required
                  value={values.toyear2}
                  onChange={props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment className="hiddenLabel" position="start">
                        {/* <DateRangeIcon /> */}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="outlined"
                  style={{width: '80%'}}
                  name="qualification2"
                  required
                  value={values.qualification2}
                  onChange={props.handleChange}
                />
              </Grid>

              <Grid item md={8} sm={8} xs={8} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{width: '90%'}}
                  name="description2"
                  required
                  value={values.description2}
                  onChange={props.handleChange}
                />
              </Grid>
            </Grid>
          </div>
        </CardContent>
        <Container className={classes.margin} style={{marginTop: '2rem'}}>
          <Row>
            <Col lg={4} xs={4} />
            <Col lg={2} xs={2}>
              <Button
                variant="contained"
                className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor"
                onClick={back}
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
            <Col xs={4} />
          </Row>
        </Container>
        <p className="text-center text-muted">Page 2</p>
      </Card>
      </div>
      {/* <Footer /> */}
    </>
    );
  }

export default Submitted;