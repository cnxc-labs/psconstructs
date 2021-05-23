import * as cdk from '@aws-cdk/core';
import { SecureBucket } from './index';

export class IntegTesting {
  readonly stack: cdk.Stack[];
  constructor() {
    const app = new cdk.App();

    const stack = new cdk.Stack(app, 'demo-stack');

    new SecureBucket(stack, 'mMySecureBucket', { });

    this.stack = [stack];
  }
}

new IntegTesting();
