const sentence = "hello there from lighthouse labs";
let timer = 50;
for (const letters of sentence) {
  setTimeout(() => {
  process.stdout.write(letters);
  }, timer)
  timer += 50
}
setTimeout(() => {
  process.stdout.write('\n');
  }, timer)
