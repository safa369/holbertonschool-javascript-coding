#!/usr/bin/node

const fs = require('fs');
const { argv } = require('process');
fs.appendFile(argv[2], argv[3], () => {});
fs.readFile(argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
