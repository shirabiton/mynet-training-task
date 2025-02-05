import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToHome } from "../../utils/globalFunctions";
import useStyles from "./styles";
import { useTranslation } from "react-i18next";

const NotFoundPage: FC = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const { t } = useTranslation("translation", { keyPrefix: "NOT_FOUND" })


    return <div className={classes.notFoundContainer}>
        <h1>404</h1>
        <p>{t("TEXT")}</p>
        <button onClick={() => navigateToHome(navigate)}>{t("BUTTON_TEXT")}</button>
    </div>
}
export default NotFoundPage;