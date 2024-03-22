const { addTask } = require( './singleton' );

addTask( 'task inside test' );

module.exports = {
  sum: (a, b) => a + b
};
