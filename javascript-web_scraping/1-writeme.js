#!/usr/bin/node

const fs = require('fs');
const { argv } = require('process');
fs.writeFile(argv[2], argv[3], (err, data) => {
  if (err) throw err;
  console.log(data);
});
