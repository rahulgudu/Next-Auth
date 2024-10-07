let a = 0;
let b = 1;
let c;
let res = "";
for (let i = 1; i <= 10; i++) {
  res += a + " ";
  c = a + b;
  a = b;
  b = c;
}
console.log(res);
