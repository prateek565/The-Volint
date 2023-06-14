import React, {Component} from 'react';
import {TextField, Button, Container, Divider} from '@mui/material';
import {Card, CardHeader, CardContent} from '@mui/material';
import axios from 'axios';
import {saveAs} from 'file-saver';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InputAdornment from '@mui/material/InputAdornment';
import GetAppIcon from '@mui/icons-material/GetApp';
import {Row, Col} from 'react-bootstrap';
import { Paper, Grid } from '@mui/material';

import withStyles from '@mui/styles/withStyles';

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
                  value={values.skills}
                  onChange={this.props.handleChange}
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
        </CardContent>
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