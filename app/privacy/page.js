
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemText } from "@mui/material";


function PrivacyPage() {
  return (
    <Paper square elevation={1} sx={{ paddingTop: 12, paddingBottom: 6 }}>
      <Container maxWidth="lg" sx={{ textAlign: "justify" }}>
        <Typography variant="h4" sx={{ mb: "10px" }}>
          Privacy Statement
        </Typography>

        <Typography>
          The following information will explain you what will happen with your
          personal data when you visit this website. The term “personal data”
          comprises all data that can be used to personally identify you.
        </Typography>

        <Typography variant="h5" sx={{ mt: "10px", textDecoration: 'underline'}}>
          Data recording on this website
        </Typography>
        <Typography variant="h6">
          Who is the responsible party for the recording of data on this
          website?
        </Typography>
        <Typography >
          The data collected on this website is processed by the operator of the
          website:
        </Typography>
        <Typography >Upper One LLC</Typography>
        <Typography >Suite 201</Typography>
        <Typography >3833 Powerline Road</Typography>
        <Typography >FL 33309 Fort Lauderdale</Typography>
        <Typography >E-mail: contact@upperone.llc</Typography>

        <Typography variant="h6">
          How do we record your data?
        </Typography>
        <Typography >
          We are only collecting data that shall be recorded by our IT systems.
          This data comprises primarily technical information (e.g. web browser,
          operating system or time the site was accessed). This information is
          recorded automatically when you access this website.
        </Typography>

        <Typography variant="h6">
          What are the purposes we use your data for?
        </Typography>
        <Typography >
          A portion of the information is generated to guarantee the error free
          provision of the website. Other data may be used to analyze user
          patterns with the goal to improve the content of the website. We do
          not share or sell your personal information for any purposes.
        </Typography>

        <Typography variant="h6" >
          Analysis tools and tools provided by third parties
        </Typography>
        <Typography >
          Your browsing patterns will be statistically analyzed when you visit
          this website. Such analyses are performed primarily with what we refer
          to as analysis programs.
        </Typography>
        <Typography >
          For detailed information about these analysis programs please consult
          our Data Protection Declaration below.
        </Typography>

        <Typography variant="h5" sx={{ mt: "10px", textDecoration: 'underline'}}>
          Data protection
        </Typography>
        <Typography >
          The operators of this website and its pages take the protection of
          your personal data very seriously. Hence, we handle your personal data
          as confidential information and in compliance with the statutory data
          protection regulations and this Data Protection Declaration.
        </Typography>
        <Typography >
          Whenever you use this website, a variety of personal information will
          be collected. Personal data comprises data that can be used to
          personally identify you. This Data Protection Declaration explains
          which data we collect as well as the purposes we use this data for. It
          also explains how, and for which purpose the information is collected.
        </Typography>
        <Typography >
          We herewith advise you that the transmission of data via the Internet
          (i.e., through e-mail communications) may be prone to security gaps.
          It is not possible to completely protect data against third-party
          access.
        </Typography>

        <Typography variant="h6">
          Information on data transfer to the USA and other non-EU countries
        </Typography>
        <Typography >
          Among other things, we use tools of companies domiciled in the United
          States or other from a data protection perspective non-secure non-EU
          countries. If these tools are active, your personal data may
          potentially be transferred to these non-EU countries and may be
          processed there. We must point out that in these countries, a data
          protection level that is comparable to that in the EU cannot be
          guaranteed. For instance, U.S. enterprises are under a mandate to
          release personal data to the security agencies and you as the data
          subject do not have any litigation options to defend yourself in
          court. Hence, it cannot be ruled out that U.S. agencies (e.g., the
          Secret Service) may process, analyze, and permanently archive your
          personal data for surveillance purposes. We have no control over these
          processing activities.
        </Typography>

        <Typography variant="h6">
          SSL and/or TLS encryption
        </Typography>
        <Typography >
          For security reasons and to protect the transmission of confidential
          content, this website uses either an SSL or a TLS encryption program.
          You can recognize an encrypted connection by checking whether the
          address line of the browser switches from “http://” to “https://” and
          also by the appearance of the lock icon in the browser line.
        </Typography>
        <Typography >
          If the SSL or TLS encryption is activated, data you may transmit to us
          cannot be read by third parties.
        </Typography>

        <Typography variant="h5" sx={{ mt: "10px", textDecoration: 'underline'}}>
          Recording of data
        </Typography>
        <Typography variant="h6">
          Server log files
        </Typography>
        <Typography >
          The system automatically collects and stores information in so-called
          server log files, which your browser communicates to us automatically.
          The information comprises:
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemText primary="- The type and version of browser used" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="- The used operating system" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="- Referrer URL" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="- The hostname of the accessing computer" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="- The time of the server inquiry" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="- The IP address" /> 
          </ListItem>
        </List>
        <Typography >
          This data is not merged with other data sources. This data is recorded
          on the basis of Art. 6(1)(f) GDPR. The operator of the website has a
          legitimate interest in the technically error free depiction and the
          optimization of the operator's website. In order to achieve this,
          server log files must be recorded.
        </Typography>

        <Typography variant="h6">
          Google Tag Manager
        </Typography>
        <Typography >
          We use the Google Tag Manager. The provider is Google Ireland Limited
          (“Google”), Gordon House, Barrow Street, Dublin 4, Ireland.
        </Typography>
        <Typography >
          The Google Tag Manager is a tool that allows us to integrate tracking
          or statistical tools and other technologies on our website. The Google
          Tag Manager itself does not create any user profiles, does not store
          cookies, and does not carry out any independent analyses. It only
          manages and runs the tools integrated via it. However, the Google Tag
          Manager does collect your IP address, which may also be transferred to
          Google's parent company in the United States.
        </Typography>
        <Typography >
          The Google Tag Manager is used on the basis of Art. 6(1)(f) GDPR. The
          website operator has a legitimate interest in the quick and
          uncomplicated integration and administration of various tools on his
          website. If appropriate consent has been obtained, the processing is
          carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25 (1)
          TTDSG, insofar the consent includes the storage of cookies or the
          access to information in the user's end device (e.g., device
          fingerprinting) within the meaning of the TTDSG. This consent can be
          revoked at any time.
        </Typography>

        <Typography variant="h6">
          Google Analytics
        </Typography>
        <Typography >
          This website uses functions of the web analysis service Google
          Analytics. The provider of this service is Google Ireland Limited
          (“Google”), Gordon House, Barrow Street, Dublin 4, Ireland.
        </Typography>
        <Typography >
          Google Analytics enables the website operator to analyze the behavior
          patterns of website visitors. To that end, the website operator
          receives a variety of user data, such as pages accessed, time spent on
          the page, the utilized operating system and the user's origin. This
          data is summarized in a user-ID and assigned to the respective end
          device of the website visitor.
        </Typography>
        <Typography >
          Furthermore, Google Analytics allows us to record your mouse and
          scroll movements and clicks, among other things. Google Analytics uses
          various modeling approaches to augment the collected data sets and
          uses machine learning technologies in data analysis.
        </Typography>
        <Typography >
          Google Analytics uses technologies that make the recognition of the
          user for the purpose of analyzing the user behavior patterns (e.g.,
          cookies or device fingerprinting). The website usage information
          recorded by Google, is transferred to a Google server in the
          United States, where it is stored.
        </Typography>
        <Typography >
          This analysis tool is used on the basis of Art. 6(1)(f) GDPR. The
          operator of this website has a legitimate interest in the analysis of
          user patterns to optimize both, the services offered online and the
          operator's advertising activities. If appropriate consent has been
          obtained, the processing is carried out exclusively on the basis of
          Art. 6(1)(a) GDPR and § 25 (1) TTDSG, insofar the consent includes the
          storage of cookies or the access to information in the user's end
          device (e.g., device fingerprinting) within the meaning of the TTDSG.
          This consent can be revoked at any time.
        </Typography>
        <Typography >
          Data transmission to the US is based on the Standard Contractual
          Clauses (SCC) of the European Commission. Details can be found here:{" "}
          <a
            href="https://privacy.google.com/businesses/controllerterms/mccs/"
            target="_blank"
            rel="noreferrer"
          >
            https://privacy.google.com/businesses/controllerterms/mccs/
          </a>
        </Typography>
        <Typography >
          You can prevent the recording and processing of your data by Google by
          downloading and installing the browser plugin available under the
          following link:{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            https://tools.google.com/dlpage/gaoptout?hl=en
          </a>
        </Typography>
        <Typography >
          For more information about the handling of user data by Google
          Analytics, please consult Google's Data Privacy Declaration at:{" "}
          <a
            href="https://support.google.com/analytics/answer/6004245?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            https://support.google.com/analytics/answer/6004245?hl=en
          </a>
        </Typography>    
      </Container>
    </Paper>
  );
}

export default PrivacyPage;
