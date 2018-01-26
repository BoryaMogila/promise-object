# promise-object

Work like Promise.all with objects any nesting level
## install

node >= 8

```bash

npm i -save promise-all-object

```

else node versions and for webpack build

```bash

npm i -save promise-all-object@1.*

```

## test

```bash
# test
node --expose-gc test/test.js

```
## usage

```javascript
const promiseObject = require('promise-all-object');

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