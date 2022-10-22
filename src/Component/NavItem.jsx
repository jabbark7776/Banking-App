import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { NoEncryption } from "@mui/icons-material";

export const NavItem = ({ path, title, xs }) => {
  return (
    <Grid item xs={xs}>
      <Link
        style={{
          backgroundColor: "white",
          textDecoration: "none",
          borderRadius: "50px",
          padding: "8px",
          marginLeft:"20px"
        }}
        to={path}
      >
        {title}
      </Link>
    </Grid>
  );
};
