// Utility Types

// Extract
type Foo = Extract<string | number, string>;
// Exclude
type Foo1 = Exclude<string | number, string>;
// NonNullable
type Foo2 = NonNullable<string | null | undefined>;
// Record
type Foo3 = Record<string, number>;
const obj: Foo3 = {
  a: 0,
};
// Parameters
const bar = (a: string) => {
  return;
};
type Bar = Parameters<typeof bar>;
// Uppercase
type test = Uppercase<'hello'>;
// Lowercase
type test1 = Lowercase<'hello'>;
// Capitalize
type test2 = Capitalize<'hello'>;
// Uncapitalize
type test3 = Uncapitalize<'Hello'>;



