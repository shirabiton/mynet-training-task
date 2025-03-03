export type User = {
  _id: string;
  fullName: string;
  email: string;
  password: string;
};

export type FetchedUser = Omit<User, "password">;
