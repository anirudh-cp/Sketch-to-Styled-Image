import { Box, LinearProgress } from '@mui/material'
import React from 'react'

const Output = ({ src }) => {
  return (
    <Box sx={{ width: '100%'}}>
        <img src={src}/>
        <LinearProgress />
    </Box>
  )
}

export default Output