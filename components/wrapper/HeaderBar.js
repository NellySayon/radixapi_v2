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
import Avatar from "@mui/material/Avatar";

import logo from "../../public/images/logo.png";

import WalletContext from "../context/walletContext";
//import { checkWallet } from "./saveWalletContent";

import {
  RadixDappToolkit,
  DataRequestBuilder,
} from "@radixdlt/radix-dapp-toolkit";

const HeaderBar = () => {
  const router = useRouter();
  const walletCtx = useContext(WalletContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const radixDappToolkit = RadixDappToolkit({
      dAppDefinitionAddress: process.env.DAPP_ACCOUNT,
      networkId: Number(process.env.NETWORK_ID),
    });

    radixDappToolkit.buttonApi.setTheme("black");
    radixDappToolkit.buttonApi.setMode("dark");

    radixDappToolkit.walletApi.setRequestData(
      DataRequestBuilder.persona(),
      DataRequestBuilder.accounts().exactly(1)
    );

    // subscribe to wallet data to get the accounts
    radixDappToolkit.walletApi.walletData$.subscribe((walletData) => {
      if (walletData.accounts.length === 0) {
        // reset the context
        walletCtx.setConnected(false);
        walletCtx.setAccount("");
        walletCtx.setNonFungibles([]);
        walletCtx.setNftTickets([]);
        walletCtx.setFungibles(0);
      } else {
        //   checkWallet(walletData.accounts[0].address, walletCtx);
      }
    });

    walletCtx.setRDT(radixDappToolkit);
  }, []);

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
      color="transparent"
      elevation={0}
      position="absolute"
      sx={{
        height: "80px",
        backgroundColor: "#1e1e1e",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
          mt: 0.5,
          mr: "8px",
          ml: "8px",
          padding: {
            xs: "0 4px",
            sm: "0 24px",
          },
          maxWidth: "xl",
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
          <Link href="/#about" style={{ color: "white" }}>
            <Button size="large" sx={{ my: 2, color: "white" }}>
              Service
            </Button>
          </Link>

          <Link href="/#lab" style={{ color: "white" }}>
            <Button
              size="large"
              sx={{ my: 2, color: "white", minWidth: "70px" }}
            >
              Pricing
            </Button>
          </Link>
          <Link href="/#projects" style={{ color: "white" }}>
            <Button
              size="large"
              sx={{
                my: 2,
                color: "white",
              }}
            >
              Docs
            </Button>
          </Link>
          <Link href="/#projects" style={{ color: "white" }}>
            <Button
              size="large"
              sx={{
                my: 2,
                color: "white",
              }}
            >
              Help
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", sm: "none" },
            justifyContent: "flex-end",
            alignItems: "center",
            mr: 2,
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
            <MenuIcon fontSize="medium"/>
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
            <MenuItem data-route="/#about" onClick={handleClose}>
              About
            </MenuItem>
            <MenuItem data-route="/#lab" onClick={handleClose}>
              Lab
            </MenuItem>
            <MenuItem data-route="/#projects" onClick={handleClose}>
              Projects
            </MenuItem>
          </Menu>
        </Box>
        <radix-connect-button />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
