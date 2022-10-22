import { Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";
import { NavItem } from "./NavItem";

export const Nav = () => {
  return (
    <React.Fragment>
      <img src="/SBI_YONO_Logo.svg.png" alt="" className="photo" />

      <Grid container spacing={1} className="Nav">
        <a href="/homeLogin">
          <HomeIcon sx={{ height: 40, width: 50 }} />
        </a>
        <NavItem path="/" title="Home" xs={1} />
        <NavItem path="/banking" title="Banking" xs={1} />
        <NavItem path="/cards" title="Card" xs={1} />
        <NavItem path="/loans" title="Loans" xs={1} />
        <NavItem path="/support" title="Support" xs={1} />
        <a href="https://www.facebook.com/StateBankOfIndia/" className="icon2">
          <FacebookIcon />
        </a>
        <a href="https://mobile.twitter.com/theofficialsbi/" className="icon3">
          <TwitterIcon />
        </a>
        <a href="https://www.instagram.com/theofficialsbi/" className="icon4">
          <InstagramIcon />
        </a>
        <a href="https://www.youtube.com/user/TheOfficialSBI" className="icon5">
          <YouTubeIcon />
        </a>
      </Grid>
    </React.Fragment>
  );
};
