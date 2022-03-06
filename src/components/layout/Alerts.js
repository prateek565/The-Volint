import { Alert, AlertTitle } from '@mui/material';
import React from 'react';

const Alertsuccess = (props) => {
  return (<div>
      {/* <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert> */}
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        {props.text}
      </Alert>
  </div>);
};

const Alerterror = (props) => {
    return (<div>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {props.text}
        </Alert>
        {/* <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert> */}
    </div>);
  };

export {Alertsuccess, Alerterror};
