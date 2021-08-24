const spin = [`|`,`/`, `-`, `\\`, `|`,`/`, `-`, `\\`, `|`];

process.stdout.write(`\r${spin[spin.length - 1]}   `);
for (let i = 0; i < spin.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spin[i]}   `);
  }, i * 200 + 100);
}