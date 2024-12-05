import { createContext, useContext, useEffect, useState } from "react";

// creo el contexto para el idioma
export const LangContext = createContext();

// función para usar el contexto
export const useLangContext = () => {
  const langContext = useContext(LangContext);
  return langContext;
};

// children son los componentes que van a poder acceder a lo que hay en el contexto
export const LangProvider = ({ children }) => {
  // trae desde el sessionStorage, y sino es ingles por defecto
  const [lang, setLang] = useState(() => {
    return sessionStorage.getItem("lang")
      ? sessionStorage.getItem("lang")
      : "en";
  });

  // cambia el idioma
  const changeLang = () => {
    lang === "en" ? setLang("es") : setLang("en");
  };

  // guarda el idioma en el sessionStorage cada vez que lo cambiamos
  useEffect(() => {
    sessionStorage.setItem("lang", lang);
  }, [lang]);

  return (
    // todo lo que este dentro del LangContext.Provider va a poder acceder al idioma y a la función que lo maneja
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );
};
