var output = 0;
for (i = 2; i < process.argv.length; i++) {
  output += Number(process.argv[i]);
}

console.log(output);