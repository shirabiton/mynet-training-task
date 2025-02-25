import { useTranslation } from "react-i18next";
import { toggleLanguage } from "./functions";
import useStyles from "./styles";

const LanguageSwitcher = () => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const { t } = useTranslation("translation", {
    keyPrefix: "LANGUAGE_SWITCHER",
  });

  return (
    <button
      onClick={() => toggleLanguage(i18n)}
      className={classes.toggleButton}
    >
      {t("OTHER_LANGUAGE")}
    </button>
  );
};

export default LanguageSwitcher;
