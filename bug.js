const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon error: Unexpected token error
//This can happen when there is a syntax error in the code, such as a missing semicolon or parenthesis.
//It can also happen due to issues with the way modules are being imported or used.
//For example, if one of the modules you import has an error, it can cause an unexpected token error in your Express application.

//Another uncommon error: Callback hell
//This is not a specific error, but rather a programming style that can be hard to manage and debug. It happens when you nest too many callbacks within each other.

//Another Uncommon error: Memory Leak
//This is when you create objects or variables in a program that are not released from memory when they are no longer needed.
//Over time, the memory usage of the program grows until eventually, the program crashes.