import Link from "next/link";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

function TermsPage() {
  return (
    <Paper square elevation={1} sx={{ paddingTop: 12, paddingBottom: 6 }}>
      <Container maxWidth="lg" sx={{ textAlign: "justify" }}>
        <Typography variant="h4" gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography>
          Welcome to RadixAPI, a platform developed by{" "}
          <Link
            href="https://www.upperone.llc"
            target="_blank"
            rel="noreferrer"
          >
            Upper One LLC
          </Link>
          . Please read on to learn the rules and restrictions that govern your
          use of our website, API, proprietary bots and other applications (the
          “Services”). If you have any questions, comments or concerns regarding
          these terms or the Services, please contact us via e-mail at{" "}
          <a
            href="mailto:contact@upperone.llc"
            target="_blank"
            rel="noreferrer"
          >
            contact@upperone.llc
          </a>{" "}
        </Typography>
        <Typography>
          These Terms and Conditions (the “Terms”) are a binding contract
          between you ("you" or "your") and Upper One LLC (“Upper One,” “we”,
          “us” and "our"). Your use of the Services in any way means that you
          agree to all of these Terms, including the Privacy Policy, that you
          can find <Link href="/privacy">here</Link>. If you do not agree to all
          the following, you may not use or access the services in any manner.
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          1. General Usage Rights
        </Typography>
        <Typography>
          By purchasing our API packages, we grant you a non-exclusive,
          non-transferable, non-sublicensable, revocable, limited right to
          access and use the Services for your own personal as well as
          commercial use, subject to your complete compliance with these Terms
          and all applicable laws and regulations. This includes developing,
          testing, and supporting any software application, mobile application,
          website, platform, service or product using our Services. The duration
          of this right is limited to the duration of your purchased package
          either in time or amount of API credits. We reserve the right to
          terminate your access to the Services at any time for any reason
          especially if you violate these Terms or misuse the Services for
          illegal or fraudulent purposes.
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          2. Purchase and Validity of API Credit Points
        </Typography>
        <Typography>
          The provided API endpoints can be used by purchasing API credit
          points. There are different packages available for you to choose from.
          The amount of API credit points and the validity is dependent on the
          chosen package. The payment is done via the connected Radix wallet.
          The given amount in USD will be converted to the equivalent amount in
          XRD at the time of purchase. You will be able to see your purchase
          history, the remaining amount of API credit points and their validity
          in your user profile. In case you purchase another package, the
          validity of the new package will be added to the remaining validity of
          the old package. The amount of API credit points needed for calling a
          specific endpoint can be found on the documentation page of the API
          and differs per endpoint. We reserve the right to change the amount of
          API credit points needed for a specific endpoint at any time. We will
          inform you about any changes to the amount of API credit points needed
          for a specific endpoint via our changelog. You can find the changelog{" "}
          <Link href="/changelog">here</Link>.
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          3. Usage of API Keys
        </Typography>
        <Typography>
          To use our Services you will receive an individual API key to access
          the provided data. This key is only allowed to be used by the provided
          user or project and may not be shared with any third party. If you
          suspect that your API key has been compromised, please contact us
          immediately. It is your responsibility to keep your API key safe and
          we are not liable for any damages that may arise from the use of your
          API key, including but not limited to your API rate limit or your API
          credit points.
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          4. Versioning and Updates
        </Typography>
        <Typography>
          We constantly try to improve our Services and therefore reserve the
          right to update endpoints or add new endpoints at any time. We will
          try to keep the endpoints as stable as possible and will therefore
          only add, update or remove endpoints in a new version. We will try to
          keep the old version available for at least 3 months after the release
          of a new version. However, we reserve the right to remove old versions
          at any time. We will inform you about any changes to the endpoints via
          our changelog. You can find the changelog{" "}
          <Link href="/changelog">here</Link>.
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          5. Availibility
        </Typography>
        <Typography>
          We guarantee a proper IT infrastructure with a monitoring and backup
          strategy. However, we cannot guarantee that our Services will be
          available at all times. Maintenance work, security updates,
          disruptions of the service at our external service providers or other
          reasons may lead to a temporary unavailability of our Services. We
          will try to keep the unavailability as short as possible and will
          inform you about any planned maintenance work via our{" "}
          <Link href="/changelog">changelog</Link>.
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          6. Rate Limits
        </Typography>
        <Typography>
          Rate limits for our API are dependent on the package you buy and mean
          a maximum number of calls per minute. We reserve the right to change
          the rate limits at any time and for any reason, especially but not
          limited to performance impacts on our servers. You agree not to exceed
          or circumvent the aforesaid rate limitation or limitations on the API
          calls. You agree not to use our Services in a manner that can be
          anticipated to exceed reasonable request volume, constitute excessive
          or abusive usage.
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          7. Limitation of Liability
        </Typography>
        <Typography>
          We are not liable for any damages that may arise from the use of our
          Services. This includes, but is not limited to, direct, indirect,
          incidental damages or loss of profit. You therefore acknowledge that
          Upper One does not warrant that our Services will be uninterrupted,
          timely, updated, accurate, secure, error-free, omission-free or
          virus-free.
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          8. Duration of the Terms
        </Typography>
        <Typography>
          We are constantly trying to improve our Services, so these Terms may
          need to change along with our Services. We therefore reserve the right
          to change the Terms at any time and will publish them immediately on
          our website. By continuing to use our Services after such changes, you
          are implicitly agreeing to the changed Terms.
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          9. Individual Agreements
        </Typography>
        <Typography>
          We reserve the right to offer individual agreements to enterprise
          customers. These individual agreements may have individual terms and
          conditions and payment methods. In case of a conflict between the
          individual agreement and these Terms, the individual agreement shall
          prevail. Any individual agreement shall be in writing and signed by
          both parties.
        </Typography>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Last updated: 03.12.2023
        </Typography>
      </Container>
    </Paper>
  );
}

export default TermsPage;
