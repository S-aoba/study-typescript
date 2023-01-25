// Generics

export type Foo<T extends string | number = string> = {
  value: T;
};

const foo1: Foo<string> = {
  value: '',
};
const foo2: Foo<number> = {
  value: 111,
};
// type Japanese = User<'東京都' | '大阪府'>;
// type American = User<'CA' | 'NY'>;

// const user1: Japanese = {
//   name: '田中',
//   state: '東京都',
// };
// const user2: American = {
//   name: 'Johnny',
//   state: 'CA',
// };
// const foo: Foo<string> = {
//   value: '',
// };
// const foo1: Foo<number> = {
//   value: 0,
// };
// const foo2: Foo<boolean> = {
//   value: true,
// };
