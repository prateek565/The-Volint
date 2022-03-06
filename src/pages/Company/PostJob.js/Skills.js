import React, {Component} from 'react';
import {TextField, Button, Container, Divider} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import axios from 'axios';
import {saveAs} from 'file-saver';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import GetAppIcon from '@material-ui/icons/GetApp';
import {Row, Col} from 'react-bootstrap';
import {Paper, withStyles, Grid} from '@material-ui/core';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 1.5,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

class Skills extends Component {
  continue = e => {
    e.preventDefault ();
    this.props.nextStep ();
  };

  back = e => {
    e.preventDefault ();
    this.props.prevStep ();
  };

  createAndDownloadPDF = () => {
    axios
      .post ('/create-pdf', this.props.values)
      .then (() => {
        axios
          .get ('fetch-pdf', {responseType: 'arraybuffer'})
          .then (res => {
            const pdfBlob = new Blob ([res.data], {type: 'application/pdf'});
            saveAs (pdfBlob, `${this.props.values.firstname}'s Resume.pdf`);
          })
          .catch (err => {
            console.log (err);
          });
      })
      .catch (err => {
        console.log (err);
      });
  };
  handlesubmit = () => {
    console.log("e");
  }
  render () {
    const {values} = this.props;
    const {classes} = this.props;

    return (
    <>
        {/* <Header />
        <PageHeader 
            title="Resume"
            breadcrumb="skills"
        />
     */}
       <Grid item xs={12} lg={12}>
         <h3>Skills Required</h3>
       </Grid>
        <CardContent>
            <Grid container spacing={2} lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <textarea
                  margin="dense"
                  variant="outlined"
                  name="skills"
                  placeholder="Skills Required"
                  cols={100}
                  rows={3}
                  required
                  value={values.college}
                  onChange={this.props.handleChange}
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
        </CardContent>
        <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Positions open"
                  variant="outlined"
                  name="position"
                  required
                  style={{alignItems: 'left', width: '80%'}}
                  value={values.position}
                  onChange={this.props.handleChange}
                  
                />
              </Grid>
        {/* <Container className={classes.margin}>
          <Row>
            <Col lg={4} xs={4} />
            <Col lg={2} xs={2}>
              <Button
                variant="contained"
                className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor"
                onClick={this.back}
                startIcon={<NavigateBeforeIcon />}
              >
                Back
              </Button>
            </Col>
            <Col lg={1} xs={2}>
              <Button
                variant="contained"
                type= "submit"
                className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor"
                onClick={this.handlesubmit}
              >
                Submit
              </Button>
            </Col>
            <Col xs={4} />
          </Row>
          <br />
          {/* <Button
            variant="contained"
            color="primary"
            onClick={this.createAndDownloadPDF}
            endIcon={<GetAppIcon />}
          >
            Download Resume
          </Button> */}
        {/* </Container>
        <p className="text-center text-muted">Page 4</p> */}
      {/* <Footer /> */}
    </>
    );
  }
}

export default withStyles (styles) (Skills);