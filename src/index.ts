import * as kms from '@aws-cdk/aws-kms';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

import * as _ from 'lodash';

/**
 * CNXC Secure S3 Bucket, based on @aws-cdk/aws-s3 Bucket
*/
export class SecureBucket extends cdk.Construct {
/**
 * The following overrides the defaults for the attributes shown below for the bucket
 *
 *
 * parameter | SecureBucket Default | Description
 * ---|---|---
 * encryption  | s3.BucketEncryption.S3_MANAGED | S3 Managed KMS Utilized
 * blockPublicAccess | s3.BlockPublicAccess.BLOCK_ALL | Buckets and objects don't allow public access
 * bucketKeyEnabled | true | Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket.
 * objectOwnership | s3.ObjectOwnership.BUCKET_OWNER_PREFERRED | Bucket owner (account) will own the objects
 * enforceSSL | true | Enforces SSL for all requests
 * versioned |  true | Whether this bucket should have versioning turned on or not.
 *
 * @param scope The parent creating construct (usually `this`).
 * @param id The construct's name.
 * @param attrs A `BucketProps` object (compatible with s3.BucketProps).
 * @stability stable
 */
  constructor (scope: cdk.Construct, id:string, attrs: s3.BucketProps) {
    super(scope, id);

    // bump1

    attrs = _.defaults({}, attrs, {
      encryption: s3.BucketEncryption.KMS,
      encryptionKey: kms.Alias.fromAliasName(this, 's3AliasKey', 'alias/aws/s3'),
      bucketKeyEnabled: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_PREFERRED,
      enforceSSL: true,
      versioned: true,
    });

    const pail = new s3.Bucket(scope, id+'-secure', attrs);
    return pail;
  }

}