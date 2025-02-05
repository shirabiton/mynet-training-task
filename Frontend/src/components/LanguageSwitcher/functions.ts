import { i18n } from "i18next";

export const toggleLanguage = (i18n:i18n) => {
    const currentLang = i18n.language;
    const newLang = currentLang === "he" ? "en" : "he";
    i18n.changeLanguage(newLang);
};