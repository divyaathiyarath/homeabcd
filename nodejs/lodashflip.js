const _=require('lodash');
var flipped = _.flip(function() {
    return _.toArray(arguments);
  });
   
  var c=flipped('a', 'b', 'c', 'd');
  console.log(c);
  // => ['d', 'c', 'b', 'a']