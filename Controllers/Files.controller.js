const FilesRouter = require('express').Router();
const fs = require('fs/promises');

async function createFile(data = null) {
  try {
    const content = new Date().toString();
    await fs.writeFile('./files/test.txt', data ? data : content);
  } catch (err) {
    console.log(err);
  }
}

// HTTP METHODS = GET, POST, PUT, DELETE
FilesRouter.get('/createDefaultFile', (request, response, next) => {
  console.log('REQUEST HIT');
  createFile();
  return response.status(200).json({
    message: 'Request hit',
  });
});

FilesRouter.get('/createCustomFile/:content', (request, response, next) => {
  const { content } = request.params;
  createFile(content);
  return response.status(200).json({
    message: 'Request hit',
  });
});

// API: https://stackblitzstartersaqsqlc-ac35--5000--bec01ace.local-credentialless.webcontainer.io/files/createCustomFile
// JAVASCRIPT CODE:
// fetch('https://stackblitzstartersaqsqlc-ac35--5000--bec01ace.local-credentialless.webcontainer.io/createCustomFile', {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "same-origin", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify({
//         content: "Hello"
//     }), // body data type must match "Content-Type" header
//   }).then((response) => response.json()).then((result) => console.log(result)).catch((err) => console.log('ERROR OCCURED', err));


FilesRouter.post('/createCustomFile', async (request, response, next) => {
  const { content } = request.body;
  await createFile(content);
  return response.status(200).json({
    message: 'File created',
  });
});

module.exports = FilesRouter;
