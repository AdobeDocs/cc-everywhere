import { GetCredential } from '@adobe/gatsby-theme-aio/src/components/GetCredential';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import "./Credential.css";

const CreateCredential = () => {
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
  );

  return (

    <GetCredential credentialType="apiKey" className="getCredentialContainer" service="CCEmbedCompanionAPI">

      <GetCredential.SignIn title="Get credentials" paragraph="Create unique credentials that you will use to call the Adobe Express Embed SDK from your application." buttonText="Sign in to create credentials" className="SignInClass" />

      <GetCredential.Form title="Get credentials" paragraph="Create unique credentials that you will use to call the Adobe Express Embed SDK from your application." className="formClass">

        <GetCredential.Form.CredentialName label="Credential name" description="Credential name must be unique and between 6 and 45 character long." range="45" />

        <GetCredential.Form.AllowedOrigins required label="Allowed domains (up to 5)" contextHelp={true} contextHelpHeading="What are allowed domains" placeholder="Example: www.domain-1.com, www.domain-2.com, *.my-domain.com, localhost:5000" contextHelpText="To prevent a third party from using your client ID on their own website, the use of your client ID is restricted to a list of domains that you specifically authorize." contextHelpLink="https://www.adobe.com/" contextHelpLabelForLink="Learn more in our documentation" description="Use wildcards to enter multiple subdomains (*.my-domains.com) or commas to separete multiple domains (www.domain-1.com,www.domain-2.com). During local development, you can include post greater than 1023 with localhost (e.g. localhost:3000). Standard ports(80,443) will be used for non-localhost domains." />

        <GetCredential.Form.Downloads label="Download a personalized code sample" contextHelp={true} contextHelpHeading="Select Language">
          <GetCredential.Form.Download title="JavaScript" href={data?.allFile?.edges[0]?.node?.publicURL} />
        </GetCredential.Form.Downloads>

        <GetCredential.Form.Side>
          <div className='side-container'>
            <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header" >API key credential</h3>
            <p className="spectrum-Body spectrum-Body--sizeM">Submitting this form created an API Key credential. The API key credential identifies your application to Adobe servers and can help accept or reject requests originating from certain domains.</p>
            <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header" >Learn more</h3>
            <a className="side-documentation" href='https://developer.adobe.com/express/embed-sdk/docs/guides/quickstart/'>Authentication documentation</a>
            <a className='side-documentation' href='https://developer.adobe.com/express/embed-sdk/docs/guides'>Adobe Express Embed SDK documentation</a>
          </div>
        </GetCredential.Form.Side>

      </GetCredential.Form>

     <!-- <GetCredential.UnknownError helpLink="https://some_help_link" helpLinkText="Get Help" className="unKnownError" /> -->

      <GetCredential.Card title="Your credential is ready to use" paragraph="Check the downloads section of your browser for the ZIP file, or find it where you save downloads on your machine." nextStepsLabel="Next steps" nextStepsHref="/credentials/nextsteps" devConsoleDirection="project_overview|api_overview|credential_overview" developerConsoleManage="Manage on Developer console" className="card_developer_console">

        <GetCredential.Side>
          <div className='side-container'>
            <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header" >API key credential</h3>
            <p className="spectrum-Body spectrum-Body--sizeM">An API Key credential was created. The API key credential identifies your application to Adobe servers and can help accept or reject request originating from certain domains.</p>
            <h3 className="spectrum-Heading spectrum-Heading--sizeS side-header" >Learn more</h3>
            <a className="side-documentation" href='https://developer.adobe.com/express/embed-sdk/docs/guides/quickstart/'>Authentication documentation</a>
            <a className="side-documentation" href='https://developer.adobe.com/express/embed-sdk/docs/guides'>Adobe Express Embed SDK documentation</a>
          </div>
        </GetCredential.Side>

      </GetCredential.Card>

    </GetCredential>

  )
}

export { CreateCredential };