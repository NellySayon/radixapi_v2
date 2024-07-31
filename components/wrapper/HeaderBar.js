"use client";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

import logo from "../../public/images/logo.png";

import AuthContext from "../context/authContext";
import checkBadge from "../profile/checkBadge";

import { useCookies } from "react-cookie";

import { getChallenge, getJWT } from "../api/auth";

import {
  RadixDappToolkit,
  DataRequestBuilder,
} from "@radixdlt/radix-dapp-toolkit";

const HeaderBar = () => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);
  const [cookies, setCookie] = useCookies(["rdx_jwt"]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const radixDappToolkit = RadixDappToolkit({
      dAppDefinitionAddress: process.env.DAPP_ACCOUNT,
      networkId: Number(process.env.NETWORK_ID),
      //   logger: createLogger(1),
    });

    // check if the user has a cookie
    if (cookies.rdx_jwt) {
      authCtx.setJWT(cookies.rdx_jwt);
    }

    radixDappToolkit.buttonApi.setTheme("white");

    radixDappToolkit.walletApi.setRequestData(
      DataRequestBuilder.accounts().exactly(1).withProof()
    );
    radixDappToolkit.walletApi.provideChallengeGenerator(getChallenge);

    // subscribe to wallet data to check if wallet is connected
    radixDappToolkit.walletApi.walletData$.subscribe((walletData) => {
      if (walletData.accounts.length === 0) {
        // reset the context
        authCtx.setConnected(false);
        authCtx.setBadgeId("");
        authCtx.setJWT("");
      } else {
        authCtx.setConnected(true);
        checkWallet(walletData.accounts[0].address);
        getProof(walletData);
      }
    });

    // check if wallet is still connected
    // const walletData = radixDappToolkit.walletApi.getWalletData();
    // if (walletData.accounts.length > 0) {
    //   authCtx.setConnected(true);
    // }

    authCtx.setRDT(radixDappToolkit);
  }, []);

  const checkWallet = async (account) => {
    try {
      const badges = await checkBadge(account);
      authCtx.setBadgeId(badges.length > 0 ? badges[0] : "");
    } catch (error) {
      console.log("Error during wallet check: ", error);
    }
  };

  const getProof = async (walletData) => {
    try {
      if (walletData.proofs.length > 0) {
        const newJWT = await getJWT(walletData.proofs[0]);
        if (newJWT.jwt != "") {
          authCtx.setJWT(newJWT.jwt);
          authCtx.setBadgeId(newJWT.badge);
          //let the cookie expire in 1 hour
          setCookie("rdx_jwt", newJWT.jwt, { path: "/", maxAge: 3600 });
        }
      }
    } catch (error) {
      console.log("Error during getProof: ", error);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    const route = event.currentTarget.getAttribute("data-route");
    router.push(route);
  };

  return (
    <AppBar
      elevation={0}
      position="absolute"
      sx={{
        height: "80px",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
          mt: 0.5
        }}
      >
        <Link href="/">
          <Image src={logo} className="logo" alt="logo" />
        </Link>

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            overflowY: "auto",
          }}
        >
          <Button size="large" sx={{ my: 2, color: "white" }} href="/">
            Home
          </Button>
          <Button size="large" sx={{ my: 2, color: "white" }} href="/service">
            Service
          </Button>
          <Button size="large" sx={{ my: 2, color: "white" }} href="/pricing">
            Pricing
          </Button>
          <Button size="large" sx={{ my: 2, color: "white" }} href="/start">
            Start
          </Button>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", sm: "none" },
            justifyContent: "flex-end",
            alignItems: "center",
            mr: 1,
          }}
        >
          <IconButton
            edge="end"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem data-route="/" onClick={handleClose}>
              Home
            </MenuItem>
            <MenuItem data-route="/service" onClick={handleClose}>
              Service
            </MenuItem>
            <MenuItem data-route="/pricing" onClick={handleClose}>
              Pricing
            </MenuItem>
            <MenuItem data-route="/start" onClick={handleClose}>
              Get Started
            </MenuItem>
            <MenuItem data-route="/profile" onClick={handleClose}>
              My Profile
            </MenuItem>
          </Menu>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: 1,
          }}
        >
          <IconButton
            color="#white"
            href="/profile"
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
          >
            <AccountCircle sx={{ fontSize: "30px" }} />
          </IconButton>
          <radix-connect-button />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
