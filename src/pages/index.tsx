import { NextPage } from 'next';

// Type alias

type Animals = 'dog' | 'cat' | "rabbit";
type Foo = {
  [key in Animals]: number; //Mapped Types
};

type foo = Foo & {
  dog: 1;
  cat: 1;
};

// interface
interface Foo1 {
  a: number;
}

export const Home: NextPage = () => {
  return <h1>Hello</h1>;
};

export default Home;
