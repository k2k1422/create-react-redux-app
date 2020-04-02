import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from "react-router-dom"
import { makeStyles } from '@material-ui/styles'
import {
    Grid,
    Button,
    IconButton,
    TextField,
    Typography,
    Link,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


import { connect } from "react-redux"
import { login } from "../../actions/auth"
import Logo  from './logo.jpg';
import { getAuthErrors } from "../../selectors/auth"

import VisibilityIcon from "@material-ui/icons/Visibility"
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff"

const schema = {
    email: {
        presence: { allowEmpty: false, message: 'is required' },
        email: true,
        length: {
            maximum: 64
        }
    },
    password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 128
        }
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        height: '100vh'
    },
    grid: {
        height: '100%'
    },
    quoteContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    quote: {
        backgroundColor: theme.palette.blue,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    quoteInner: {
        textAlign: 'center',
        flexBasis: '600px'
    },
    quoteText: {
        color: 'white',
        fontWeight: 300,
        fontSize: '90px',
    },
    name: {
        marginTop: theme.spacing(3),
        color: 'white',
        fontSize: '20px',
    },
    bio: {
        color: theme.palette.gray
    },
    contentContainer: {},
    content: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    contentHeader: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    logoImage: {
        marginLeft: theme.spacing(4)
    },
    contentBody: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center'
        }
    },
    form: {
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 125,
        flexBasis: 700,
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        }
    },
    title: {
        marginTop: theme.spacing(3)
    },
    sugestion: {
        marginTop: theme.spacing(2)
    },
    textField: {
        marginTop: theme.spacing(2),
        size:4,
        backgroundColor: theme.palette.white
    },
    signInButton: {
        margin: theme.spacing(2, 0),
        color: 'white',
    },
    failed: {
        color: "red",
        align: "center"
    }
}))


export const SignIn = props => {

    const { history, error } = props

    const classes = useStyles()

    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    })

    const [state, setState] = useState({
        error: "",
        statusError: false
    })

    const [visibility, setVisibility] = useState(false)

    const handleVisible = (e) => {
        setVisibility(!visibility)
      }

    useEffect(() => {

        console.log(error)
        if (error.hasOwnProperty("response_message")){
            setState({
                ...state,
                statusError: true,
                error: error.response_message
            })
        }

    }, [error])


    const handleChange = event => {
        event.persist()

        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === 'checkbox'
                        ? event.target.checked
                        : event.target.value
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true
            }
        }))
        setState({
            ...state,
            statusError: false
        })
    }

    const handleSignIn = (event) => {
        event.preventDefault()
        const { email, password } = formState.values
        props.signin(email, password)
    }

    const hasError = field =>
        formState.touched[field] && formState.errors[field] ? true : false

        console.log(Logo)
    const handleBack = () => {
        history.goBack()
    }

    console.log(state)

    return (
        <div className={classes.root}>
            <Grid
                className={classes.grid}
                container
            >
                <Grid
                    className={classes.quoteContainer}
                    item
                    lg={7}
                >
                    <div className={classes.quote}>
                        <div className={classes.quoteInner}>
                            <Typography
                                className={classes.quoteText}
                            >
                                Product Name
                            </Typography>
                            <div className={classes.person}>
                                <Typography
                                    className={classes.name}
                                >
                                    quattation
                                
                                    </Typography>
                            </div>
                            
                        </div>
                    </div>
                </Grid>
                <Grid
                    className={classes.content}
                    item
                    lg={5}
                    xs={12}
                >
                    <div className={classes.content}>
                        <div className={classes.contentHeader}>
                        </div>
                        <div className={classes.contentBody}>
                            <form
                                className={classes.form}
                                onSubmit={handleSignIn}
                            >
                                <Typography
                                    className={classes.title}
                                    variant="h4"
                                >
                                    Sign in
                                </Typography>

                                <TextField
                                    className={classes.textField}
                                    error={hasError('email')}
                                    fullWidth
                                    size='small'
                                    helperText={
                                        hasError('email') ? formState.errors.email[0] : null
                                    }
                                    label="Email"
                                    name="email"
                                    onChange={handleChange}
                                    type="text"
                                    value={formState.values.email || ''}
                                    variant="outlined"
                                />
                                <TextField
                                    className={classes.textField}
                                    error={hasError("password")}
                                    fullWidth
                                    size='small'
                                    helperText={
                                        hasError("password") ? formState.errors.password[0] : null
                                    }
                                    label="Password"
                                    name="password"
                                    onChange={handleChange}
                                    type={visibility ? "text" : "password"}
                                    value={formState.values.password || ""}
                                    variant="outlined"
                                    data-testid="password"
                                    InputProps={{
                                        endAdornment: (
                                        <IconButton position="end" size="small" onClick={handleVisible}>
                                            {visibility ? (
                                            <VisibilityOffIcon />
                                            ) : (
                                            <VisibilityIcon />
                                            )}
                                        </IconButton>
                                        ),
                                    }}
                                    />
                                <Button
                                    className={classes.signInButton}
                                    color="primary"
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                >
                                    Sign in
                                </Button>

                               {/* { 
                               state.statusError?
                               <Typography
                                    variant="h8"
                                    className={classes.failed}
                                >
                                    {state.error} 
                                </Typography>
                                :<></>
                                } */}
                                <Typography
                                    color="textSecondary"
                                    variant="h5"
                                >
                                    <Link
                                        component={RouterLink}
                                        to="/reset"
                                        variant="h6"
                                    >
                                        Forgot password?</Link>
                                </Typography>
                            </form>
    
                        </div>
                       
                    </div>
                    <img src={Logo} alt="puru" width="50%" style={{ alignSelf: 'flex-end'}}></img>
                </Grid>
            </Grid>
        </div>
    )
}

SignIn.propTypes = {
    isAuthenticated: PropTypes.bool,
    authErrors: PropTypes.object,
    history: PropTypes.object,
    access_token: PropTypes.string,
    uid: PropTypes.string
}

const mapStateToProps = state => {
    return {
        error: getAuthErrors(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    signin: (email, password) => {
        dispatch(login(email, password))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)