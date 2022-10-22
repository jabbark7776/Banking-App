import { Button, Grid, TextField, Alert } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import Select from "react-select";
import React from "react";

export const AddBenef = ({ acctyOptions }) => {
  const [accNo, setAccNo] = useState(333556);
  const [refAccNo, setRefAccNo] = useState(876786677);
  const [accType, setAccType] = useState({});
  const [name, setName] = useState("");
  const [limit, setLimit] = useState(1000);
  const [isValid, setIsValid] = useState(false);
  const [msg, setMsg] = useState("");
  const [isActive] = useState(true);

  const handleAddBenef = async () => {
    setTimeout(() => {
      setMsg("");
    }, 2000);
    const payload = {
      accNo,
      name,
      accType: accType.value,
      refAccNo,
      isActive,
      limit,
    };
    const result = await axios.post("http://localhost:7500/addbenefs", payload);
    result.status === 200 && setMsg(result.data);
    result.status === 200 && handleClear();
  };
  const handleClear = () => {
    setAccNo("");
    setName("");
    setLimit(0);
    setAccType({});
    setIsValid("");
  };
  useEffect(() => {}, [msg]);
  useEffect(() => {
    accNo && name && limit >= 1000 && accType
      ? setIsValid(true)
      : setIsValid(false);
  }, [accNo, name,limit, accType]);
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            value={accNo}
            label="Beneficiary Account Number"
            variant="outlined"
            fullWidth
            onChange={(e) => setAccNo(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Select
            options={acctyOptions}
            value={accType}
            placeholder="Select Account Type"
            onChange={(val) => setAccType(val)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={name}
            label="Beneficiary  Name"
            variant="outlined"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Beneficiary Max Limit"
            variant="outlined"
            fullWidth
            onChange={(e) => setLimit(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            color="success"
            variant="contained"
            fullWidth
            disabled={!isValid}
            onClick={handleAddBenef}
          >
            Add Beneficiary
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            color="error"
            variant="contained"
            fullWidth
            onClick={handleClear}
          >
            Clear
          </Button>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          {msg && <Alert serverity="Success">{msg}</Alert>}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
