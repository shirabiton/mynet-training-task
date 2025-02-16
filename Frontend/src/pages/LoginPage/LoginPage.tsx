import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { handleSubmit } from "./functions";
import useStyles from "./styles";

const LoginPage: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "LOGIN" });

  return (
    <div className={classes.formContainer}>
      <form onSubmit={(e) => handleSubmit(e, email, password)} className={classes.formContent}>
        <h1>{t("TITLE")}</h1>
        <input
          type="text"
          placeholder={t("EMAIL_LABEL")}
          value={email}
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder={t("PASSWORD_LABEL")}
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{t("LOGIN_BUTTON")}</button>
      </form>
    </div>
  );
};
export default LoginPage;
