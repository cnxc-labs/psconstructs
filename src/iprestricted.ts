// import * as apigw from '@aws-cdk/aws-apigateway';
// import * as iam from '@aws-cdk/aws-iam';
// import * as cdk from '@aws-cdk/core';
// //import * as cwlogs from '@aws-cdk/aws-logs';

// import * as _ from 'lodash';
// // import { LambdaRestApiProps } from '@aws-cdk/aws-apigateway';
// // import { CfnResourceDefaultVersion } from '@aws-cdk/core';
// export type scopePlus = cdk.App | cdk.Construct

// export interface IPRestrictedLambdaGatewayProps {
//   allowList?: string[];
// }

// export class IPRestrictedLambdaGateway extends cdk.Construct {
//   readonly endpoint: string;
//   constructor(scope: cdk.Construct, id: string, props: apigw.LambdaRestApiProps) {
//     super(scope, id);
//     let newApiProps = { ...props };

//     // if ( !newApiProps || newApiProps.endpointConfiguration === undefined) {
//     //   newApiProps.endpointConfiguration = apigw.EndpointType.REGIONAL;
//     // }

//     if ( !newApiProps || newApiProps.apiKeySourceType === undefined) {
//       newApiProps.apiKeySourceType = apigw.ApiKeySourceType.HEADER;
//     }

//     if ( !newApiProps || newApiProps.defaultMethodOptions === undefined) {
//       newApiProps.defaultMethodOptions = { apiKeyRequired: true };
//     }

//     // if ( !newApiProps || newApiProps.allowlist === undefined) {
//     //   newApiProps.allowlist = ['0.0.0.0/0'];
//     // }

//     // Default if no policy document passed in
//     if ( !newApiProps || newApiProps.policy === undefined) {
//       const apiRestrictedIPPolicy = new iam.PolicyDocument({
//         statements: [
//           new iam.PolicyStatement({
//             actions: ['execute-api:Invoke'],
//             principals: [new iam.AnyPrincipal()],
//             resources: ['execute-api:/*/*/*'],
//           }),
//           new iam.PolicyStatement({
//             effect: iam.Effect.DENY,
//             principals: [new iam.AnyPrincipal()],
//             actions: ['execute-api:Invoke'],
//             resources: ['execute-api:/*/*/*'],
//             conditions: {
//               NotIpAddress: {
//                 'aws:SourceIp': ['0.0.0.0/0'],
//               },
//             },
//           }),
//         ],
//       });
//       newApiProps.policy = apiRestrictedIPPolicy;
//     }

//     const api = new apigw.LambdaRestApi(scope, id, newApiProps);
//     this.endpoint = api.url;
//   }
// }