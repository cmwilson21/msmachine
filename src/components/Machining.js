import * as React from 'react';
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


const Machining = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    // <Grid container spacing={2} style={{margin: "2px"}}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="center" justifyContent="center">
      {/* <Grid item xs={6} md={4}> */}
      <Grid item width="auto" sx={{ display: "center", margin: "12px" }}>
        <Item>
          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://images.unsplash.com/photo-1599728613885-bc908f9d6d04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="cnc machine"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CNC Precision Machining
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Your business demands the highest quality machining. Whether it requires a single, highly-specialized part or thousands, we provide a complete range of CNC services, including milling, turning, and grinding. By offering the capacity for long-run production or short-term contract work, we can customize our relationship to best suit your needs.
                </Typography>
                <Accordion style={{ margin: "10px" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Services</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    CNC Precision Milling &nbsp;||&nbsp; 3-D Milling &nbsp;||&nbsp; CNC Precision Turning &nbsp;||&nbsp; Live-Tool Turning &nbsp;|| 4th Axis Machining &nbsp;||&nbsp; Horizontal Milling &nbsp;||&nbsp; Surface Grinding &nbsp;||&nbsp; Blanchard Grinding
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </CardActionArea>
          </Card>
        </Item>
      </Grid>

       {/* <Grid item xs={6} md={4}> */}
       <Grid item width="auto" sx={{ display: "center", margin: "12px" }}>
        <Item>
          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://images.unsplash.com/photo-1601045378965-58f245425f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
                alt="cnc machine"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Expanding Capabilities
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We are always explanding and upgrading our capabilities to meet the needs of our customers. Have a special project in mind? We can help. 
                  We can also provide a complete range of services to meet your needs. With our extensive network of professionals, if we don't have it in house, we have a source for it.
                </Typography>
                <Accordion style={{ margin: "10px" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Machine List</Typography>
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
  {/*       
      <Grid item xs={6} md={4}> 
      <Grid item width="auto" sx={{ display: "center", margin: "12px" }}>
        <Item>
          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1599728613885-bc908f9d6d04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="cnc machine"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CNC Precision Machining
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
                    <Typography>Machine List</Typography>
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
      </Grid>  */}

      {/* <Grid item xs={6} md={4}>
        <Item>

          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1599728613885-bc908f9d6d04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="cnc machine"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Item>
      </Grid>
      <Grid item xs={6} md={4}>
        <Item>

          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1599728613885-bc908f9d6d04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="cnc machine"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Item>
      </Grid> */}
    </Grid>
  );
}

export default Machining