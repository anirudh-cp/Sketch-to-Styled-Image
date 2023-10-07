import React from 'react'
import { FormControl, Select, MenuItem, FormHelperText, InputLabel, Box } from '@mui/material'

const StyleSelect = ({ value, setValue }) => {
    return (
        <Box sx={{m: 2}}>
        <FormControl sx={{ minWidth: 120, }} variant="standard">
            
        <InputLabel id="demo-simple-select-helper-label">Style</InputLabel>
            <Select
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {
                    ['Vincent Van Gogh',].map((item) => {

                        return (
                            <MenuItem value={item}>{item}</MenuItem>
                        )
                    })
                }
            </Select>
            <FormHelperText>Select the Style to Generate the Image</FormHelperText>
        </FormControl>
        </Box>
    )
}

export default StyleSelect