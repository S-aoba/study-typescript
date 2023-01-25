// 関数のGenerics
const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

const obj = {
  getProperty: 1,
  bar: 2,
  baz: 3,
};

const hoge = getProperty(obj, 'baz');

// LookUp Types
// type Obj = {
//   a: string;
// };

// type Foo = Obj['a'];
