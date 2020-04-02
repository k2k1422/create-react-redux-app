import React, { useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles';
import {
    Radio,
    Checkbox,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Button,
    Typography
} from '@material-ui/core'
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "70vh"
    },
    title: {
        fontSize: "3rem"
    },
    button: {
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(1),
    },
    subtitle: {
        fontWeight: "550",
        fontSize: "1.5rem",
        fontFamily: "Roboto",
    },
    radio: {
    },
    checkbox: {
        fontSize: "0.8rem",
    }
}));

const SelectTable = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState();
    const [state, setState] = React.useState({
        checked: false
    });

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleChangeCheckbox = event => {
        console.log(event.target.checked);
        setState({
            ...state,
            checked: event.target.checked,
        });
    }


    return (
        <div className={classes.root}>
        </div>
    )
}

export default SelectTable;