import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useStorage} from '../components/hooks/useStorage';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Service = () => {
    let [count,setCount] = useStorage('ProductX',0);
    const classes = useStyles();
    return (
        <>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh',flexDirection:'column'}}>
                <h1>Services</h1>
                <div className={classes.root}>
                    <Button variant="contained" color="primary" onClick={()=>{setCount(count+1)}}>Click to increse the ProductX</Button>
                    <Button variant="contained" color="secondary" onClick={
                        ()=>{
                                setCount(count-1);
                            }
                        }>Click to decrease the ProductX</Button>
                </div>
                <h2>Cart:{count}</h2>
            </div>
        </>
    )
}

export default Service;
