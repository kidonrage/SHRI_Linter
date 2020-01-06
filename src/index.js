const parse = require('json-to-ast');
const { json } = require('./json');

function lint(jsonString) {
  const settings = {
    // Appends location information. Default is <true>
    loc: true,
    // Appends source information to node’s location. Default is <null>
    source: 'data.json'
  };  

  return parse(jsonString, settings)
}
 
console.log(lint(json));