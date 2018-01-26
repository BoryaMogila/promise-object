const memoryDetect = require('./detectMemoryUsage');
const random = require('./random');
const all = require('../es/promiseObject');


function returnAsyncOperation(defTime) {
  const time = defTime || random(500, 5000);
  return new Promise((r) => {
    setTimeout(() => {
      r(time);
    }, time)
  })
}


const doWork = async () => {
  let res = [];
  console.time('test');
  for (let i = 0; i < 10; i++){
    console.time('testIteration');
    const time = await all({
      op1: returnAsyncOperation(),
      op2: returnAsyncOperation(),
      op3: 'simple field',
      op4: {
        op1: returnAsyncOperation(),
        op2: returnAsyncOperation(),
      },
      op5: [
        returnAsyncOperation(),
        returnAsyncOperation(),
      ]
    });
    console.log(time);
    console.timeEnd('testIteration');
    res.push(time);
    memoryDetect();
  }
  console.log(JSON.stringify(res, null, 4));
  global.gc();
  console.timeEnd('test');
  memoryDetect();
};

doWork();