function displayMessage() {
  console.log('Welcome to Holberton School, what is your name?\n');

  process.stdin.on('readable', () => {
    const name = process.stdin.read();

    if (name.length > 0) {
      process.stdout.write(`Your name is: ${name}`);
    }
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}

module.exports = displayMessage;

if (require.main === module) {
  displayMessage();
}
