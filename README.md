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
const promiseObject = require('promise-object/src/promiseObject');
```

else node versions and for webpack build

```javascript
const promiseObject = require('promise-object');
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

try {
  const res = promiseObject({
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
```