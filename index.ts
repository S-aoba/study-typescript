type Props = {
  id: string;
  name: string;
  age: number;
};

type filteredString<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

type StringKeys = filteredString<Props>;
