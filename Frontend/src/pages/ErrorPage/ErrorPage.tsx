import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { handleClick } from "./functions";
import { ErrorPageProps } from "./types";

const ErrorPage: FC<ErrorPageProps> = ({ fallback, resetFunc }) => {
  const navigate = useNavigate();

  return <div onClick={() => handleClick(navigate, fallback, resetFunc)} />;
};
export default ErrorPage;
