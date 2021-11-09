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

const Fabrication = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} alignItems="center" justifyContent="center" >
    {/* <Grid item xs={6} md={4} sx={{display: "center"}}> */}
    <Grid item width="auto" sx={{display: "center", margin: "12px"}}>
      <Item align="center">
        {/* <Card sx={{ maxWidth: 500 }}> */}
        <Card sx={{width: "1000px"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="275"
              image="https://images.unsplash.com/photo-1466779561253-0a08336ba2ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              alt="welding"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Fabrication
              </Typography>
              <Typography variant="body2" color="text.secondary">
              You need fabrication work and you need it done well. Partner with a team that gives shape to your structural vision. From large structural fab to small and precise TIG welding, Mid-South’s highly-trained certified welders can build your product. We also provide storage and shipping for your large frame inventory from our own warehouses.
              </Typography>
              <Accordion style={{ margin: "10px" }}>
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
              </Accordion>
            </CardContent>
          </CardActionArea>
        </Card>
      </Item>
    </Grid>
    </Grid>
  )
}

export default Fabrication
