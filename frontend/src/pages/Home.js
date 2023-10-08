import React, { useState, } from 'react'
import { Grid, Box, LinearProgress } from '@mui/material'

import StyleSelect from '../components/StyleSelect'
import DrawableCanvas from '../components/DrawableCanvas'
import Output from '../components/Output'


const Home = () => {


  const [inputImage, setInputImage] = useState(null);

  return (

    <Grid container  >
      <Grid item xs={12}>
        <StyleSelect />
      </Grid>
      <Grid item xs={12} md={6}>
        <DrawableCanvas setInputImage={setInputImage}/>
      </Grid>
      <Grid item xs={12} md={6}>
        <Output src={inputImage} />
      </Grid>
    </Grid>
  )
}

export default Home