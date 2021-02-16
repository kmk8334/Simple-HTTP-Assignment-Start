const textHandler = require('./textResponses.js');

const getHelloJSON = (request, response) => {
  const helloJSON = {
    message: textHandler.hello,
  };
  const stringMessage = JSON.stringify(helloJSON);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

const getTimeJSON = (request, response) => {
  const timeJSON = {
    time: textHandler.getTimeString(),
  };
  const stringMessage = JSON.stringify(timeJSON);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

module.exports = {
  getHelloJSON,
  getTimeJSON,
};
