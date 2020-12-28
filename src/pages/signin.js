import React from 'react';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
    },
    },
}));

export default function SignIN() {
    const classes = useStyles();

    return (
    <form className={classes.root} Validate autoComplete="on">
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'50vh',flexDirection:'column'}}>
        <TextField
            label="Email"
            type="email"
            autoComplete="current-email"
            variant="outlined"
            id="email"
        />
        <TextField
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            id="password"
        />
        <div className={classes.root}>
                    <Link to='/signup'>
                        <Button style={{marginTop:'20px',marginRight:'20px',zIndex:'1'}} variant="contained" color="primary" onClick={()=>{console.log(document.getElementById('email').value)}}>&larr; Sign Up</Button>
                    </Link>
                    <Button style={{marginTop:'20px',zIndex:'1'}} variant="contained" color="secondary">Sign In</Button>
                    
                </div>
        </div>
    </form>
    );
}