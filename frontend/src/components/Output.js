import { Box, LinearProgress } from '@mui/material'
import React from 'react'

const Output = ({ src }) => {
  return (
    <Box sx={{ width: '100%', alignItems: "center", display: 'flex', height: '400px', justifyContent: 'center' }}>
      <img src={src} />
    </Box>
  )
}

export default Output