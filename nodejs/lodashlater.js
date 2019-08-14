const _=require('lodash');
_.delay(function(text) {
  console.log(text);
}, 1000, 'later');
// => Logs 'later' after one second.