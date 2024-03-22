const { getTasks } = require( './singleton' );

module.exports = function globalTeardown() {
  console.log( 'tearing down', getTasks() );
}