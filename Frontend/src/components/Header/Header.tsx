import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { navigateToHome } from "../../utils/globalFunctions";
import LanguageSwitcher from "../LanguageSwitcher";
import useStyles from "./styles";

const Header: FC = () => {

    const navigate = useNavigate();
    const classes = useStyles();
    const { t } = useTranslation("translation", { keyPrefix: "HEADER" });

    return <header>
        <span className={classes.headerContent}>
            <p onClick={() => navigateToHome(navigate)} title={t("LABEL")}>{t("TITLE")}</p>
            <LanguageSwitcher />
        </span>
    </header>
}
export default Header;

