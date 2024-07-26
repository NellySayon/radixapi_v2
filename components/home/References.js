"use client";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ReferenceCard from "../ui/ReferenceCard";
import Stack from "@mui/material/Stack";

import xidar from "../images/xidar_logo.png";
import rdx from "../images/rdx_logo.svg";
import dmany from "../images/dmany_logo.svg";
import domains from "../images/domains_logo.svg";
import scan from "../images/radixscan_logo.svg";
import oci from "../images/oci_logo.png";

const References = (props) => {
  const plugins = [
    new AutoPlay({
      duration: 2000,
      direction: "NEXT",
      stopOnHover: true,
      delayAfterHover: 100,
    }),
  ];

  return (
    <Paper elevation={4} sx={{ p: 2 }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          spacing={2}
          alignItems={{ xs: "flex-start", sm: "flex-end" }}
          justifyContent="center"
          sx={{ mb: 2 }}
        >
          <Typography variant="h4">Why us?</Typography>
          <Typography variant="h6" color="primary">
            We have been working with Radix data for a long time and listen to 
            the community needs
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          alignItems={{ xs: "flex-start", sm: "flex-end" }}
          justifyContent="center"
          sx={{ mb: 2 }}
        >
          <Typography variant="h4">References</Typography>
          <Typography gutterBottom variant="h6" color="primary">
            These projects trust our data service...
          </Typography>
        </Stack>

        <Flicking
          align="prev"
          circular={true}
          useFindDOMNode={true}
          plugins={plugins}
          gap={10}
        >
          <ReferenceCard
            index={1}
            image={scan}
            title="RadixScan"
            color="#f0f0f0"
            link="https://www.radixscan.io/"
          />
          <ReferenceCard
            index={2}
            image={xidar}
            title="Xidar"
            link="https://xidar.io"
          />
          <ReferenceCard
            index={3}
            image={rdx}
            color="#f0f0f0"
            title="RDX Works"
            link="https://www.rdx.works/"
          />
          <ReferenceCard
            index={4}
            image={dmany}
            title="Dmany"
            link="https://dmany.io/"
          />
          <ReferenceCard
            index={5}
            image={domains}
            color="#f0f0f0"
            title="XRD Domains"
            link="https://xrd.domains/"
          />
          <ReferenceCard
            index={6}
            image={oci}
            title="Ociswap"
            link="https://ociswap.com"
          />
          <ReferenceCard
            index={7}
            image="/images/Logo.png"
            title="Reference 3"
            link="https://google.de"
          />
        </Flicking>
      </Container>
    </Paper>
  );
};

export default References;
