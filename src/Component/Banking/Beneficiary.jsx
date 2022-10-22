import { Card, CardContent } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { AddBenef } from "./AddBenef";

export const Beneficiary = () => {
  const [acctyOptions, setAcctypeOption] = useState([]);
  const getData = async () => {
    const result =await axios.get("http://localhost:7500/accounttypes");
    setAcctypeOption(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <h3>Beneficiary Home</h3>
      <Card className="main">
        <CardContent>
          <AddBenef acctyOptions={acctyOptions} />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
