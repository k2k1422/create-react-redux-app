import React, { useEffect } from 'react'
import {
    Typography,
    Grid,
    Button
} from '@material-ui/core'
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import { Parallax } from "../../components"

const useStyles = makeStyles(theme => ({
    container: {
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",

        "@media (min-width: 576px)": {
            maxWidth: "540px"
        },
        "@media (min-width: 768px)": {
            maxWidth: "720px"
        },
        "@media (min-width: 992px)": {
            maxWidth: "960px"
        },
        "@media (min-width: 1200px)": {
            maxWidth: "1140px"
        }
    },
    gridContainer: {
        width: "auto"
    },
    gridItem: {
        position: "relative",
        width: "100%",
        minHeight: "1px",
        paddingRight: "15px",
        paddingLeft: "15px",
        flexBasis: "auto"
    },
    title: {
        fontSize: "5rem",
        fontFamily: "Times New Roman",
        display: "inline-block",
        position: "relative",
        marginBottom: theme.spacing(-3)
    },
    subtitle: {
        fontFamily: "Helvetica",
    },
    button: {
        marginTop: theme.spacing(2),
    },
    image: {
        position: "absolute",
        right: theme.spacing(2),
        bottom: theme.spacing(6),
        width: "25%"
    }
}))

const WelcomePage = props => {
    const classes = useStyles()

    useEffect(()=>{
        localStorage.removeItem("speech")
    }, [])

    return (
        <div>
            <Parallax className={classes.root} image={require("../../assets/images/blue_bg3.jpg")}>
                <div className={classes.container}>
                    <Grid
                        container
                        className={classes.gridContainer}
                    >
                        <Grid
                            item
                            className={classes.gridItem}
                        >
                            <div className={classes.brand}>
                                <Typography variant="caption" color="secondary" className={classes.title}>
                                    Auto Insights
                                </Typography>
                                <Typography variant="h5" color="secondary" className={classes.subtitle}>
                                    Visualize your data smartly.
                                </Typography>
                            </div>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="secondary"
                                component={Link}
                                to="/login"
                                push
                            >
                                Get Started
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Parallax>
            <img className={classes.image} src="https://cdn-images-1.medium.com/max/724/1*W0KmVjbf_2-o44AQcI-vgg@2x.png" />
        </div>
    )
}

export default WelcomePage