const { AwsCdkConstructLibrary } = require('projen');

const PROJECT_NAME = 'psconstructs';

const project = new AwsCdkConstructLibrary({
  author: 'Ken Papagno',
  authorAddress: 'kenneth.papagno@concentrix.com',
  cdkVersion: '1.103.0',
  defaultReleaseBranch: 'main',
  name: 'psconstructs',
  repositoryUrl: 'https://github.com/cnxc-labs/psconstructs.git',
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-s3',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-apigateway',
    '@aws-cdk/aws-logs',
    '@aws-cdk/aws-lambda',
  ],
  bundledDeps: ['lodash'],
  devDeps: ['@types/lodash'],
  python: {
    distName: PROJECT_NAME,
    module: 'ps_constructs',
  },
  releaseBranches: ['main'],
});

const common_exclude = ['cdk.out', 'cdk.construct.json', 'images', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);
project.synth();