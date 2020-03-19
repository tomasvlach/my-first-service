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

# Implementation notes

In general, I took a simplistic approach when implementing this service (which is what I would do in general when prototyping something new). Next steps would be to iterate on it and improve it.

## Unit testing
The unit test is super simplistic. I had to resort to a small hack in order to be able to unit test the command handler - the handler module exports an "internal" method, that is used for mocking aws library. I am sure it is possible to mock this in a much cleaner way, however I wasn't abel to get it working in a reasonable time frame, so I used this hack. In real system, this is something I would attempt to fix once the correct approach was found.

## Error handling
The service does not implement any sophisticated error handling. In real system, I would add more logic related to error handling and logging, to allow for better tracability of errors.
