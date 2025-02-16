import UserService from "../../services/user-service";

export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  email: string,
  password: string
) => {
  e.preventDefault();
  return await UserService.signIn(email, password);
};
