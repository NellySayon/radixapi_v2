
import TelegramIcon from "@mui/icons-material/Telegram";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import XIcon from "../icons/xIcon";
import GitBookIcon from "../icons/gitbookIcon";
import SwaggerIcon from "../icons/swaggerIcon";

import Link from "next/link";
import Image from "next/image";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import runsonradix from "../../public/images/runsonradix.png";

export default function Footer() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 3 }}>
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <Image src={runsonradix} alt="RunsOnRadix" className="footerlogo" />

        <Link href="/terms" style={{color: "white"}}>
          <Typography variant="subtitle2" align="center">
            Terms and Conditions
          </Typography>
        </Link>

        <Link href="/privacy" style={{color: "white"}}>
          <Typography variant="subtitle2" align="center">
            Privacy
          </Typography>
        </Link>

        <Typography variant="subtitle2" align="center" color="white">
          © 2024 Upper One LLC
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Link href="mailto:radixapi@upperone.llc" style={{color: "white"}}>
            <MailOutlineIcon />
          </Link>
          <Link href="https://t.me/radixapi" style={{color: "white"}}>
            <TelegramIcon />
          </Link>
          <Link href="https://x.com/radixapi" style={{color: "white"}}>
            <XIcon />
          </Link>
          <Link href="https://docs.radixapi.net" style={{color: "white"}}>
            <GitBookIcon />
          </Link>
          <Link href="https://api.radixapi.net/docs" style={{color: "white"}}>
            <SwaggerIcon />
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
