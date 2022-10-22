import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid,TextField,Button } from '@mui/material';
import axios from 'axios';


export const HomeLogin = () => {
   const [custid,setCustid]=useState(0)
   const[password,setPassword]=useState("")
   const dispatch=useDispatch()
   const handleLogin=async()=>{
      const payload={
         custid,
         password,
      }
      const result=await axios.post("http://localhost:7500/login",payload)
      dispatch({
         type:"loginInfo",
         payload:result.data,
      })
   }
    return (
        <div className="main">
        <h1>Home</h1>
        
        <br /><br />  
        <Grid container spacing={2}>
            
            <Grid item xs={4}>
                <TextField variant="outlined" fullWidth label="Username" onChange={e=>setCustid(e.target.value)} />
                </Grid>
             <Grid item xs={4}>
                <TextField variant="outlined" fullWidth label="Password" type="password" onChange={e=>setPassword(e.target.value)} />
             </Grid>
             <Grid item xs={2}>
              
                <Button variant="contained" fullWidth onClick={handleLogin}  >Login</Button>
              
              </Grid>
             <Grid item xs={2}>
              <a href="/registration" className="icon3" >
                <Button  fullWidth >Registration</Button>
              </a>
              </Grid>
             
        </Grid><br />
       

        <img src="/card offer.jpg" alt="" className="photohome" />

        
       </div>
    );
};

