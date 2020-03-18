import * as handler from './handler';

test('handlePutResponse', done => {
    const callback = (error, result) => {
        done();
    }

    const clientMock = {
        put: (params, callback) => {
            callback(null, null);
        }
    }

    const event = {
        body: '{"id":"UID-123","name":"robert","vat-number":"DE123456","user-id":"gid:robert"}'
    }

    handler.setDocumentClient(clientMock);
    handler.create(event, null, callback);
})

