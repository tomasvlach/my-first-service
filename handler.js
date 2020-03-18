'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
const dynamoDb = new aws_sdk_1.DynamoDB.DocumentClient();
const create = (event, context, callback) => {
    var data = null;
    try {
        data = JSON.parse(event.body);
    }
    catch (e) {
        console.error("Error when parsing body. " + e);
    }
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            id: data.id,
            name: data.name,
            userid: data['user-id'],
            vatnumber: data['vat-number']
        }
    };
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
const ahoj = (a) => {
    return a * a;
};
exports.ahoj = ahoj;
module.exports = {
    create: create,
    ahoj: ahoj
};
