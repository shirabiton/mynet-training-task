import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { handleSubmit } from "./functions";

const LoginPage: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation("translation", { keyPrefix: "LOGIN" });

  return (
    <>
      <h1>{t("TITLE")}</h1>
      <form onSubmit={(e) => handleSubmit(e, email, password)}>
        <input
          type="text"
          placeholder={t("EMAIL_LABEL")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder={t("PASSWORD_LABEL")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{t("LOGIN_BUTTON")}</button>
      </form>
    </>
  );
};
export default LoginPage;
