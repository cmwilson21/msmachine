import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const About = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} alignItems="center" justifyContent="center" >
      {/* <Grid item xs={6} md={4} sx={{display: "center"}}> */}
      <Grid item width="auto" sx={{ display: "center", margin: "12px" }}>
        <Item align="center">
          {/* <Card sx={{ maxWidth: 500 }}> */}
          <Card sx={{ width: "1000px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="275"
                image="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="tools"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Our Story
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Since it's humble beginnings founded in the basement of a grocery store in 1984, Mid-South Machine has grown a legacy of quality services and products. From prototype to production, we lend our expertise along every step of the way. We have proudly been serving the automotive, valve, boiler, oil and gas, construction, heavy equipment, machine building, and nuclear power industries for over 35 years.
                </Typography> 
                ---
                <Typography variant="body2" color="text.secondary">
                  We offer a full range of CNC services, including milling and turning. We also offer Blanchard grinding, fabrication (large jigs to small, precise TIG weldments), warehousing, blanket work (from a few parts a month to 1200 a day for some customers), and a temperature controlled Quality Control lab featuring a wide range of measuring tools and a Zeiss CMM.
                </Typography>
                {/* <Accordion style={{ margin: "10px" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Details</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Certified welders &nbsp;|| &nbsp;Overhead cranes &nbsp;||&nbsp; CNC Fine Plasma&nbsp; ||&nbsp; Bending and forming
                      <br />
                      Carbon steel &nbsp;||&nbsp; Stainless steel &nbsp;|| &nbsp;Alloys&nbsp; ||&nbsp; Aluminum
                    </Typography>
                  </AccordionDetails>
                </Accordion> */}
              </CardContent>
            </CardActionArea>
          </Card>
        </Item>
      </Grid>
    </Grid>
  )
}

export default About
