import UserService from "../../services/user-service";

export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  email: string,
  password: string,
  navigate: (
    to: string,
    options?: { replace?: boolean; state?: unknown }
  ) => void
) => {
  e.preventDefault();

  return await UserService.logIn(email, password, navigate).catch(() =>
    alert("login failed, please try again")
  );
};
