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
    margin: theme.spacing.unit * 1.5,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

class Description extends Component {
  continue = e => {
    e.preventDefault ();
    this.props.nextStep ();
  };

  back = e => {
    e.preventDefault ();
    this.props.prevStep ();
  };

  render () {
    const {values} = this.props;
    const {classes} = this.props;

    return (
    <>
      {/* <Header />
      <PageHeader
        title= "Resume"
        breadcrumb="education"
      /> */}
      
        <Grid item xs={12} lg={12}>
         <h3>Description</h3>
        </Grid>
        <CardContent>
          <div >
            <Grid container spacing={2} lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <textarea
                  margin="dense"
                  variant="outlined"
                  name="description"
                  placeholder="Description"
                  cols={100}
                  rows={3}
                  required
                  value={values.description}
                  onChange={this.props.handleChange}
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
          </div>
        </CardContent>
        <Grid item xs={12} lg={12}>
         <h3>Knowledge</h3>
        </Grid>
        <CardContent>
          <div >
            <Grid container spacing={2} lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <textarea
                  margin="dense"
                  variant="outlined"
                  name="knowledge"
                  placeholder="Knowledge and Abilities Required"
                  cols={100}
                  rows={3}
                  required
                  value={values.knowledge}
                  onChange={this.props.handleChange}
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
          </div>
        </CardContent>
        <Grid item xs={12} lg={12}>
         <h3>Perks</h3>
        </Grid>
        <CardContent>
          <div >
            <Grid container spacing={2} lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <textarea
                  margin="dense"
                  variant="outlined"
                  name="perks"
                  placeholder="Perks and Benefits"
                  cols={100}
                  rows={3}
                  required
                  value={values.perks}
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

export default withStyles (styles) (Description);