import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Beneficiary } from "./Beneficiary";
import { AccountType } from "./AccountType";
import { Transaction } from "./Transaction";
import { Transfer } from "./Transfer";

export const Banking = () => {
  const [selected, setselected] = useState ("transaction");
  return (
    <React.Fragment>
      <h1>Banking Home</h1>
      <Tabs value={selected} onChange={(e,val)=>setselected(val)} >
                <Tab value="transaction" label="Transaction" ></Tab>
                <Tab value="transfer" label="Transfer" ></Tab>
                <Tab value="benef" label="Beneficiary" ></Tab>
                <Tab value="acctype" label="AccountType" ></Tab>
            </Tabs>
            {selected=="transaction" && <Transaction/>}
            {selected=="transfer" && <Transfer/>}
            {selected=="benef" && <Beneficiary/>}
            {selected=="acctype" && <AccountType/>}
    </React.Fragment>
  );
};
