import React from 'react';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PhoneAndroid from "@material-ui/icons/PhoneAndroid";
import Email from "@material-ui/icons/Email";
import Home from "@material-ui/icons/Home";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const classes = makeStyles((theme) => ({
    root: {
        maxWidth: 200,
    },
    media: {
        height: 0,
        paddingTop: '56%',
    },
    cardsLeft:{
        textAlign: 'left',
    }
}));

const cardActionStyling = {
    textAlign: 'left',
}

function ContactCard() {
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    style = {{ height: 0, paddingTop: '56%'}}
                    className={classes.media}
                    image="./images/main_photo.jpg"
                    title="My wife and I"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <PhoneAndroid className={classes.cardsLeft}/> (630) 518-7956<br/>
                        <Email/> rvanwyk9191@gmail.com<br/>
                        <Home/> Chicago, IL<br/>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={cardActionStyling}>
                <Button size="small" color="primary">
                    <Link className='nav-link' exact to={'/resume'}>Resume</Link>
                </Button>
                <Button size="small" color="primary">
                    <Link className='nav-link' exact to={'/java'}>My Java Projects</Link>
                </Button>
                <Button size="small" color="primary">
                    <Link className='nav-link' exact to={'/javascript'}>My JavaScript Projects</Link>
                </Button>
            </CardActions>
        </Card>
    );
}


export default ContactCard;