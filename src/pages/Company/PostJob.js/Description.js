import React, { Component } from 'react';
import { TextField, Button, Container, Divider } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SchoolIcon from '@mui/icons-material/School';
import DateRangeIcon from '@mui/icons-material/DateRange';
import InputAdornment from '@mui/material/InputAdornment';
import { Row, Col } from 'react-bootstrap';
import { Paper, Grid } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
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
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    const { classes } = this.props;

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
          </div>
        </CardContent>
        <Grid item xs={12} lg={12}>
          <h3>Knowledge Needed</h3>
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
          </div>
        </CardContent>
      </>
    );
  }
}

export default withStyles(styles)(Description);