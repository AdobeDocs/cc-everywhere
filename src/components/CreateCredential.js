import { React } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GetCredential } from '@adobe/gatsby-theme-aio/src/components/GetCredential';
import creativeCloud from "../pages/assets/cc-icon.png";

const GetCredentialApiKey = () => {

  const { GATSBY_TEMPLATE_ID, GATSBY_PRODUCT_NAME } = process.env;

  const data = useStaticQuery(
    graphql`
    query { 
      allFile(filter: {name: {eq: "DemoCode"}}) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `
  )

  return (
    <GetCredential className="getCredentialContainer" templateId={GATSBY_TEMPLATE_ID} productName={GATSBY_PRODUCT_NAME} >

      <GetCredential.SignIn title="Get credentials" paragraph="Create unique credentials that you will use to call multiple APIs from your application." buttonText="Sign in to create credentials" />

      <GetCredential.Form title="Get credentials" paragraph="Create unique credentials that you will use to call multiple APIs from your application." className="formClass">

        <GetCredential.Form.CredentialName label="Credential name" description="Credential name must be unique and between 6 and 45 characters long and must not contain any special characters. A project will be automatically created with the same name in Adobe Developer Console." range="45" />

        <GetCredential.Form.AllowedOrigins label="Allowed domains (up to 5)" contextHelp={true} contextHelpHeading="What are allowed domains" placeholder="Example: www.domain-1.com, www.domain-2.com, *.my-domain.com, localhost:5000" contextHelpText="To prevent a third party from using your client ID on their own website, the use of your client ID is restricted to a list of domains that you specifically authorize." contextHelpLink="https://www.adobe.com/" contextHelpLabelForLink="Learn more in our documentation" description="Use wildcards to enter multiple subdomains (*.my-domain.com) or commas to separate multiple domains (www.domain-1.com, www.domain-2.com). During local development, you can include ports greater than 1023 with localhost (e.g. localhost:3000). Standard ports (80, 443) will be used for non-localhost domains." />

        <GetCredential.Form.Products label="Included products and services">
          <GetCredential.Form.Product label="Adobe Express Embed SDK" icon={creativeCloud} />
        </GetCredential.Form.Products>

        <GetCredential.Form.Downloads label="Download a personalized code sample" contextHelp={true} contextHelpHeading="Select Language">
          <GetCredential.Form.Download title="JavaScript" href={data?.allFile?.edges[0]?.node?.publicURL} />
        </GetCredential.Form.Downloads>

        <GetCredential.Form.AdobeDeveloperConsole label='By checking this box, you agree to' linkText="Adobe Developer Terms of Use" href="https://wwwimages2.adobe.com/content/dam/cc/en/legal/servicetou/Adobe-Developer-Additional-Terms_en-US_20230822.pdf" />

        <GetCredential.Form.Side>
          <div style="display : flex ; gap : 16px ; flex-direction : column;">
            <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header" >API key credential</h3>
            <p className="spectrum-Body spectrum-Body--sizeM">Submitting this form creates an API Key credential. The API key credential identifies your application to Adobe servers and can help accept or reject requests originating from certain domains.</p>
            <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header" >Learn more</h3>
            <a className="side-documentation" style={{ color: "#0265DC" }} href='https://developer.adobe.com/express/embed-sdk/docs/guides/quickstart/'>Quickstart guide</a>
            <a className='side-documentation' style={{ color: "#0265DC" }} href='https://developer.adobe.com/express/embed-sdk/docs/guides/'>Adobe Express Embed SDK documentation</a>
          </div>
        </GetCredential.Form.Side>

      </GetCredential.Form>

      <GetCredential.UnknownError />

      <GetCredential.Card title="Your credential is ready to use" paragraph="Check the downloads section of your browser for the ZIP file, or find it where you save downloads on your machine." nextStepsLabel="Next steps" nextStepsHref="/credentials/nextsteps" className="card_developer_console">

        <GetCredential.Card.Side>
          <div style="display : flex ; gap : 16px ; flex-direction : column;">
            <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header" >API key credential</h3>
            <p className="spectrum-Body spectrum-Body--sizeM">An API Key credential was created. The API key credential identifies your application to Adobe servers and can help accept or reject request originating from certain domains.</p>
            <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header" >Learn more</h3>
            <a className="side-documentation" style={{ color: "#0265DC" }} href='https://developer.adobe.com/express/embed-sdk/docs/guides/quickstart/'>Quickstart guide</a>
            <a className='side-documentation' style={{ color: "#0265DC" }} href='https://developer.adobe.com/express/embed-sdk/docs/guides/'>Adobe Express Embed SDK documentation</a>
          </div>
        </GetCredential.Card.Side>

        <GetCredential.Card.Products label="Included products and services">
          <GetCredential.Card.Product label="Adobe Express Embed SDK" icon={creativeCloud} />
        </GetCredential.Card.Products>

        <GetCredential.Card.DevConsoleLink heading="Developer Console Project" />

        <GetCredential.Card.CredentialDetails heading="Credential details">
          <GetCredential.Card.CredentialDetails.APIKey heading="API Key" />
          <GetCredential.Card.CredentialDetails.AllowedOrigins heading="Allowed domains" />
          <GetCredential.Card.CredentialDetails.OrganizationName heading="Organization" />
        </GetCredential.Card.CredentialDetails>

      </GetCredential.Card>

      <GetCredential.Return title="Previously created projects" paragraph="Select a project and access your existing credentials for Adobe Express Embed SDK." nextStepsLabel="Next steps" nextStepsHref="/credentials/nextsteps" className="card_developer_console">

        <GetCredential.Return.Side>
          <GetCredential.Return.Side.Custom>
            <div style={{ display: "flex", gap: "30px", flexDirection: "column", width: "100%" }}>
              <h3 className='spectrum-Heading spectrum-Heading--sizeM'>Welcome back</h3>
              <p className="spectrum-Body spectrum-Body--sizeM">View your existing Adobe Express Embed SDK credentials and generate new ones. Quickly access your API keys to keep your projects running efficiently.</p>
            </div>
          </GetCredential.Return.Side.Custom>
          <GetCredential.Return.Side.NewCredential heading="Need another credential?" buttonLabel="Create new credential" />
        </GetCredential.Return.Side>

        <GetCredential.Return.CredentialDetails heading="Credential details">
          <GetCredential.Return.CredentialDetails.APIKey heading="API Key" />
          <GetCredential.Return.CredentialDetails.AllowedOrigins heading="Allowed domains" />
          <GetCredential.Return.CredentialDetails.OrganizationName heading="Organization" />
        </GetCredential.Return.CredentialDetails>

        <GetCredential.Return.ProjectsDropdown label="Projects" subHeading="Only your projects that contain credentials are shown" />

        <GetCredential.Return.ManageDeveloperConsole label="Manage all your projects and credentials on Adobe Developer Console" direction='/console/projects' />

        <GetCredential.Return.DevConsoleLink heading="Developer Console Project" />

        <GetCredential.Return.Products label="Included products and services">
          <GetCredential.Return.Product label="Adobe Express Embed SDK" icon={creativeCloud} />
        </GetCredential.Return.Products>

      </GetCredential.Return>

      <GetCredential.RequestAccess
        title="Get credentials"
        paragraph="Create unique credentials that you will use to call multiple APIs from your application."
      >
        <GetCredential.RequestAccess.RestrictedAccess
          title="Restricted Access"
          buttonLabel="Request access"
        >
          <GetCredential.RequestAccess.RestrictedAccess.Products label="Included products and services">
            <GetCredential.RequestAccess.RestrictedAccess.Products.Product label="Adobe Express Embed SDK" icon={creativeCloud} />
          </GetCredential.RequestAccess.RestrictedAccess.Products>
        </GetCredential.RequestAccess.RestrictedAccess>
      </GetCredential.RequestAccess>

    </GetCredential>

  )
}

export { GetCredentialApiKey };
