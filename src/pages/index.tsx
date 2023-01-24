import { NextPage } from 'next';

// Intersection Types
type Foo = {
  a: number;
  b: string;
};

type Bar = {
  c: boolean;
};

type FooBar = Foo & Bar;

const Test: FooBar = {
  a: 1,
  b: '',
  c: true,
};

// Union Types
type Foo1 = {
  a: number;
  b: string;
};

type Bar1 = {
  a: string;
  c: boolean;
};

type FooBar1 = Foo1 | Bar1;

const test1: FooBar1 = {
  a: 1,
  b: '',
  c: true,
};
if ('b' in test1) {
  test1.a.toFixed();
}

export const Home: NextPage = () => {
  return <h1>Hello</h1>;
};

export default Home;
