import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "screenshot",
  frameworkVersion: "2",
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
  },
  plugins: ["serverless-webpack"],
  provider: {
    name: "aws",
    region: "ap-northeast-1",
    runtime: "nodejs12.x",
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      S3_BUCKET_NAME: "${env:S3_BUCKET_NAME}",
      URL: "${env:URL}",
    },
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: ["s3:PutObject", "s3:PutObjectAcl"],
        Resource: ["arn:aws:s3:::${env:S3_BUCKET_NAME}/*"],
      },
    ],
  },
  functions: {
    screenshot: {
      handler: "handler.screenshot",
      timeout: 30,
      events: [
        {
          schedule: "cron(* 6,12,18 * * ? *)",
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
