/* 
in package.json:

"watch": "tsc -w",
instead of:
"start": "ts-node src/index.ts"

This is because it compiles faster.

To run this code:
node dist/index.js
or update "start" to:
"start": "node dist/index.js"

I can also use nodemon
install:
npm i -D nodemon

How to use:
"dev": "nodemon dist/index.js",

So, we have:
  "scripts": {
    "watch": "tsc -w",
    "dev": "nodemon dist/index.js",
    "dev2": "nodemon --exec ts-node src/index.ts",
    "start": "node dist/index.js",
    "start2": "ts-node src/index.ts"
  },
*/

console.log("hello world, how are you?");
