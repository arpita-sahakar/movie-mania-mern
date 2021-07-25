
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function SimpleAlerts({ errMsgs, loginVisible }) {
    const classes = useStyles();

    if (loginVisible === true) {
        return (
            <div className={classes.root}>
                {errMsgs.map(errMs => {
                    return <Alert variant="filled" severity="error">
                        {errMs}
                    </Alert>
                })}

            </div>
        );
    } else {
        return <div></div>
    }

}
