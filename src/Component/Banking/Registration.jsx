import { Button, Grid, TextField,Alert } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

export const Registration = () => {
  const [accType, setAccType] = useState({});
  const [acctyOptions, setAcctypeOption] = useState([]);
  const [custid, setCustid] = useState(0);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const[repassword,setRepassword]=useState("")
  const [isActive, setIsActive] = useState(true);
  const [msg, setMsg] = useState("");

  const getData = async () => {
    const result = await axios.get("http://localhost:7500/accounttypes");
    setAcctypeOption(result.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async () => {
    const payload = ({
      custid,
      fname,
      lname,
      password,
      repassword,
      accType:accType.value,
      isActive,
    });
    const result = await axios.post(
      "http://localhost:7500/registrations",
      payload
    );
    result.status === 200 && setMsg(result.data);
  };
  useEffect(() => {
    if (msg) {
      setTimeout(() => {
        setMsg("");
      }, 2000);
    }
  }, [msg]);

  return (
    <div className="main">
      <h1>Register New Account</h1>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                <TextField onChange={(e)=>setCustid(e.target.value)} variant="outlined" type="number" fullWidth label="Customer ID"/> <br /><br />
                </Grid>
                <Grid item xs={4}>
                <TextField onChange={(e)=>setFname(e.target.value)} variant="outlined" type="text" fullWidth label="First Name"/> <br /><br />
                </Grid>
                <Grid item xs={4}>
                <TextField onChange={(e)=>setLname(e.target.value)} variant="outlined" type="text" fullWidth label="Last Name"/> <br /><br />
                </Grid>
                <Grid item xs={4}>
                <TextField onChange={(e)=>setPassword(e.target.value)} variant="outlined" type="password" fullWidth label="Password"/> <br /><br />
                </Grid>
                <Grid item xs={4}>
                <TextField onChange={(e)=>setRepassword(e.target.value)} variant="outlined" type="password" fullWidth label="Re-Password"/> <br /><br />
                </Grid>
                <Grid item xs={4}>
                <Select  value={accType} onChange={(val)=>setAccType(val)} options={acctyOptions} fullWidth placeholder="Select Account Type"/>
                </Grid>
                </Grid>

                <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Button onClick={handleSubmit} variant="contained" size="large">Submit</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" size="large">Cancel</Button> 
                </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}> </Grid>
                    <Grid item xs={6}>{msg && <Alert severity="success">{msg}</Alert>} </Grid>
            </Grid>
      
      

      

        
    </div>
  );
};
