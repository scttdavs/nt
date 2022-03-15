const b = require('b');

module.exports =
  b == 'this is package b' ? 'this is package a' : 'who is this?';

console.log('hello from a', b);
