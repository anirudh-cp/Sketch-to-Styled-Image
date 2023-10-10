import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'

import CanvasDraw from "react-canvas-draw";
import { MuiColorInput } from 'mui-color-input'

import { Box, Button, Grid, FormControl, Select, MenuItem, InputLabel } from '@mui/material';

import ClearIcon from '@mui/icons-material/Clear';
import UndoIcon from '@mui/icons-material/Undo';
import BrushIcon from '@mui/icons-material/Brush';


const DrawableCanvas = ({ setInputImage }) => {
    // Clear canvas, undo, brush size, color

    const saveableCanvas = useRef(null)
    const canvasGridElement = useRef(null);

    const [width, setWidth] = useState(400);
    const [brushRadius, setBrushRadius] = useState(1);
    const [brushColor, setBrushColor] = useState('#000000')

    useLayoutEffect(() => {
        setWidth(canvasGridElement.current.offsetWidth);
    }, []);

    useEffect(() => {
        function handleWindowResize() {
            setWidth(canvasGridElement.current.offsetWidth);
        }

        window.addEventListener('resize', handleWindowResize);
        setInputImage(saveableCanvas.current.getDataURL("png", false, '#FFFFFF'));

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <Grid container alignItems="center" justifyContent="center" >
            <Grid item xs={12} ref={canvasGridElement} display={'flex'} justifyContent={'center'} sx={{ m: 2 }}>
                <CanvasDraw ref={canvasDraw => (saveableCanvas.current = canvasDraw)}
                    brushColor={brushColor} brushRadius={brushRadius} lazyRadius={0}
                    onChange={() => setInputImage(saveableCanvas.current.getDataURL("png", false, '#FFFFFF'))}
                />
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', mx: 2, my: 1, justifyContent: 'space-around', alignItems: 'center' }}>

                <Grid container alignItems="center" justifyContent="center" spacing={2}>

                    <Grid item xs={6} md={3}>
                        <Button startIcon={<ClearIcon />} variant={'outlined'}
                            onClick={() => { saveableCanvas.current.eraseAll() }}>Clear</Button>
                    </Grid>


                    <Grid item xs={6} md={3}>
                        <Button startIcon={<UndoIcon />} variant={'outlined'}
                            onClick={() => { saveableCanvas.current.undo() }}>Undo</Button>
                    </Grid>


                    <Grid item xs={6} md={3}>
                        <FormControl sx={{ minWidth: 120, }} variant="standard">

                            <InputLabel id="demo-simple-select-helper-label" >Brush Size</InputLabel>
                            <Select
                                value={brushRadius} onChange={(event) => { setBrushRadius(event.target.value); }}
                            >
                                {
                                    [1, 2, 5, 7, 10, 15, 20,].map((item) => {
                                        return (<MenuItem value={item} key={item}>{item}</MenuItem>)
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} md={3}>
                        <MuiColorInput helperText={'Brush Color'} value={brushColor} onChange={(color) => { setBrushColor(color) }} />
                    </Grid>

                </Grid>

            </Grid>

            <Grid item xs={12}>
                {/* Add Upload button */}
            </Grid>
        </Grid>
    )
}

export default DrawableCanvas