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

const Quality = () => {
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
              image="https://images.unsplash.com/photo-1564901523975-b18a3eb1d11f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
              alt="capiler"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Quality
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Your business demands the highest quality machining. Whether it requires a single, highly-specialized part or thousands, Mid-South provides a complete range of CNC services, including milling, turning, and grinding. By offering the capacity for long-run production or short-term contract work, we can customize our relationship to best suit your needs.
              </Typography>
              <Accordion style={{ margin: "10px" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Equipment</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
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

export default Quality
