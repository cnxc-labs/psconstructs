import * as cdk from '@aws-cdk/core';
import { SecureBucket } from './secureBucket';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'MyStack');
// @ts-ignore
new SecureBucket(stack, 'Cdk-Sample-Lib', {
});