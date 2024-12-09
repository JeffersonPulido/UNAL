import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import LanguageContext from '../context/LanguageContext'
import AuthContext from '../context/AuthContext'

export const MainContext = () => {
    const {theme} = useContext(ThemeContext)
    const {texts} = useContext(LanguageContext)
    const {auth} = useContext(AuthContext)

  return (
    <main className={theme}>
        {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
        <p>{texts.mainContent}</p>
    </main>
  )
}
