import React from 'react'
import { Grid } from '@mui/material'

import StyleSelect from '../components/StyleSelect'
import DrawableCanvas from '../components/DrawableCanvas'


const Home = () => {
  return (

    <Grid container  >
      <Grid item xs={12}>
        <StyleSelect />
      </Grid>
      <Grid item xs={12} md={6}>
        <DrawableCanvas />
      </Grid>
      <Grid item xs={12} md={6}>
        <h1>xs=8</h1>
      </Grid>
    </Grid>
  )
}

export default Home