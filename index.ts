// Utility Types

// ReturnType
const foo = (id: string, age: number) => {
  return 0;
};

type Foo = ReturnType<typeof foo>;

type User = {
  name: string;
  age: number | null;
  country?: 'US' | 'UK' | 'JP';
};

// Readonly
type ReadonlyUser = Readonly<User>;
// Partial
type PartialUser = Partial<User>;
// Required
type RequiredUser = Required<User>;
// Pick
type PickUser = Pick<User, 'name' | 'country'>;
// Omit
type OmitUser = Omit<User, 'age'>;

const user: OmitUser = {
  name: 'aoba',
  // age: 30,
  country: 'UK',
};
