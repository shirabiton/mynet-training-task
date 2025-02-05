import { FC } from "react";
import { useTranslation } from "react-i18next";
import useStyles from "./styles";

const Footer: FC = () => {
    const { t } = useTranslation("translation", { keyPrefix: "FOOTER" });
    useStyles();

    return <footer>
        <p>{t("COPYRIGHT")}</p>
    </footer>
}
export default Footer;