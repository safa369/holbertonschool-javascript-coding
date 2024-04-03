  console.log('Welcome to Holberton School, what is your name?\n');

  process.stdin.on('readable', () => {
    const name = process.stdin.read();
    if (name !== null) {
      console.log(`Your name is: ${name.toString().trim()}`);
    }
  });
  process.on('exit', () => {
    console.log('This important software is now closing\n');});

