import React, {Component} from 'react';
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
import Header from '../../../components/layout/Header';
import PageHeader from '../../../components/layout/PageHeader';
import { Footer } from '../../../components/layout/Footer';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 1.5,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

class Qualification extends Component {
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
          .get ('fetch-pdf', {responseType: 'blob'})
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

  render () {
    const {values} = this.props;
    const {classes} = this.props;

    return (
    <>
      {/* <Header />
      <PageHeader 
          title= "Resume"
          breadcrumb="experience"
      /> */}
        <Grid item xs={12} lg={12}>
         <h3>Qualifications Required</h3>
        </Grid>
        <CardContent>
          <div >
            <Grid container spacing={2} lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <textarea
                  margin="dense"
                  variant="outlined"
                  name="qualification"
                  placeholder='Qualifications Required'
                  rows={3}
                  cols={100}
                  required
                  value={values.college}
                  onChange={this.props.handleChange}
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
          </div>
        </CardContent>
        
    </>
    );
  }
}

export default withStyles (styles) (Qualification);