import { Container, Grid } from '@mui/material'
import React from 'react'
import  './layer.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LayerLeftImg from "../assets/Frame-1.png"
import LayerRightImg from "../assets/Frame-2.png"
import { useSelector } from 'react-redux';

function Layer() {
    const {bgTheme} = useSelector(state=> state.bgTheme);
    console.log("bgTheme",bgTheme);
    return (
        <Container className='comingSoonContainer'>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={"20px"} display={"flex"} alignItems={"center"}>
                <Grid item xs={5} sm={5} md={5} lg={5} xl={4} style={{ cursor: "pointer" }} className='layerCard'>
                    <Card sx={{  maxWidth: 450 }} className='cardItems'>
                        <CardMedia
                            sx={{ height: 270 }}
                            image={LayerLeftImg}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom  component="div" className={bgTheme?"layerTitle2": 'layerTitle'}>
                               <h3 >Connect With People <span >Who Can Help</span></h3>
                            </Typography>
                           
                        </CardContent>
                        <CardActions>
                        <Button variant="outlined" className='cmBtn'>Coming Soon</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={4} style={{ cursor: "pointer" ,paddingLeft:"0"}}>
                    <div className='middleBorder1'>
                        <div className='middleBorder'>
                           <div className="middleBorder3">

                           </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={5} sm={5} md={5} lg={5} xl={4} style={{ cursor: "pointer" }} className='layerCard'>
                    <Card sx={{ maxWidth: 450}} className='cardItems'>
                        <CardMedia
                            sx={{ height: 270 }}
                            image={LayerRightImg}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom  component="div" className={bgTheme?"layerTitle2": 'layerTitle'}>
                               <h3 ><span >Post Your Job </span>For People To See</h3>
                            </Typography>
                           
                        </CardContent>
                        <CardActions>
                        <Button variant="outlined" className='cmBtn'>Coming Soon</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Layer