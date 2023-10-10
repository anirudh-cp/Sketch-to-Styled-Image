import React from 'react'
import { FormControl, Select, MenuItem, FormHelperText, InputLabel, Box } from '@mui/material'

const StyleSelect = ({ value, setValue, STYLES }) => {
    return (
        <Box sx={{ m: 2 }}>
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
                    {
                        Object.entries(STYLES).map(([key, value]) => <MenuItem value={key} key={key}>{value}</MenuItem>)

                    }
                </Select>
                <FormHelperText>Select the Style to Generate the Image</FormHelperText>
            </FormControl>
        </Box>
    )
}

export default StyleSelect