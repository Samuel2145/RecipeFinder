import TasteSlider from "./TasteSliders.js";
import Result from "./Results.js";
import axios from 'axios'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import React, {useEffect, useState} from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignItems: "center"
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));


const FoodSearch = (props) => {

    const classes = useStyles();

    const [display, setDisplay] = useState([]);

    useEffect( () => {

        axios.get('/user/getTop').then( (res) => {
            setDisplay(res.data);
        });

    },[]);

    const propDisplay = (newDisplay) => {
        setDisplay(newDisplay);
    }

    return(

        <Grid container className={classes.root}>
            <TasteSlider changeDisplay={propDisplay}/>
            <Result toDisplay={display}/>
        </Grid>
    )

}


export default FoodSearch;