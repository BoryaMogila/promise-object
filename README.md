# promise-object

Work like Promise.all with objects any nesting level
## install

```bash

npm i -save promise-object

```
## test

```bash
# test
node --expose-gc test/test.js

```
## usage

node ^8.*

```javascript
const promiseObject = require('promise-all-object/src/promiseAllObject');
```

else node versions and for webpack build

```javascript
const promiseObject = require('promise-all-object');
```

```javascript
promiseObject({
  op1: asyncOperation(),
  op2: asyncOperation(),
  op3: 'simple field',
  op4: {
    op1: asyncOperation(),
    op2: asyncOperation(),
  },
  op5: [
    asyncOperation(),
    asyncOperation(),
  ]
}).then(res => {
  // do something...
}).catch(e => {
  console.log(e);
});

// or
async () => {
  try {
    const res = await promiseObject({
      op1: asyncOperation(),
      op2: asyncOperation(),
      op3: 'simple field',
      op4: {
        op1: asyncOperation(),
        op2: asyncOperation(),
      },
      op5: [
        asyncOperation(),
        asyncOperation(),
      ]
    });
    // do something...
  } catch (e){
    console.log(e);
  }
}

```