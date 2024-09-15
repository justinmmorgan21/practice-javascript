function asyncTask(message, delay) {
  setTimeout(() => console.log(message), delay);
}
asyncTask('First task done!', 2000);
asyncTask('Second task done!', 4000);
asyncTask('Third task done!', 6000);