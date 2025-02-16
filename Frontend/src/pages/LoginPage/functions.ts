import UserService from "../../services/user-service";

export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  email: string,
  password: string
) => {
  e.preventDefault();
  try {
    const res = await UserService.signIn(email, password);
    return res;
  } catch (error) {
    console.log("error", error);
  }
};
