type VerifyUserType = (user: User, sentValue: User) => boolean;

type User = {
  username: string;
  password: string;
};

const verifyUser: VerifyUserType = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = {
  username: 'joao',
  password: '123456',
};

const sentUser = {
  username: 'joao',
  password: '123456',
};

const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);

const bdUser2 = {
  username: 'Luis',
  password: '1256',
};

const sentUser2 = {
  username: 'joao',
  password: '123456',
};

const loggedIn2 = verifyUser(bdUser2, sentUser2);
console.log(loggedIn2);
