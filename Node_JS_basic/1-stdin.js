function displayMessage() {
  console.log('Welcome to Holberton School, what is your name?');
  process.stdin.on('data', (data) => {
    console.log(`Your name is: ${data.toString()}`);
    process.exit(0);
  });
  process.on('exit', () => {
    console.log('This important software is now closing');
  });
}

module.exports = displayMessage;

if (require.main === module) {
  displayMessage();
}
