// Index Signature 多用はしない方がいい
export type User = {
  name: string;
  age: number;
  [key: string]: string | number | undefined;
};

const user: User = {
  name: 'aoba',
  age: 10,
  account: 'aoba__S',
};
user.account;

// Mapped Types
export type User1 = {
  name: string;
} & OptionalPersonalData;

type PersonalData = {
  height: number;
  weight: number;
  a: string;
};

type OptionalPersonalData = {
  [K in keyof PersonalData]-?: PersonalData[K];
};

const user1: User1 = {
  name: 'aoba',
  height: 10,
  weight: 10,
  a: '',
};
