import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import ChildFriendly from "@material-ui/icons/ChildFriendly";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Paper from "@material-ui/core/Paper";
import FlightLand from "@material-ui/icons/FlightLand";
import School from "@material-ui/icons/School";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import WorkIcon from "@material-ui/icons/Work";
import {makeStyles} from "@material-ui/core/styles";
import LocalShipping from "@material-ui/icons/LocalShipping";

const classes = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
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

const cardsLeft = {
    textAlign: 'left',
}

const cardsRight = {
    textAlign: 'right',
}

const topText = {
    paddingLeft:'10px',
    paddingRight:'10px',
    paddingTop:'5px'
}

const bottomText = {
    paddingLeft:'10px',
    paddingRight:'10px',
    paddingBottom: '5px'
}

function MyTimeline() {
    return (
        <Timeline align="center">
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">

                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <ChildFriendly />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={cardsLeft}>
                    <Paper elevation={6} className={classes.paper}>
                        <Typography variant="body1" style={topText}>June 4th, 1991</Typography>
                        <Typography variant="caption" display="block" gutterBottom style={bottomText}>Born in Evander, South Africa</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineContent style={cardsRight}>
                    <Paper elevation={6} className={classes.paper}>
                        <Typography variant="body1" style={topText}>February of 1999</Typography>
                        <Typography variant="caption" display="block" gutterBottom style={bottomText}>Moved to Chicago, Illinois</Typography>
                    </Paper>
                </TimelineContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <FlightLand />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">

                    </Typography>
                </TimelineOppositeContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">

                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                        <School />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent style={cardsLeft}>
                    <Paper elevation={6} className={classes.paper}>
                        <Typography variant="body1" style={topText}>August 2009 - May 2013</Typography>
                        <Typography variant="caption" display="block" gutterBottom style={bottomText}>Graduated from Lewis University with a degree in Management Information Systems in 2013</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineContent style={cardsRight}>
                    <Paper elevation={6} className={classes.paper}>
                        <Typography variant="body1" style={topText}>July 2013 - April 2019</Typography>
                        <Typography variant="caption" display="block" gutterBottom style={bottomText}>My career began working for Customer Information Systems as a Software Engineer for JPMorgan Chase in 2013</Typography>
                    </Paper>
                </TimelineContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <AccountBalanceIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">

                    </Typography>
                </TimelineOppositeContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">

                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <LocalShipping color="primary" variant="filled"/>
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent style={cardsLeft}>
                    <Paper elevation={6} className={classes.paper}>
                        <Typography variant="body1" style={topText}>April 2019 - September 2019</Typography>
                        <Typography variant="caption" display="block" gutterBottom style={bottomText}>Moved to Miami, Fl and worked for Florida Power & Light</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineContent style={cardsRight}>
                    <Paper elevation={6} className={classes.paper}>
                        <Typography variant="body1" style={topText}>September 2019 - Present</Typography>
                        <Typography variant="caption" display="block" gutterBottom style={bottomText}>Working for Fiserv in Card Services developing API and Microservices</Typography>
                    </Paper>
                </TimelineContent>
                <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                        <WorkIcon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">

                    </Typography>
                </TimelineOppositeContent>
            </TimelineItem>
        </Timeline>
    );
}

export default MyTimeline;