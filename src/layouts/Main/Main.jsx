import React from "react"
import clsx from "clsx"
import PropTypes from "prop-types"

import { Navbar, SideNavBar } from "./components"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 30,
        height: '100%',
    },
    content: {
        height: '100%',
        marginLeft: theme.spacing(10)
    }
}))

const Main = props => {
    const { children } = props
    const classes = useStyles()

    return (
        <div
            className={clsx({
                [classes.root]: true,
            })}
        >
            <Navbar />
            <SideNavBar />

            <main className={classes.content}>
                {children}
            </main>
        </div>
    )
}

Main.propTypes = {
    children: PropTypes.node
}

export default Main