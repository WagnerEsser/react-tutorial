import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            "Home": "Home",
            "Page": "Page",
            "Page-param": "Page (with parameter)",
            "About": "About",
            "Add-character": "Add a character with a name and a job to the table.",
            "Name": "Name",
            "Job": "Job",
            "Remove": "Remove",
            "Add-new": "Register a new",
            "Submit": "Register",
            "Footer": "Footer",
            "Delete": "Delete",
            "Param-not-found": "Parameter not found",
            "Parameter": "Parameter",
        }
    },
    pt: {
        translation: {
            "Home": "Início",
            "Page": "Página",
            "Page-param": "Página (com parâmetro)",
            "About": "Sobre",
            "Add-character": "Adicione um personagem com um nome e um emprego para a tabela",
            "Name": "Nome",
            "Job": "Cargo",
            "Remove": "Remover",
            "Add-new": "Registre um novo",
            "Submit": "Registrar",
            "Footer": "Rodapé",
            "Delete": "Deletar",
            "Param-not-found": "Parâmetro não encontrado",
            "Parameter": "Parâmetro",
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: "pt",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;