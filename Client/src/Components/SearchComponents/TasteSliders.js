import React, {useState} from 'react'
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {CardContent} from "@material-ui/core";
import axios from "axios";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "5vh",
        paddingBottom: "1vh"
    },
    button: {
        padding: "3vh"
    }
}));


const TasteSlider = (props) => {


    const classes = useStyles();

    const Taste = {
        Umami: 1,
        Bitter: 1,
        Sour: 1,
        Salty: 1,
        Sweet: 1
    }

    const sliderChange = (event, value) => {

        const sliderName = event.target.attributes[4].nodeValue;

        Taste[sliderName] = value;
    }

    const submitSliders = () => {

        console.log(Taste);

        axios.get('/recipe/getRecipes', {params: {Taste:Taste}}).then( (res) => {

            props.changeDisplay(res.data);

        })
    }

    return (

        <Grid container className={classes.root}>
            <Grid item>
                <Card>
                    <CardContent>
                        <Grid container justify={"center"} spacing={10}>
                            {['Sweet', 'Salty', 'Umami', 'Bitter', 'Sour'].map((value) => (
                                <Grid key={value} item>

                                    <Typography id={value} gutterBottom>
                                        {value}
                                    </Typography>
                                    <Slider
                                        defaultValue={0}
                                        aria-labelledby={value}
                                        valueLabelDisplay="auto"
                                        step={1}
                                        min={1}
                                        max={5}
                                        onChangeCommitted={sliderChange}
                                    />

                                </Grid>))}
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item className={classes.button}>
                <Button variant={"contained"} color={"primary"} onClick={submitSliders}>
                    Find a recipe!
                </Button>
            </Grid>

        </Grid>
    )

}


export default TasteSlider;