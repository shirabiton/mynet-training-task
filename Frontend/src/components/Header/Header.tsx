import { FC } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTES_NAMES } from "../../utils/globalConsts";
import LanguageSwitcher from "../LanguageSwitcher";
import { toggleLogin } from "./functions";
import useStyles from "./styles";

const Header: FC = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "HEADER" });
  const [cookies] = useCookies(["token", "current-user-name"]);
  const userName = cookies["current-user-name"]
    ? decodeURIComponent(cookies["current-user-name"])
    : t("GUEST_NAME");

  return (
    <header>
      <span className={classes.headerContent}>
        <p
          onClick={() => navigate(ROUTES_NAMES.ITEM_LIST)}
          title={t("LABEL")}
          className={classes.logo}
        >
          {t("LOGO_TEXT")}
        </p>
        <span className={classes.profilePlaceholder}>
          <span className={classes.profileContainer}>
            <CookiesProvider>
              <p>
                {t("WELCOME_MESSAGE")} {userName}
              </p>
            </CookiesProvider>
            <span
              title={t("PROFILE_TITLE")}
              className={classes.profileIcon}
              onClick={() => toggleLogin(cookies, navigate)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </span>
        </span>
        <LanguageSwitcher />
      </span>
    </header>
  );
};
export default Header;
