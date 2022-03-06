import React, { Component } from 'react';
import { TextField, Button, Container, Divider } from '@material-ui/core';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import axios from 'axios';
import { saveAs } from 'file-saver';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import LinkIcon from '@material-ui/icons/Link';
import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Row, Col } from 'react-bootstrap';
import { Paper, withStyles, Grid } from '@material-ui/core';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 1.5,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

class Projects extends Component {
  
  createAndDownloadPDF = () => {
    axios
      .post('/create-pdf', this.state)
      .then(() => {
        axios
          .get('fetch-pdf', { responseType: 'blob' })
          .then(res => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
            saveAs(pdfBlob, 'Resume.pdf');
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { values } = this.props;
    const { classes } = this.props;

    return (
      <>
        {/* <Header />
        <PageHeader 
            title= "Resume"
            breadcrumb= "project"
        />
     */}
          <Grid item xs={12} lg={12}>
            <h3>Projects</h3>
          </Grid>
          <CardContent>
            <div className={classes.margin}>
              <Grid container spacing={2} alignItems="center" lg={12}>
                <Grid item xs={12} lg={12}>
                  <h5>Project 1</h5>
                </Grid>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    name="title"
                    label="Title"
                    style={{ width: '80%' }}
                    required
                    value={values.title}
                    onChange={this.props.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <TitleIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    name="link"
                    label="Link"
                    style={{ width: '80%' }}
                    required
                    value={values.link}
                    onChange={this.props.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <LinkIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item md={12} sm={12} xs={12} lg={12}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    name="projectDescription"
                    label="Description"
                    style={{ width: '80%' }}
                    required
                    value={values.projectDescription}
                    onChange={this.props.handleChange}
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
              {/* <Grid container spacing={2} alignItems="center" lg={12}>
                <Grid item xs={12} lg={12}>
                  <h5>Project 2</h5>
                </Grid>
                <Grid item md={12} sm={12} xs={12} lg={12}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    name="title2"
                    label="Title"
                    style={{ width: '80%' }}
                    required
                    value={values.title2}
                    onChange={this.props.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <TitleIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item md={4} sm={6} xs={12} lg={12}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    name="link2"
                    label="Link"
                    style={{ width: '80%' }}
                    required
                    value={values.link2}
                    onChange={this.props.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <LinkIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item md={12} sm={12} xs={12} lg={12}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    name="projectDescription2"
                    label="Description"
                    style={{ width: '80%' }}
                    required
                    value={values.projectDescription2}
                    onChange={this.props.handleChange}
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
              {/* <Grid container spacing={2} alignItems="center" lg={12}>
                <Grid item xs={12} lg={12}>
                  <h5>Project 3</h5>
                </Grid>
                <Grid item md={12} sm={12} xs={12} lg={12}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    name="title3"
                    label="Title"
                    style={{ width: '80%' }}
                    value={values.title3}
                    onChange={this.props.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <TitleIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12} lg={12}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    name="link3"
                    label="Link"
                    style={{ width: '80%' }}
                    value={values.link3}
                    onChange={this.props.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <LinkIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item md={12} sm={12} xs={12} lg={12}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    name="projectDescription3"
                    label="Description"
                    style={{ width: '80%' }}
                    value={values.projectDescription3}
                    onChange={this.props.handleChange}
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
                onClick={this.back}
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
            <Col xs={4} />
          </Row>
        </Container>
        <p className="text-center text-muted">Page 3</p> */}
        {/* <Footer /> */}
      </>
    );
  }
}

export default withStyles(styles)(Projects);