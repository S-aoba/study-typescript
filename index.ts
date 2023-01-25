// 関数のGenerics
const foo = <T extends string>(arg: T) => {
  return { val: arg };
};

const foo1 = foo<string>('');
const foo2 = foo(''); //型推論
