type Adder = {
  (x: number): number;
  (x: number ,y: number): number;
  (...args: number[]): number;
};

const add: Adder = (x: number ,y?: number, ...args: number[]) => {
  if(args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y  || 0);
  return x + (y  || 0);
}

console.log(add(10));
console.log(add(2, 4));
console.log(add(1, 2, 4));
