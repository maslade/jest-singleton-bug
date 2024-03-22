const { getTasks, addTask } = require( './singleton' );

module.exports = function globalTeardown() {
  console.log( 'setting up' );
  addTask( 'task inside global setup' );
}