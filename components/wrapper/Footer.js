// import Link from "next/link";
// import Image from "next/image";

// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
// import Divider from "@mui/material/Divider";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";

import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";

import XIcon from "../icons/xIcon";
import GitBookIcon from "../icons/gitbookIcon";

// import runsonradix from "../../public/images/runsonradix.png";
// import ovhcloud from "../../public/images/ovhcloud.png";

// export default function Footer() {
//   return (
//     <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
//       <Grid
//         container
//         direction="row"
//         justifyContent="space-between"
//         alignItems="center"
//       >
//         <Grid item xs={12} sm={4}>
//         <Stack
//             direction="row"
//             spacing={2}
//             justifyContent="center"
//             alignItems="center"
//             sx={{ mb: 1 }}
//           >
//             <Link href="https://t.me/radixapi">
//               <TelegramIcon />
//             </Link>
//             <Link href="https://x.com/radixapi">
//               <XIcon />
//             </Link>
//             <Link href="https://docs.radixapi.net">
//               <GitBookIcon />
//             </Link>
//             <Link href="mailto:radixapi@upperone.llc">
//               <EmailIcon />
//             </Link>
//           </Stack>
//           <Image src={runsonradix} className="footerlogo" alt="radix" />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <Stack
//             direction="row"
//             spacing={1.5}
//             justifyContent="center"
//             alignItems="center"

//           >
//             <Link href="/terms" style={{ color: "#e7eff6" }}>
//               <Typography variant="body2" align="center">
//                 Terms and Conditions
//               </Typography>
//             </Link>
//             <Divider orientation="vertical" color="#e7eff6" flexItem />
//             <Link href="/privacy" style={{ color: "#e7eff6" }}>
//               <Typography variant="body2" align="center">
//                 Privacy Policy
//               </Typography>
//             </Link>
//           </Stack>
//           <Typography variant="body2" align="center" color="#e7eff6">
//             © Upper One LLC. All rights reserved.
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <Typography
//             variant="body2"
//             sx={{
//               textAlign: { xs: "center", sm: "right" },
//               marginTop: { xs: 2, sm: 0 },
//             }}
//             gutterBottom
//             color="#020f9a"
//           >
//             project supported by the
//           </Typography>
//           <Box display="flex" justifyContent="flex-end">
//             <Image src={ovhcloud} className="footerlogo" alt="ovhcloud" />
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

import Link from "next/link";
import Image from "next/image";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import runsonradix from "../../public/images/runsonradix.png";

export default function Footer() {
  return (
    <Container maxWidth="xl" sx={{ mt: 3, mb: 3 }}>
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <Image src={runsonradix} alt="RunsOnRadix" className="footerlogo" />

        <Link href="/terms" style={{ color: "white", textDecoration: "none" }}>
          <Typography variant="subtitle2" align="center">
            Terms and Conditions
          </Typography>
        </Link>

        <Link
          href="/privacy"
          style={{ color: "white", textDecoration: "none" }}
        >
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
          sx={{ mb: 1 }}
        >
          <Link href="https://t.me/radixapi">
            <TelegramIcon />
          </Link>
          <Link href="https://x.com/radixapi">
            <XIcon />
          </Link>
          <Link href="https://docs.radixapi.net">
            <GitBookIcon />
          </Link>
          <Link href="mailto:radixapi@upperone.llc">
            <EmailIcon />
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
