# Overview

This is a simple service, that exposes one unauthenticated REST endpoint /hello and accepts POST http method invocation. When invoked, it will create a new entry in an underlying DynamoDB database.

# Installation:

If you want to deploy this service in your own Serverless account from your local copy of the codebase, follow the steps below.

## Prerequisites
- npm package manager has to be installed

## Deploying to your Serverless account from your local machine
Clone this repo

```
git clone git@github.com:tomasvlach/my-first-service.git
cd my-first-service
```

Install all npm dependencies
```
npm install
```
Install Serverless:
```
npm i serverless -g
```
Login to serverless: (as part of this, you need to setup AWS Credentials for Serverless, details are provided for you by Serverless after login)
```
serverless login
```
Prepare service to be deployed under your Serverless account (<org_name> and <app_name> should be org and app name that exist under your Serverless account)
```
serverless --org <org_name> --app <app_name>
```
Compile
```
tsc
```
Deploy the service into your Serverless account
```
serverless deploy
```
Once the Service is deployed for the first time (provided the AWS Credentials were correctly set up during serverless login), Serverless will create a new stack in the defined AWS Account. It will create one DynamoDB table, which will store information from every successful POST request to the /hellp HTTP endpoint.




# Usage & API specification:

/hello endpoint

POST

Parameters: no parameters supported

Body example:

```
{
    "id":"id-123",
    "name":"Robert",
    "vat-number":"DE123456",
    "user-id":"gid:robert"
}
````