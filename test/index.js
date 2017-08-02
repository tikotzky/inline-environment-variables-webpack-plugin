// tested with node 6.3.1
// make sure to run npm install before running the test

const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const example = path.resolve(__dirname, '../example');

process.chdir(example);

// clean the build dir
try{ fs.unlinkSync(path.join(example, 'build/index.js')); } catch (ex) {}

exec(`SHELL=theShell NODE_ENV=theEnv ../node_modules/.bin/webpack`, (err) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  const contents = fs.readFileSync(path.join(example, 'build/index.js'), 'utf-8');
  const needle = `	var a = ("theEnv");
	var b = ("theShell");

	console.log(a);
	console.log(b);`;
  const found = contents.indexOf(needle) !== -1;
  if (!found) {
    throw new Error('Test failed');
  }
  console.log('Test completed successfully');
});

