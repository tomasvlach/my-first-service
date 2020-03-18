"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handler = require("./handler");
test('basic', () => {
    expect(handler.ahoj(2)).toBe(4);
});
// test('create', done => {
//     const event = {
//         body: `
//             {"id":"UID-123","name":"robert","vat-number":"DE123456","user-id":"gid:robert"}
//         `
//     }
//     const callback = (result) => {
//         console.log(result);
//         done();
//     }
//     // expect(handler.create(event, null, callback)).toBeTruthy();
//     handler.create(event, null, callback);
// })
