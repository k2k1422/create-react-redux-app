import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { connect } from "react-redux"
import { closeAlert } from "../actions/alert"
import { getAlertMessage, getAlertStatus } from "../selectors/alert"

const MyApp = (props) => {

    const {
        alert,
        alertStatus,
        closeAlertData
    } = props

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (alertStatus && alert.alertMessage !== undefined) {
            enqueueSnackbar(alert.alertMessage, { variant: alert.alertType})
            closeAlertData()
        }
    }, [alertStatus])

    const handleClick = () => {
        enqueueSnackbar('I love snacks.');
    };

    const handleClickVariant = variant => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('This is a success message!', { variant });
    };

    return (
        <div>
        </div>
    );
}

const Alert = (props) => {

    const {
        alert,
        alertStatus,
        closeAlertData
    } = props

    console.log(alert,alertStatus)

    return (
        <SnackbarProvider maxSnack={3}>
            <MyApp
                alert={alert}
                alertStatus={alertStatus}
                closeAlertData={closeAlertData}
            />
        </SnackbarProvider>
    );
}

const mapStateToProps = state => {
    return {
        alert: getAlertMessage(state),
        alertStatus: getAlertStatus(state),
    }
}

const mapDispatchToProps = dispatch => ({
    closeAlertData: () => {
        dispatch(closeAlert())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert)