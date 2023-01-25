// ユーザー定義Typeガード
type UserA = { name: string; lang: 'ja' };
type UserB = { name: string; lang: 'en' };

const isUserA = (user: UserA | UserB): user is UserA => {
  return user.lang === 'ja'; //true or false
};

const isUserB = (user: UserA | UserB): user is UserB => {
  return user.lang === 'en'; //true or false
};

export const foo = (value: any) => {
  try {
    if (isUserA(value)) {
      return value;
    }
    if (isUserB(value)) {
      return value;
    }
  } catch (error) {
    throw new Error('値が正しくありません');
  }
};

export const bar = async () => {
  const res = await fetch('');
  const json = await res.json();
  if (isUserA(json)) {
    return json.lang;
  }
};

const users: (UserA | UserB)[] = [
  { name: '田中', lang: 'ja' },
  { name: '佐藤', lang: 'ja' },
  { name: 'alex', lang: 'en' },
];

// const japanese = users.filter((user) => user.lang === 'ja');
const japanese = users.filter(isUserA);
const notJapanese = users.filter(isUserB);
