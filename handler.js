'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
var dynamoDb = new aws_sdk_1.DynamoDB.DocumentClient();
// TODO: This is a hack to set a mock of DynamoDB.DocumentClient. This needs to be replaced 
// with proper mock creation, that does not require exposing public function just to set the mock.
const setDocumentClient = (client) => {
    dynamoDb = client;
};
exports.setDocumentClient = setDocumentClient;
const create = (event, context, callback) => {
    const params = parseDataIntoParams(event.body);
    // write the todo to the database
    dynamoDb.put(params, (error, result) => {
        // handle potential errors
        if (error) {
            console.error(error);
            callback(new Error('Couldn\'t create the todo item.'));
            return;
        }
        // create a response
        const response = {
            statusCode: 200,
            body: "Added successfully"
        };
        callback(null, response);
    });
};
exports.create = create;
/*
Parses the body containing JSON, and transforms it into params that can be used in DynamoDB operations.
*/
const parseDataIntoParams = (body) => {
    console.log("Create");
    console.log(body);
    const data = JSON.parse(body);
    console.log("Parsed");
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            id: data['id'],
            name: data['name'],
            userid: data['user-id'],
            vatnumber: data['vat-number']
        }
    };
    return params;
};
module.exports = {
    create: create,
    setDocumentClient: setDocumentClient
};
