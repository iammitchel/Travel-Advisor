import React from 'react'
import GoogleMapReact from 'google-map-react'
import {paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Rating } from '@mui/material';

import useStyles from './style'

const Map = () => {
  const classes = useStyles();
  // const isMedia = useMediaQuery('(min-width:600px)');

  const coordinates = {lat: 0, lng: 0};

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBQCM4GqkJV5e0SM8o-6gj47dLkuqR-m0c" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={20}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
}

export default Map