import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import TableChartRoundedIcon from '@material-ui/icons/TableChartRounded';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { getCurrentPath } from "../../../../selectors/router"
import { connect } from "react-redux"

import { Link, withRouter } from "react-router-dom"
import { Grid } from '@material-ui/core';

const drawerWidth = 60;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        overflow:"hidden"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    icon:{
        color: "red"
    },
    toolbar: theme.mixins.toolbar,
    icons: {
        marginTop: theme.spacing(1),
        // color: theme.palette.blue
    },
    iconSide: {
        color :theme.palette.blue
    }
}));

const ClippedDrawer = (props) => {

    const {
        currentPath
    } = props

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <List>
                    {/* <Tooltip title="Home" placement="right">
                        <ListItem button key={"text"} component={Link} edge="start" to='/home' selected={"/home" === currentPath}>
                            <ListItemIcon>
                                <HomeRoundedIcon/>
                            </ListItemIcon>
                            
                    </ListItem>
                    </Tooltip> */}
                    <Tooltip title="Dashboards" placement="right">
                        <ListItem className={classes.icons} button key={"text1"} component={Link} edge="start" to='/dashboards' selected={"/dashboards" === currentPath}>
                            <ListItemIcon>
                                <DashboardIcon className={classes.iconSide}/>
                            </ListItemIcon>
                        </ListItem>
                    </Tooltip>
                    <Tooltip title="Meetings" placement="right">
                        <ListItem className={classes.icons} button key={"text1"} component={Link} edge="start" to='/viewTable' selected={"/viewTable" === currentPath}>
                        <ListItemIcon >
                                <TableChartRoundedIcon className={classes.iconSide}/>
                        </ListItemIcon>
                    </ListItem>
                    </Tooltip>
                    
                </List>
            </Drawer>
        </div>
    );
}


const mapStateToProps = (state) => ({
    currentPath: getCurrentPath(state)
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ClippedDrawer)