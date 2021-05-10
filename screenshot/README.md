# README

## Requirements

- Node.js 12.x
- Serverless Framework 2.x
- AWS CLI

## Deploy

```shell
$ aws s3 mb s3://your-sandbox --region ap-northeast-1
```

```shell
$ URL=<screehshot-target-url> S3_BUCKET_NAME=<your-sandbox> sls deploy-f screenshot
```
