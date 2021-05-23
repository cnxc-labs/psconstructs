const { AwsCdkConstructLibrary } = require('projen');

// const PROJECT_NAME = 'psconstructs';

// const project = new AwsCdkConstructLibrary({
//   author: 'Ken Papagno',
//   authorAddress: 'kenneth.papagno@concentrix.com',
//   cdkVersion: '1.103.0',
//   defaultReleaseBranch: 'main',
//   name: 'psconstructs',
//   repositoryUrl: 'https://github.com/cnxc-labs/psconstructs.git',
//   license: 'Apache-2.0',
//   projectType: LIB,
//   cdkDependencies: [
//     '@aws-cdk/core',
//     '@aws-cdk/aws-s3',
//     // '@aws-cdk/aws-iam',
//     // '@aws-cdk/aws-apigateway',
//     // '@aws-cdk/aws-logs',
//     // '@aws-cdk/aws-lambda',
//   ],
//   bundledDeps: ['lodash'],
//   devDeps: ['@types/lodash'],
//   python: {
//     distName: PROJECT_NAME,
//     module: 'ps_constructs',
//   },
//   releaseBranches: ['main'],
// });

// const common_exclude = ['cdk.out', 'cdk.construct.json', 'images', 'yarn-error.log'];
// project.npmignore.exclude(...common_exclude);
// project.gitignore.exclude(...common_exclude);
// project.synth();


const project = new AwsCdkConstructLibrary({
  license: 'Apache-2.0',
  name: 'psconstructs',
  description: 'test cnxc constructs for cdk',
  author: 'Ken Papagno',
  authorAddress: 'kenneth.papagno@concentrix.com',
  repositoryUrl: 'https://github.com/cnxc-labs/psconstructs.git',
  defaultReleaseBranch: 'main',
  keywords: [
    'cdk',
    'cnxc',
  ],

  // creates PRs for projen upgrades
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',

  cdkVersion: '1.105.0',
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-s3',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-apigateway',
    '@aws-cdk/aws-logs',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-kms',
  ],
  // devDependencies: {
  //   'aws-sdk': Semver.caret('2.708.0'),
  // },

  cdkAssert: true,

  docgen: true,
  eslint: true,

  bundledDeps: ['lodash'],
  devDeps: ['@types/lodash'],

  // jsii publishing
  // java: {
  //   javaPackage: 'com.github.cnxc-labs.psconstructs',
  //   mavenGroupId: 'com.github.cnxc-labs',
  //   mavenArtifactId: 'psconstructs',
  // },
  python: {
    distName: 'psconstructs',
    module: 'ps_constructs',
  },
});

const common_exclude = ['cdk.out', 'cdk.construct.json', 'images', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();