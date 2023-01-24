// typeof オブジェクトに対して使用する
export function double(x: number | string) {
  if (typeof x === 'string') return Number(x) * 2;
  return x * 2;
}

// keyof 型定義に対して使用する
export const Obj = {
  123: 'foo',
  bar: 'bar',
};

type Key = keyof typeof Obj;
const key: Key = 123;

function test(x: keyof typeof Obj) {
  return;
}
test()
