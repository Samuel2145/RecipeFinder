import React, {useState, useEffect} from 'react'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {CardContent} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "3%",
        justifyContent: "center"
    },
    card: {
        margin: "2%"
    },
    bigCard: {
        display : "flex",
        flexDirection: "row"
    }
}));


const Result = (props) => {


    const classes = useStyles();

    return(
        <Grid container className={classes.root}>
            <Grid item>
                <Card>

                    <CardContent className={classes.bigCard}>

                        {props.toDisplay.map( (data) => (
                            <Grid item>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardContent>

                                            <Typography gutterBottom variant="h5" component="h2">
                                                {data.Name}
                                            </Typography>

                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {data.Description}
                                            </Typography>

                                        </CardContent>
                                    </CardActionArea>



                                </Card>
                            </Grid>
                        ))}

                    </CardContent>

                </Card>
            </Grid>
        </Grid>
    );

}


export default Result;

/*

<Grid container spacing={8}>

    {props.toDisplay.map( (data) => (
        <Grid item>
            <Card>
                <CardContent>
                    {data.Name}
                </CardContent>

            </Card>
        </Grid>
    ))}


</Grid>

*/