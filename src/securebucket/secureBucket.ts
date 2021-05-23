import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

import * as _ from 'lodash';
export type scopePlus = cdk.App | cdk.Construct

export class SecureBucket extends cdk.Construct {
  constructor (scope: scopePlus, id:string, bucketProps: s3.BucketProps) {
    super(scope, id);
    bucketProps = _.defaults({}, bucketProps, {
      encryption: s3.BucketEncryption.S3_MANAGED,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_PREFERRED,
      enforceSSL: true,
      versioned: true,
    });
    const pail = new s3.Bucket(scope, id, bucketProps);
    return pail;
  }
}

// export function SecureBucket(scope: scopePlus, id:string, bucketProps: s3.BucketProps) {
//   bucketProps = _.defaults({}, bucketProps, {
//     encryption: s3.BucketEncryption.S3_MANAGED,
//     publicReadAccess: false,
//     blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
//     objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_PREFERRED,
//     enforceSSL: true,
//     versioned: true,
//   });
//   const pail = new s3.Bucket(scope, id, bucketProps);
//   return pail;
// }
