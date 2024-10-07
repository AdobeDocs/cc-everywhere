import React, { useContext } from 'react';
import { css } from '@emotion/react';
import { ReturnAPIKey } from './ReturnAPIKey';
import { ReturnAllowedOrigins } from './ReturnAllowedOrigins';
import { ReturnClientId } from './ReturnClientId';
import { ReturnClientSecret } from './ReturnClientSecret';
import { ReturnOrganizationName } from './ReturnOrganizationName';
import { ReturnScopes } from './ReturnScopes';
import GetCredentialContext from '../GetCredentialContext';
import { CardImsOrgID } from '../Card/CardImsOrgID';

const ReturnCredentialDetails = ({ clientDetails, clientIdDetails, clientSecretDetails, organizationDetails, scopesDetails, apiKeyDetails, allowedOriginsDetails, organizationName, allowedOrigins, response, imsOrgID}) => {

  const { selectedOrganization } = useContext(GetCredentialContext);

  return (
    <div css={css`
        display : flex;
        flex-direction : column;  
        gap: 32px;
      `}>
              
  <h4 className="spectrum-Heading spectrum-Heading--sizeS">{clientDetails?.heading} </h4>

   {clientDetails.children.map((element) => {
        switch (element.props.heading) {
          case "ReturnAllowedOrigins":
            return (
              <ReturnAllowedOrigins returnCredentialDetails={clientDetails} allowedOrigins={allowedOriginsDetails} returnAllowedOrigins={allowedOrigins} />
            );
          case "ReturnOrganizationName":
            return (
              <ReturnOrganizationName returnCredentialDetails={clientDetails} returnOrganizationName={organizationDetails} organization={organizationName?.name} />
            );
          case "CardImsOrgID":
            return (
              <CardImsOrgID returnCredentialDetails={clientDetails} cardImsOrgID={imsOrgID} imsOrgId={selectedOrganization?.code} />
            );
          case "ReturnAPIKey":
            return (
              <ReturnAPIKey returnCredentialDetails={clientDetails} returnAPIKey={apiKeyDetails} apiKey={response?.workspaces[0]?.credentials[0]?.clientId} />
            );
          case "ReturnClientId":
            return (
              <ReturnClientId returnCredentialDetails={clientDetails} returnClientId={clientIdDetails} clientId={response?.workspaces[0]?.credentials[0]?.clientId} />
            );
          case "ReturnClientSecret":
            return (
              <ReturnClientSecret returnCredentialDetails={clientDetails} returnClientSecret={clientSecretDetails} response={response} />
            );
          case "ReturnScopes":
            return (
              <ReturnScopes returnCredentialDetails={clientDetails} returnScopes={scopesDetails} />
            );
          default:
            return null;
         }
      })}
    </div>
  )
}

export { ReturnCredentialDetails };

{/* {apiKeyDetails && <ReturnAPIKey returnCredentialDetails={clientDetails} returnAPIKey={apiKeyDetails} apiKey={response?.workspaces[0]?.credentials[0]?.clientId} />}
      {allowedOrigins && <ReturnAllowedOrigins returnCredentialDetails={clientDetails} allowedOrigins={allowedOriginsDetails} returnAllowedOrigins={allowedOrigins} />}
      {clientIdDetails && <ReturnClientId returnCredentialDetails={clientDetails} returnClientId={clientIdDetails} clientId={response?.workspaces[0]?.credentials[0]?.clientId} />}
      {clientSecretDetails && <ReturnClientSecret returnCredentialDetails={clientDetails} returnClientSecret={clientSecretDetails} response={response} />}
      {organizationDetails && <ReturnOrganizationName returnCredentialDetails={clientDetails} returnOrganizationName={organizationDetails} organization={organizationName?.name} />}
      {scopesDetails && <ReturnScopes returnCredentialDetails={clientDetails} returnScopes={scopesDetails} />}
      {imsOrgID && <CardImsOrgID returnCredentialDetails={clientDetails} cardImsOrgID={imsOrgID} imsOrgId={selectedOrganization?.code} />} */}
      
 // const Ref = clientDetails.children;
  // {Ref.map((element)=>{
  //   console.log("element.props.heading",element.props.heading)
  //  })
  //  }

