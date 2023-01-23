import { NextPage } from 'next';

//型推論
const foo1 = 123;

//型アノテーション
const double = (x: number): number | undefined => {
  if (x > 0) {
    return;
  }
  return x * 2;
};

//型アサーション
const foo2 = {} as { bar: number };
foo2.bar = 1;

export const Home: NextPage = () => {
  return <div>Hello</div>;
};
