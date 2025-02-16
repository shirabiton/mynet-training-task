import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorPageProps } from "./types";
import { handleClick } from "./functions";

const ErrorPage: FC<ErrorPageProps> = ({ fallback, resetFunc }) => {
  const navigate = useNavigate();

  return <div onClick={() => handleClick(navigate, fallback, resetFunc)}></div>;
};
export default ErrorPage;
