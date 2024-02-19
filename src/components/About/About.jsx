import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import './About.css'
export default function About() {
    const intro = <Typography variant="h4" color="#FFFFFF" letterSpacing='.1rem' lineHeight='3rem'>
        I Am Full Stack Developer
        <br />
        A Javascript Enthusiast <br />
        Expertise in Node.js, React, Microservices, MongoDb, Postgres ...
    </Typography>

    return (
        <Box className='about-main'>
            {/* display={{ xs: 'none', md: 'block' }} */}
            <Grid className='' container rowGap={2} rowSpacing={1}>
                <Grid className='intro-grid' item xs={12} md={6}
                    textAlign='center'
                    justifyContent='center'
                    height={{ xs: '90vh', md: '90vh' }} >
                    <Box className='intro' marginTop={{ xs: "40%", md: '30%' }} width='80%'>
                        {intro}
                    </Box>
                </Grid>
                <Grid className='photo-grid' item xs={12} md={6} >
                    <Box className='photo-img' >
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}
