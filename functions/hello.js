// domain/.netlify/functions/hello

exports.handler = async function (event, context) {
  return {
    statusCode: 402,
    body: "Hello, world",
  };
};
