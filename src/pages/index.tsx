import { NextPage } from 'next';

//オブジェクトの型定義方法
let obj1: {} = {}; //非推奨

let obj2: object = {}; //非推奨

let obj3: Record<string, Record<'foo', unknown>> = {
  a: { foo: 1 },
}; //非推奨 ネストされた状態だと可読性が低くなる

let obj4: { [key: string]: { foo: unknown } } = {
  a: { foo: 1 },
}; //推奨

let obj5: { a: number; b: string; foo?: string } = {
  a: 1,
  b: 'foo',
  // foo: 'foo',
}; //推奨
export const Home: NextPage = () => {
  return <h1>Hello</h1>;
};

export default Home;
