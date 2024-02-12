#!/usr/bin/node

const fs = require('fs');
const { argv } = require('process');
fs.appendFile(argv[2], argv[3], (err) => {
  if (err) throw err;
  console.log();
});
