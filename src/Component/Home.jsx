import React from 'react';
import { Grid,Button } from '@mui/material';
import { AccountSummary } from './Banking/AccountSummary';
import{useDispatch} from "react-redux"

export const Home = () => {
    const dispatch=useDispatch()
    const handleVazir=()=>{
        dispatch({
            type:"accinfo",
            payload:{
                accNo:5005,
            }
        })
        
    }
    const handleAmit=()=>{
        dispatch({
            type:"accinfo",
            payload:{
                accNo:7007,
            }
        })

    }
    return (
        <div className="main">
        <h1>Home</h1>
        
        <br /><br />  
        <Grid container spacing={2}>
             <Grid item xs={6}>Account Summary</Grid>  
             <Grid item xs={6}>Loan Summary</Grid>
             <Grid item xs={6}>
                <AccountSummary/>
             </Grid>
             <Grid item xs={1}>
                Home Loan
                <Button variant='contained' fullWidth onClick={handleVazir} >Vazir Acc Info</Button>
                </Grid>
                <Grid item xs={1}>
                <Button variant='contained' fullWidth onClick={handleAmit} >Amit Acc Info</Button>
             </Grid>
             
        </Grid>
       

        {/* <img src="/card offer.jpg" alt="" className="photohome" /> */}

        
       </div>
    );
};

export default Home;