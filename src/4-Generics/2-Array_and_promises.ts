type Mytype = number;

const array1: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(array1);

async function promiseAsync() {
  return 1;
}

function promise02(): Promise<Mytype> {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  })
}

promiseAsync().then((result) => console.log(result + 1))
promise02().then((result) => console.log(result + 3))
