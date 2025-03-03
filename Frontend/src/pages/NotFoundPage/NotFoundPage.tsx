import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTES_NAMES } from "../../utils/globalConsts";
import useStyles from "./styles";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "NOT_FOUND" });

  return (
    <div className={classes.notFoundContainer}>
      <h1>404</h1>
      <p>{t("TEXT")}</p>
      <button onClick={() => navigate(ROUTES_NAMES.ITEM_LIST)}>
        {t("BUTTON_TEXT")}
      </button>
    </div>
  );
};
export default NotFoundPage;
