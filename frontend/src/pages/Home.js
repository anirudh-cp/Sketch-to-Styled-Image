import React, { useEffect, useState, } from 'react'
import { Grid, LinearProgress } from '@mui/material'

import StyleSelect from '../components/StyleSelect'
import DrawableCanvas from '../components/DrawableCanvas'
import Output from '../components/Output'
import useData from '../utils/Data'


const Home = () => {

  const STYLES = {
    0: 'Vincent Van Gogh',
  }

  const [style, setStyle] = useState(0)
  const [inputImage, setInputImage] = useState(null);
  const [outputImage, setOutputImage] = useState(null)
  const { getPrediction, loading } = useData();


  useEffect(() => {
    if (inputImage === null)
      return

    const fetchData = async () => {
      const response = await getPrediction(style, inputImage);
      if (response.code === 200) {
        setOutputImage(response.data)
      }
      else {
        setOutputImage(null);
      }
    }

    fetchData()

  }, [inputImage])


  return (

    <Grid container  >
      <Grid item xs={12}>
        <StyleSelect value={style} setValue={setStyle} STYLES={STYLES} />
      </Grid>
      <Grid item xs={12} md={6}>
        <DrawableCanvas setInputImage={setInputImage} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Output src={outputImage} loading={loading} />
        {loading === true ? <LinearProgress /> : <></>}
      </Grid>
    </Grid>
  )
}

export default Home