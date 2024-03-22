console.trace( 'Loading singleton' );

const tasks = [];

module.exports = {
  addTask: task => {
    tasks.push( task );
    console.log('Added task.', tasks );
  },
  getTasks: () => tasks
}
