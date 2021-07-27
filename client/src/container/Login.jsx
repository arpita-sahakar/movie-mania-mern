import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AlertDisplay from './AlertDisplay.jsx';
import { Link as RouterLink, useHistory } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    submitBtn: {
        marginTop: '40px',
        backgroundColor: 'red',
        cursor: 'pointer',
        fontWeight: 900,
        borderRadius: '0.2vw',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        marginRight: '1rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem'
    },
}));

export default function Login({ setLogin, login, setlogedInSignUpUser, setErrMsgs, errMsgs, setLoginVisible, loginVisible }) {
    const classes = useStyles();
    let history = useHistory();

    const LoginUser = () => {
        axios.post("/users/login", login).then(res => {
            console.log(res.data)
            setlogedInSignUpUser(res.data.email);
            history.push("/home")

        }).catch(err => {
            console.log("login err msg");
            setErrMsgs([err.response.data.message]);
            setLoginVisible(true);


            setTimeout(() => {
                setErrMsgs([]);
                setLoginVisible(false);
            }, 2000)

        })
    }

    return (
        <>
            <AlertDisplay errMsgs={errMsgs} loginVisible={loginVisible} />
            <Container className="signUp_container" component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography className="signUp_typography" component="h1" variant="h5">
                        LogIn
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField className="signup_textField"
                            onChange={e => setLogin({ ...login, email: e.target.value })}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField className="signup_textField"
                            onChange={e => setLogin({ ...login, passWord: e.target.value })}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="button"
                            onClick={LoginUser}
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submitBtn}
                        >
                            LogIn
                        </Button>
                        <Grid className="linkCsscontainer">
                            <Grid item>
                                <RouterLink to="/signup" className="link_account">
                                    {"Don't have an account? Sign Up"}
                                </RouterLink>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </>
    );
}