import { FC } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { navigateToHome } from "../../utils/globalFunctions";
import LanguageSwitcher from "../LanguageSwitcher";
import useStyles from "./styles";

const Header: FC = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "HEADER" });
  const [cookies] = useCookies(["current-user-name"]);
  const userName = cookies["current-user-name"]
    ? cookies["current-user-name"]
    : t("GUEST_NAME");

  return (
    <header>
      <span className={classes.headerContent}>
        <p
          onClick={() => navigateToHome(navigate)}
          title={t("LABEL")}
          className={classes.logo}
        >
          {t("TITLE")}
        </p>
        <CookiesProvider>
          <p>
            {t("WELCOME_MESSAGE")} {userName}
          </p>
        </CookiesProvider>
        <LanguageSwitcher />
      </span>
    </header>
  );
};
export default Header;
