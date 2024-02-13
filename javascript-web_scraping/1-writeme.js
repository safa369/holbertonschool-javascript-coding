#!/usr/bin/node

const fs = require('fs');
const filep = process.argv[2];
const msg = process.argv[3];
fs.appendFile(filep, msg, () => {});
fs.readFile(filep, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
