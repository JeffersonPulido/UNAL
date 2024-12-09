import React, { useContext } from 'react'
import ThemeContext from './../context/ThemeContext';
import LanguageContext from './../context/LanguageContext';
import AuthContext from './../context/AuthContext';

export const HeaderContext = () => {

    const {theme, handleTheme} = useContext(ThemeContext)
    const {texts, handleLanguage} = useContext(LanguageContext)
    const {auth, handleAuth} = useContext(AuthContext)

  return (
    <header className={theme}>
        <h2>{texts.headerTitle}</h2>
        <h3>{texts.headerSubtitle}</h3>
        {/* Cambiar idioma */}
        <select name="language" onChange={handleLanguage}>
            <option value="es">Español</option>
            <option value="en">Ingles</option>
        </select>
        {/* Modo dia / noche */}
        <input type="radio" name='theme' id='light' value='light' onChange={handleTheme}/>
        <label htmlFor="light">{texts.headerLight}</label>
        <input type="radio" name='theme' id='dark' value='dark' onChange={handleTheme}/>
        <label htmlFor="dark">{texts.headerDark}</label>
        {/* Auth */}
        <button onClick={handleAuth}>
            {
                auth ? texts.buttonLogout : texts.buttonLogin
            }
        </button>
    </header>
  )
}
