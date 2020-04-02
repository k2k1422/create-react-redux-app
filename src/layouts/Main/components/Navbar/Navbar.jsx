import React, { useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import HomeIcon from '@material-ui/icons/Home'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Link, withRouter, Redirect } from "react-router-dom"
import InputIcon from '@material-ui/icons/Input'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from "react-redux"
import { getUserName, getLogoutStatus } from "../../../../selectors"
import { logout } from "../../../../actions/auth"


const drawerWidth = 330

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        zIndex: theme.zIndex.drawer + 1,
        height: 56
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        height: 56
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 0),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(0),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    title: {
        marginLeft: theme.spacing(18),
        fontSize: "25px"
    },
    image: {
        position: "absolute",
        right: theme.spacing(2),
        width: "10%"
    },
    signOutButton: {
        position: "absolute",
        right: theme.spacing(1),
        color: "white"
    },
    profileIcon: {
        color: "white",
        right: theme.spacing(22),
        position: "absolute"
    },
    userName: {

        right: theme.spacing(8),
        position: "absolute"
    },
    image: {
        position: "absolute",
        // right: theme.spacing(2),
        // bottom: theme.spacing(6),
        width: "8%"
    }
}))


const Navbar = (props) => {

    const {
        userName,
        logoutUser,
        logoutStatus
    } = props

    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [signout, setSignout] = React.useState(false)

    const { history } = props

    const handleBack = () => {
        history.goBack()
    }

    const handleSignOut = () => {
        // TODO: This is temporary.
        // TODO: Sign-out needs to be handled more gracefully
        logoutUser()
    }

    useEffect(() => {
        if (logoutStatus) {
            setSignout(true)
        }
    }, [logoutStatus])

    if (signout) {
        return (
            <Redirect
                to="/login"
            />
        )
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <img className={classes.image} src="https://cdn-images-1.medium.com/max/724/1*W0KmVjbf_2-o44AQcI-vgg@2x.png" />
                    <Typography
                        variant="h6"
                        noWrap
                        color="secondary"
                        className={classes.title}
                    >
                        Product Name
                    </Typography>

                    <AccountCircleIcon
                        className={classes.profileIcon}
                    />

                    <Typography
                        variant="subtitle2"
                        color="secondary"
                        className={classes.userName}


                    >
                        {userName ? userName.slice(0,13):" "} 
                    </Typography>



                    <Tooltip title="Sign out">
                        <IconButton
                            className={classes.signOutButton}
                            color="inherit"
                            onClick={handleSignOut}
                        >
                            <InputIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

            </main>
            <CssBaseline />
        </div>
    )
}

const mapStateToProps = (state) => ({
    userName: getUserName(state),
    logoutStatus: getLogoutStatus(state)
})

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => {
        dispatch(logout())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))